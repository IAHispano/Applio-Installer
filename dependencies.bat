@echo off
setlocal

where cl >nul 2>&1
if %errorlevel% neq 0 (
    curl -Lo BuildToolsInstaller.exe https://aka.ms/vs/17/release/vs_BuildTools.exe
    start /wait BuildToolsInstaller.exe --add Microsoft.VisualStudio.Component.VC.14.29.x86.x64 --p
    where cl >nul 2>&1
    del BuildToolsInstaller.exe
)

git --version >nul 2>&1
if %errorlevel% neq 0 (
    curl -Lo GitInstaller.exe https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe
    start /wait GitInstaller.exe /SILENT
    git --version >nul 2>&1
    if %errorlevel% neq 0 (
        echo Git installation failed. Please install Git manually and run this script again.
    )
    del GitInstaller.exe
)

where python >nul 2>&1
if %errorlevel% neq 0 (
    curl -Lo PythonInstaller.exe https://www.python.org/ftp/python/3.9.8/python-3.9.8-amd64.exe
    start /wait PythonInstaller.exe /passive
    where python >nul 2>&1
    if %errorlevel% neq 0 (
        echo Python installation failed. Please install Python manually and run this script again.
    )
    del PythonInstaller.exe
)

where VCRedistInstaller.exe >nul 2>&1
if %errorlevel% neq 0 (
    curl -Lo VCRedistInstaller.exe https://aka.ms/vs/17/release/vc_redist.x64.exe
    start /wait VCRedistInstaller.exe /quiet
    del VCRedistInstaller.exe
)

echo Git, Python 3.9.8, and Build Tools for Visual Studio are installed.
echo Continuing with the script execution...
echo.
