import React from 'react';
import ReactDOM from 'react-dom';

import RGBSlider from './components/rgbSlider';
class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rgb: {red: 50, green: 50, blue: 50}
        };
    }
    render(){
        return(
            <div>
                <div className="nav">
                    <div className = "win_buttons button" id="close_button"></div>
                    <div className = "win_buttons button" id="min_button"></div>
                </div>
                <div className="buttons">
                    <div id="method_selection">
                        <div className="button"><p>RGB</p></div>
                        <div className="button"><p>HEX</p></div>
                        <div className="button"><p>HSL</p></div>
                    </div>
                </div>
                <RGBSlider></RGBSlider>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'));