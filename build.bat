@echo off
set build_dir= build

set asar_dir=%build_dir%\resources\
echo.
echo Build Directory: %build_dir%
echo Resource Directory: %asar_dir% 
echo.
echo Renaming electron.exe
ren "%build_dir%\electron.exe" colortool.exe
echo Deleting default_app.asar
del "%asar_dir%\default_app.asar"
echo Compiling js and less
call npm run-script compile-js
call npm run-script compile-less
mkdir build-asar

echo.
echo Please press 'd' or 'a' (for all) if neccesary
echo.
xcopy "app" "build-asar/app" /E
cp package.json build-asar/
cp main.js build-asar/

echo.
echo.
echo Packaging to asar package
call asar pack build-asar %asar_dir%\app.asar
echo.
echo Finished
echo.
echo Now editing executable resources
echo.
echo Editing Company Name
rcedit.exe "%build_dir%\colortool.exe" --set-version-string "CompanyName" "Binary Donuts"
echo Editing Comments
rcedit.exe "%build_dir%\colortool.exe" --set-version-string "Comments" "Color Tool, made with electron."
echo Editing Description
rcedit.exe "%build_dir%\colortool.exe" --set-version-string "FileDescription" "Color Tool"
echo Editing ProductName
rcedit.exe "%build_dir%\colortool.exe" --set-version-string "ProductName" "Color Tool"

echo.
echo.

echo Done, build is stored in '%build_dir%'
