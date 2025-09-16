# Optimalizácia galérie J2Studio
# Spracuje všetky obrázky v public/galeria do WebP s kvalitou 65%

Write-Host "🖼️  === Optimalizácia galérie J2Studio ===" -ForegroundColor Cyan
Write-Host ""

# Kontrola Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js nie je nainštalovaný!" -ForegroundColor Red
    Write-Host "   Stiahnite z: https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

# Presun do scripts priečinka
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "📂 Pracovný priečinok: $scriptPath" -ForegroundColor Yellow

# Kontrola závislostí
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Inštalujem závislosti..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Chyba pri inštalácii závislostí!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Závislosti nainštalované" -ForegroundColor Green
}

# Spustenie optimalizácie
Write-Host ""
Write-Host "🚀 Spúšťam optimalizáciu galérie..." -ForegroundColor Cyan
Write-Host "📊 Kvalita: 65%" -ForegroundColor Yellow
Write-Host "🎨 Formát: WebP" -ForegroundColor Yellow
Write-Host ""

npm run optimize:galeria

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Optimalizácia dokončená!" -ForegroundColor Green
    Write-Host "📁 Optimalizované obrázky sú v: public/galeria_optimized_webp" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "💡 Tip: Nahraďte pôvodné obrázky optimalizovanými verziami." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Optimalizácia zlyhala!" -ForegroundColor Red
}

Write-Host ""
Write-Host "Stlačte Enter pre zatvorenie..." -ForegroundColor Gray
Read-Host