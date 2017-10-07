const remote = require('electron').remote;

document.getElementById('close_button').addEventListener('click',function(){
    var window = remote.getCurrentWindow();
    window.close();
})
document.getElementById('min_button').addEventListener('click',function(){
    var window = remote.getCurrentWindow();
    window.minimize();
})