# Jednoduchý skript pre optimalizáciu obrázkov pomocou .NET
# Nevyžaduje externé nástroje, ale má obmedzené možnosti

Add-Type -AssemblyName System.Drawing

param(
    [int]$Quality = 85,
    [int]$MaxWidth = 1920,
    [int]$MaxHeight = 1080
)

Write-Host "=== Optimalizácia obrázkov (základná verzia) ===" -ForegroundColor Green
Write-Host "Kvalita: $Quality%" -ForegroundColor Yellow
Write-Host "Max rozmery: ${MaxWidth}x${MaxHeight}px" -ForegroundColor Yellow
Write-Host ""

function Optimize-ImageBasic {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Quality,
        [int]$MaxWidth,
        [int]$MaxHeight
    )
    
    try {
        # Načítanie obrázka
        $image = [System.Drawing.Image]::FromFile($InputPath)
        
        # Výpočet nových rozmerov
        $ratioX = $MaxWidth / $image.Width
        $ratioY = $MaxHeight / $image.Height
        $ratio = [Math]::Min($ratioX, $ratioY)
        
        if ($ratio -ge 1) {
            $ratio = 1  # Nezvačšovať obrázky
        }
        
        $newWidth = [int]($image.Width * $ratio)
        $newHeight = [int]($image.Height * $ratio)
        
        # Vytvorenie nového obrázka
        $resizedImage = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($resizedImage)
        
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        
        $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
        
        # Nastavenie kvality pre JPEG
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        
        # Uloženie
        $resizedImage.Save($OutputPath, $jpegCodec, $encoderParams)
        
        # Vyčistenie pamäte
        $graphics.Dispose()
        $resizedImage.Dispose()
        $image.Dispose()
        
        return $true
    }
    catch {
        Write-Host "    ✗ Chyba: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

function Process-Folder {
    param(
        [string]$FolderPath,
        [string]$OutputFolder
    )
    
    if (-not (Test-Path $FolderPath)) {
        Write-Host "Priečinok $FolderPath neexistuje!" -ForegroundColor Red
        return
    }
    
    if (-not (Test-Path $OutputFolder)) {
        New-Item -ItemType Directory -Path $OutputFolder -Force | Out-Null
        Write-Host "Vytvorený priečinok: $OutputFolder" -ForegroundColor Blue
    }
    
    $imageFiles = Get-ChildItem -Path $FolderPath -Include @("*.jpg", "*.jpeg") -Recurse
    
    Write-Host "Spracovávam $($imageFiles.Count) obrázkov v $FolderPath..." -ForegroundColor Cyan
    
    foreach ($file in $imageFiles) {
        $inputPath = $file.FullName
        $outputPath = Join-Path $OutputFolder ($file.Name -replace '\.(jpg|jpeg)$', '_optimized.jpg')
        
        Write-Host "  Optimalizujem: $($file.Name)" -ForegroundColor Gray
        
        if (Optimize-ImageBasic -InputPath $inputPath -OutputPath $outputPath -Quality $Quality -MaxWidth $MaxWidth -MaxHeight $MaxHeight) {
            $originalSize = [math]::Round((Get-Item $inputPath).Length / 1KB, 2)
            $optimizedSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
            $savings = [math]::Round((1 - ($optimizedSize / $originalSize)) * 100, 1)
            
            Write-Host "    ✓ $originalSize KB → $optimizedSize KB (úspora: $savings%)" -ForegroundColor Green
        }
    }
}

# Cesty k priečinkom
$projectRoot = Split-Path $PSScriptRoot -Parent
$kuchynaPath = Join-Path $projectRoot "public\img\kuchyna"
$montazePath = Join-Path $projectRoot "public\img\montaze"
$outputKuchyna = Join-Path $projectRoot "public\img\kuchyna_optimized_basic"
$outputMontaze = Join-Path $projectRoot "public\img\montaze_optimized_basic"

Write-Host ""
Write-Host "Začínam optimalizáciu..." -ForegroundColor Green

# Optimalizácia kuchýň
Write-Host ""
Write-Host "=== KUCHYNE ===" -ForegroundColor Magenta
Process-Folder -FolderPath $kuchynaPath -OutputFolder $outputKuchyna

# Optimalizácia montáží
Write-Host ""
Write-Host "=== MONTÁŽE ===" -ForegroundColor Magenta
Process-Folder -FolderPath $montazePath -OutputFolder $outputMontaze

Write-Host ""
Write-Host "=== HOTOVO ===" -ForegroundColor Green
Write-Host "Optimalizované obrázky sú uložené v:" -ForegroundColor Yellow
Write-Host "  - $outputKuchyna" -ForegroundColor White
Write-Host "  - $outputMontaze" -ForegroundColor White
