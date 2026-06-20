@echo off
title SaveRoom v5.5 Reset
cd /d "%~dp0"

echo SaveRoom v5.5 temiz kurulum baslatiliyor...
echo.

if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .expo rmdir /s /q .expo

call "C:\Program Files\nodejs\npm.cmd" install
call "C:\Program Files\nodejs\npx.cmd" expo start --lan --clear

pause
