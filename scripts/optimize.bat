@echo off
echo === Instalacia zavislosti ===
cd /d "%~dp0"
npm install

echo.
echo === Spustenie optimalizacie ===
echo.
echo Vyberte format:
echo 1. WebP (odporucane - najlepsia kompresia)
echo 2. JPEG (kompatibilnejsi)
echo.
set /p choice="Zadajte cislo (1 alebo 2): "

if "%choice%"=="1" (
    echo Optimalizujem do WebP formatu...
    node optimize-images.js --format=webp
) else if "%choice%"=="2" (
    echo Optimalizujem do JPEG formatu...
    node optimize-images.js --format=jpeg
) else (
    echo Neplatna volba, pouzivam WebP...
    node optimize-images.js --format=webp
)

echo.
echo === HOTOVO ===
pause
