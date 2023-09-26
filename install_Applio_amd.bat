@echo off
Title Applio - Installer
setlocal

set "repoUrl=https://github.com/IAHispano/Applio-RVC-Fork.git"
set "repoFolder=Applio-RVC-Fork"
set "principal=%cd%\%repoFolder%"
set "runtime_scripts=%cd%\%repoFolder%\runtime\Scripts"
set "URL_BASE=https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main"
set "URL_EXTRA=https://huggingface.co/IAHispano/applio/resolve/main"

for /f "delims=: tokens=*" %%A in ('findstr /b ":::" "%~f0"') do @echo(%%A
echo.

git clone %repoUrl% %repoFolder%
cd %repoFolder%
echo.

cls
curl -LJO "%URL_EXTRA%/runtime_dml.zip"
echo.
powershell -command "& { Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory('runtime_dml.zip', '%principal%') }"
echo.
del runtime_dml.zip
cls
echo.

echo Applio has been successfully downloaded, run the file go-applio.bat to run the web interface!
echo.
exit
