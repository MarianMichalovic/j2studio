# Skript pre optimalizáciu obrázkov v priečinkoch img/kuchyna a img/montaze
# Požaduje nainštalovaný ImageMagick: https://imagemagick.org/script/download.php#windows

param(
    [string]$Quality = "85",
    [string]$MaxWidth = "1920",
    [string]$MaxHeight = "1080"
)

Write-Host "=== Optimalizácia obrázkov J2Studio ===" -ForegroundColor Green
Write-Host "Kvalita: $Quality%" -ForegroundColor Yellow
Write-Host "Max rozmery: ${MaxWidth}x${MaxHeight}px" -ForegroundColor Yellow
Write-Host ""

# Funkcia na optimalizáciu obrázkov v priečinku
function Optimize-Images {
    param(
        [string]$FolderPath,
        [string]$OutputFolder
    )
    
    if (-not (Test-Path $FolderPath)) {
        Write-Host "Priečinok $FolderPath neexistuje!" -ForegroundColor Red
        return
    }
    
    # Vytvorenie výstupného priečinka ak neexistuje
    if (-not (Test-Path $OutputFolder)) {
        New-Item -ItemType Directory -Path $OutputFolder -Force | Out-Null
        Write-Host "Vytvorený priečinok: $OutputFolder" -ForegroundColor Blue
    }
    
    # Získanie všetkých obrázkov
    $imageFiles = Get-ChildItem -Path $FolderPath -Include @("*.jpg", "*.jpeg", "*.png", "*.webp") -Recurse
    
    Write-Host "Spracovávam $($imageFiles.Count) obrázkov v $FolderPath..." -ForegroundColor Cyan
    
    foreach ($file in $imageFiles) {
        $inputPath = $file.FullName
        $relativePath = $file.Name
        $outputPath = Join-Path $OutputFolder ($relativePath -replace '\.(jpg|jpeg|png)$', '.webp')
        
        Write-Host "  Optimalizujem: $($file.Name)" -ForegroundColor Gray
        
        try {
            # ImageMagick príkaz pre optimalizáciu
            $magickArgs = @(
                "`"$inputPath`"",
                "-resize", "${MaxWidth}x${MaxHeight}>",
                "-quality", $Quality,
                "-strip",
                "-interlace", "Plane",
                "-define", "webp:lossless=false",
                "-define", "webp:method=6",
                "`"$outputPath`""
            )
            
            $process = Start-Process -FilePath "magick" -ArgumentList $magickArgs -Wait -PassThru -NoNewWindow
            
            if ($process.ExitCode -eq 0) {
                $originalSize = [math]::Round((Get-Item $inputPath).Length / 1KB, 2)
                $optimizedSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
                $savings = [math]::Round((1 - ($optimizedSize / $originalSize)) * 100, 1)
                
                Write-Host "    ✓ $originalSize KB → $optimizedSize KB (úspora: $savings%)" -ForegroundColor Green
            } else {
                Write-Host "    ✗ Chyba pri spracovaní $($file.Name)" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "    ✗ Chyba: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

# Kontrola či je ImageMagick nainštalovaný
try {
    $null = Get-Command "magick" -ErrorAction Stop
    Write-Host "ImageMagick je nainštalovaný ✓" -ForegroundColor Green
}
catch {
    Write-Host "CHYBA: ImageMagick nie je nainštalovaný!" -ForegroundColor Red
    Write-Host "Stiahnite a nainštalujte z: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    Write-Host "Potom reštartujte PowerShell a spustite skript znovu." -ForegroundColor Yellow
    exit 1
}

# Cesty k priečinkom
$projectRoot = Split-Path $PSScriptRoot -Parent
$kuchynaPath = Join-Path $projectRoot "public\img\kuchyna"
$montazePath = Join-Path $projectRoot "public\img\montaze"
$outputKuchyna = Join-Path $projectRoot "public\img\kuchyna_optimized"
$outputMontaze = Join-Path $projectRoot "public\img\montaze_optimized"

Write-Host ""
Write-Host "Začínam optimalizáciu..." -ForegroundColor Green

# Optimalizácia kuchýň
Write-Host ""
Write-Host "=== KUCHYNE ===" -ForegroundColor Magenta
Optimize-Images -FolderPath $kuchynaPath -OutputFolder $outputKuchyna

# Optimalizácia montáží
Write-Host ""
Write-Host "=== MONTÁŽE ===" -ForegroundColor Magenta
Optimize-Images -FolderPath $montazePath -OutputFolder $outputMontaze

Write-Host ""
Write-Host "=== HOTOVO ===" -ForegroundColor Green
Write-Host "Optimalizované obrázky sú uložené v:" -ForegroundColor Yellow
Write-Host "  - $outputKuchyna" -ForegroundColor White
Write-Host "  - $outputMontaze" -ForegroundColor White
Write-Host ""
Write-Host "Môžete teraz nahradiť pôvodné obrázky optimalizovanými verziami." -ForegroundColor Cyan
