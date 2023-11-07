@echo off
Title Applio - Installer
setlocal
cd %~dp0


set "repoUrl=https://github.com/IAHispano/Applio-RVC-Fork.git"
set "repoFolder=Applio-RVC-Fork"
set "principal=%cd%\%repoFolder%"
set "runtime_scripts=%cd%\%repoFolder%\runtime\Scripts"
set "URL_BASE=https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main"
set "URL_EXTRA=https://huggingface.co/IAHispano/applio/resolve/main"
set "CONDA_ROOT_PREFIX=%UserProfile%\Miniconda3"
set "INSTALL_ENV_DIR=%cd%\env"
set "MINICONDA_DOWNLOAD_URL=https://repo.anaconda.com/miniconda/Miniconda3-py39_23.9.0-0-Windows-x86_64.exe"
set "conda_exists=F"

echo.
cls
echo INFO: It's important not to run this installer as an administrator as it might cause issues, and it's recommended to disable antivirus or firewall, as errors might occur when downloading pretrained models.
echo.

cls
for /f "delims=: tokens=*" %%A in ('findstr /b ":::" "%~f0"') do @echo(%%A
echo.

echo Cloning the repository...
git clone %repoUrl% %repoFolder%
cd %repoFolder%
del install_Applio.bat
del /q *.sh
echo.
cls

echo Installing dependencies...
cls
powershell -command "Invoke-WebRequest -Uri https://huggingface.co/IAHispano/applio/resolve/main/busybox.exe -OutFile busybox.exe"
busybox.exe wget %URL_EXTRA%/runtime.zip
echo.
echo Extracting the runtime.zip file...
powershell -command "& { Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory('runtime.zip', '%principal%') }"
echo.
del runtime.zip busybox.exe
cls
echo.

cls 
echo Applio has been successfully downloaded, run the file go-applio.bat to run the web interface!
echo.
exit