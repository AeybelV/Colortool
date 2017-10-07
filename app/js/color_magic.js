function rgbToHex(r, g, b) {
    var rgb = b | (g << 8) | (r << 16);
    return (0x1000000 | rgb).toString(16).substring(1);
}
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) { h = s = 0; } 
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }
    h = (h*100+0.5)|0;
    s = ((s*100+0.5)|0);
    l = ((l*100+0.5)|0);
    return {hue: h,  saturation: s+'%',  lightness: l+'%'};
}