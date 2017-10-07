# Color Tool

Color tool is a electron app that allows to get RGB,HEX, and HSL values of a color. It also provides comparison of colors and darkening/lightening color by percentage etc.

### Prerequisites
* less-watch-compiler
* electron
* asar (Need for build)

### To build/run:

#### To run

Make sure you have all dependencies and electron installed.
run ``` npm install ``` to get all dependencies then run ``` npm start ``` to start running the application.

#### To build
NOTE: asar is needed to build properly.

First fetch a release of electron from https://github.com/electron/electron/releases/ and extract it to a folder
then adjust the batchfile or shell script to point to the build directory (the default folder is "build")

The asar will pack everything into a asar package and place it in the build directory.

Install dependencies
```bash
npm install
```
then build:

###### Windows
```bash
build.bat
```
###### UNIX
I dont have a shell script to build on UNIX systems yet, sorry!
Please refer to the windows batch script and translate it to its unix counterpart.

### TODOs

- [ ] Base app: get RGB,HEX,HSL values
- [ ] Compare colors
- [ ] Tray support
- [ ] Darkening/Lightening colors
- [ ] Brightness and Contrast
- [ ] Color inversions


and many more...