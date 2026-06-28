@echo off
title Nexus Cientifico - Dev Server
cd /d "C:\Users\dicez\Claude\Projects\Nexus Cientifico\nexus-site"
echo.
echo === NEXUS CIENTIFICO - INICIANDO SERVIDOR DE DESENVOLVIMENTO ===
echo.
echo Instalando dependencias (aguarde)...
call npm install
echo.
echo Iniciando servidor em http://localhost:5173 ...
echo Deixe esta janela aberta enquanto valida o site.
echo.
npm run dev
pause
