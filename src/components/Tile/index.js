import React, {Component} from 'react';

export default class Tile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tileStyle = {
            background: 'linear-gradient(180deg, rgba(0,0,0,0.00),rgba(0,0,0,0.14)),url(https://australianhiker.com.au/wp-content/uploads/2016/09/DSC00631-264x298.jpg)',   
        };
        return (
            <div className="tile">
                <div className="spacer" style={tileStyle}> 
                    <div className="info">
                    <h2>“Kokoda Track” – Mt Ainslie (4.5 km)</h2>
                    <div className="more">
                    Distance <b>4.5km</b>Duration <b> 1 hours</b> </div>
                    </div>
                </div>
               
            </div>
         )
    }
}

