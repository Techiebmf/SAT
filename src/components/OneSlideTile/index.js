import React, {Component} from 'react';
import './style.scss'

export default class OneSlideTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const height1 = {
            height: '40%'
        }
        const height2 = {
            height: '80%'
        }
        return (
            <div className="episode">
            <h2>100-Trail Design</h2>
            <div className="waveform-cont">
            <div>
            <div className="col-8 col-sm-7 col-sm-12">
            <div className="waveform">
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            <div className="wave" style={height1}></div>
            <div className="wave" style={height2}></div>
            </div>
            </div>
            </div>
            </div>
            </div>
         )
    }
}

