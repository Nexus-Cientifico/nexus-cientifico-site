Set-Location "C:\Users\dicez\Claude\Projects\Nexus Cientifico\nexus-site"
Write-Host "=== Nexus Cientifico - Dev Server ===" -ForegroundColor Cyan
Write-Host "Instalando dependencias..." -ForegroundColor Yellow
npm install
Write-Host "Iniciando servidor em http://localhost:5173 ..." -ForegroundColor Green
npm run dev
