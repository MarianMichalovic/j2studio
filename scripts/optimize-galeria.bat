@echo off
echo 🖼️  === Optimalizacia galerie J2Studio ===
echo.

REM Presun do scripts priecinka
cd /d "%~dp0"

REM Spustenie PowerShell skriptu
powershell -ExecutionPolicy Bypass -File "optimize-galeria.ps1"

pause