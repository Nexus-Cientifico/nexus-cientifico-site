Write-Host "=== NEXUS CIENTIFICO — DEPLOY SCRIPT ===" -ForegroundColor Cyan

Set-Location "C:\Users\dicez\Claude\Projects\Nexus Cientifico\nexus-site"
Write-Host "Pasta: $(Get-Location)" -ForegroundColor Yellow

# Configurar git global
git config --global user.email "chrischerkasov@gmail.com"
git config --global user.name "Nexus-Cientifico"
Write-Host "Git config OK" -ForegroundColor Green

# Inicializar repo
if (-not (Test-Path ".git")) {
    git init
    Write-Host "Git init OK" -ForegroundColor Green
} else {
    Write-Host "Repo ja existe" -ForegroundColor Yellow
}

# Adicionar arquivos
git add .
Write-Host "Git add OK" -ForegroundColor Green

# Commit
git commit -m "Initial commit - Nexus Cientifico site" 2>&1
Write-Host "Git commit OK" -ForegroundColor Green

# Branch main
git branch -M main

# Remote
git remote remove origin 2>$null
git remote add origin https://github.com/Nexus-Cientifico/nexus-cientifico-site.git
Write-Host "Remote configurado" -ForegroundColor Green

# Push
Write-Host "Fazendo push para GitHub..." -ForegroundColor Cyan
git push -u origin main 2>&1
Write-Host "Push concluido!" -ForegroundColor Green

Write-Host ""
Write-Host "=== RESULTADO ===" -ForegroundColor Cyan
git log --oneline -3
git remote -v

pause
