@echo off
setlocal

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

reg query "HKEY_LOCAL_MACHINE\Software\Python\PythonCore\3.9" >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed. Python will be installed automatically.

    curl -Lo PythonInstaller.exe https://www.python.org/ftp/python/3.9.8/python-3.9.8-amd64.exe

    start /wait PythonInstaller.exe /passive

    reg query "HKEY_LOCAL_MACHINE\Software\Python\PythonCore\3.9" >nul 2>&1
    if %errorlevel% neq 0 (
        echo Python installation failed. Please install Python manually and run this script again.
    )

    del PythonInstaller.exe
)


where cl >nul 2>&1
if %errorlevel% neq 0 (
    echo Visual Studio Build Tools are not installed. Build Tools will be installed automatically.

    curl -Lo BuildToolsInstaller.exe https://aka.ms/vs/17/release/vs_buildtools.exe

    start /wait BuildToolsInstaller.exe --quiet --wait --norestart --nocache

    where cl >nul 2>&1
    if %errorlevel% neq 0 (
        echo Build Tools installation failed. Please install Build Tools manually and run this script again.
    )

    del BuildToolsInstaller.exe
) else (
    echo Git, Python 3.9.8, and Visual Studio Build Tools are installed.
    echo Continuing with the script execution...
    echo.
)

where vc_redist.x64.exe >nul 2>&1
if %errorlevel% neq 0 (
    echo Visual C++ Redistributable is not installed. Redistributable will be installed automatically.

    curl -Lo VCRedistInstaller.exe https://aka.ms/vs/17/release/vc_redist.x64.exe

    start /wait VCRedistInstaller.exe /quiet

    where vc_redist.x64.exe >nul 2>&1
    if %errorlevel% neq 0 (
        echo Visual C++ Redistributable installation failed. Please install it manually and run this script again.
    )

    del VCRedistInstaller.exe
)

echo Git, Python 3.9.8, and Visual Studio Build Tools are installed.
echo Continuing with the script execution...
echo.
