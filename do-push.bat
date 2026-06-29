@echo off
cd /d "C:\Users\dicez\Claude\Projects\Nexus Cientifico\nexus-site"
taskkill /f /im git.exe >nul 2>&1
ping -n 2 127.0.0.1 >nul
del /f /q ".git\index.lock" >nul 2>&1
git add .github/workflows/deploy.yml
git commit -m "ci: registrar www.nexuscientifico.com.br como dominio customizado no Pages"
git push origin develop:main
pause
