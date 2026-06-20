@echo off
title SaveRoom v5.5 Store Submission Pack
cd /d "%~dp0"

echo SaveRoom v5.5 Store Submission Pack baslatiliyor...
echo.

if not exist "C:\Program Files\nodejs\npm.cmd" (
  echo HATA: Node.js bulunamadi. Node.js LTS kurulu olmali.
  pause
  exit /b 1
)

echo Paketler kuruluyor / kontrol ediliyor...
call "C:\Program Files\nodejs\npm.cmd" install

echo.
echo Expo LAN modunda baslatiliyor...
call "C:\Program Files\nodejs\npx.cmd" expo start --lan --clear

echo.
pause
