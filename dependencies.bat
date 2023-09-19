@echo off
setlocal

rem Verificar si Git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git is not installed. Git will be installed automatically.

    curl -Lo GitInstaller.exe https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe

    start /wait GitInstaller.exe /SILENT

    git --version >nul 2>&1
    if %errorlevel% neq 0 (
        echo Git installation failed. Please install Git manually and run this script again.
    )

    del GitInstaller.exe
)

rem Verificar si Python está en la variable de entorno PATH
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not in the PATH. Python will be installed automatically.

    curl -Lo PythonInstaller.exe https://www.python.org/ftp/python/3.9.8/python-3.9.8-amd64.exe

    start /wait PythonInstaller.exe /passive

    where python >nul 2>&1
    if %errorlevel% neq 0 (
        echo Python installation failed. Please install Python manually and run this script again.
    )

    del PythonInstaller.exe
)

echo Git and Python 3.9.8 are installed.
echo Continuing with the script execution...
echo.