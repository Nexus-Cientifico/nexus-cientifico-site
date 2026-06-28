Set-Location "C:\Users\dicez\Claude\Projects\Nexus Cientifico\nexus-site"
Stop-Process -Name "git" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1
Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue
Remove-Item ".git\index" -Force -ErrorAction SilentlyContinue
git reset
git add "public/images/logo.png"
git add "src/components/layout/Header.jsx"
git add "src/components/layout/Header.module.css"
git add "src/components/layout/Footer.jsx"
git add "src/components/layout/Footer.module.css"
git add ".gitignore"
git commit -m "feat: replace LogoMark placeholder with real Nexus logo"
git push origin main
