# Initialize Git repository for this project
# Usage: Open PowerShell as the user who owns the project and run this script
# Adjust user.name and user.email below if you want different author identity

Set-Location -Path "c:\Users\mdunk\Documents\Fertigungscheckliste"

# Initialize repository
git init

# Configure local user identity (change these values before running if desired)
git config user.email "marceldunkel78@gmail.com"
git config user.name "marceldunkel78-creator"

# Add files and commit
git add .
git commit -m "Initial commit"

Write-Host "Git repo initialized in $(Get-Location)."