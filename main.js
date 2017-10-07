const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

let mainWindow;
let version = "0.1 Alpha";

app.on('ready',function(){
    console.log("Color Tool "+version);
    console.log("Ready");
    createMainWindow();
});
app.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function(){
    if (mainWindow === null) {
      createMainWindow()
    }
})

function createMainWindow(){
    console.log("Created Main Window");
    mainWindow = new BrowserWindow({
        width: 500,
        height: 300,
        resizable: false,
        frame: false
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function(){
        mainWindow = null;
    })
}