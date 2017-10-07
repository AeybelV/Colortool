import React from 'react';

class RGBSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rgbValue: {red: 50, green: 50, blue: 50},
            hexValue: "323232",
            hslValue: {hue: 0, saturation: 0, lightness: 20}
        };
    }
    updateAllValues(){
        document.getElementsByTagName('body')[0].style.background = "rgb("+this.state.rgbValue.red+","+this.state.rgbValue.green+","+this.state.rgbValue.blue+")";
        var newHex = rgbToHex(this.state.rgbValue.red, this.state.rgbValue.green, this.state.rgbValue.blue);
        this.setState({hexValue: newHex});
        var newHSL = rgbToHsl(this.state.rgbValue.red, this.state.rgbValue.green, this.state.rgbValue.blue);
        this.setState({hslValue: newHSL});
        if((this.state.rgbValue.red == 0 && this.state.rgbValue.green == 0 && this.state.rgbValue.blue <= 40) || (this.state.rgbValue.red == 0 && this.state.rgbValue.green <= 40 && this.state.rgbValue.blue <= 40) || (this.state.rgbValue.red <= 40 && this.state.rgbValue.green <= 40 && this.state.rgbValue.blue == 0)){
            var i = 255-this.state.rgbValue.blue;
            document.getElementById("color_displays").style.color = "rgb("+i+","+i+","+i+")";
        }
        else{
            document.getElementById("color_displays").style.color = "black";
        }
    }
    updateRedValue(evt){
        this.setState({rgbValue: {red: evt.target.value, green: this.state.rgbValue.green, blue: this.state.rgbValue.blue}});
        this.updateAllValues();
    }
    updateRGBValue(evt){
        var isRGB = false;
        var isRGBNumber = false;
        var s = evt.target.value.split(/[()]+/).filter(function(e) { return e; });
        var c = evt.target.value.split(',');

        var redv;
        var greenv;
        var bluev;
        if(s[0] == 'rgb'){
            isRGB = true;
            var sc = s[1].split(',');
            var r = parseInt(sc[0]);
            var g = parseInt(sc[1]);
            var b = parseInt(sc[2]);
            if(255 >= r && 255 >= g && 255 >= b){
                isRGBNumber = true;
                redv = r;
                greenv = g;
                bluev = b;
            }
        }
        else{
            var r = parseInt(c[0]);
            var g = parseInt(c[1]);
            var b = parseInt(c[2]);

            if(255 >= r && 255 >= g && 255 >= b){
                isRGBNumber = true;
                redv = r;
                greenv = g;
                bluev = b;
            }
        }

        if(isRGBNumber || (isRGB && isRGBNumber)){
            this.setState({rgbValue: {red: redv, green: greenv, blue: bluev}});
            this.updateAllValues();
        }
    }
    updateGreenValue(evt){
        this.setState({rgbValue: {red: this.state.rgbValue.red, green: evt.target.value, blue: this.state.rgbValue.blue}});
        //evt.target.style.background = "rgb(0,"+this.state.rgbValue.green+",0)";
        this.updateAllValues();
    }
    updateBlueValue(evt){
        this.setState({rgbValue: {red: this.state.rgbValue.red, green: this.state.rgbValue.green, blue: evt.target.value}});
        //evt.target.style.background = "rgb(0,0,"+this.state.rgbValue.blue+")";
        this.updateAllValues();
    }
    
    render(){
        return(
            <div>
                <input className="text_box" id="rgb_textbox" type="text" placeholder="rgb()" onChange={evt => this.updateRGBValue(evt)}/>
                <div className="slider_container">
                    <div className="slider_div"><input type="range" min="0" max="255" value={this.state.rgbValue.red} onChange={evt => this.updateRedValue(evt)} className="slider" id="slider_red"/></div>
                    <div className="slider_div"><input type="range" min="0" max="255" value={this.state.rgbValue.green} onChange={evt => this.updateGreenValue(evt)} className="slider" id="slider_green"/></div>
                    <div className="slider_div"><input type="range" min="0" max="255" value={this.state.rgbValue.blue} onChange={evt => this.updateBlueValue(evt)} className="slider" id="slider_blue"/></div>
                </div>
                <div id="color_displays" >
                    <h3 id="rgb_display">RGB: {this.state.rgbValue.red},{this.state.rgbValue.green},{this.state.rgbValue.blue}</h3>
                    <h3 id="hex_display">HEX: #{this.state.hexValue}</h3>
                    <h3 id="hsl_display">HSL: {this.state.hslValue.hue},{this.state.hslValue.saturation},{this.state.hslValue.lightness}</h3>
                </div>
            </div>
        );
    }
}

export default RGBSlider;