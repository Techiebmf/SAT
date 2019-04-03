import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidebar">
                        <form action="" method="get">
                            <input type="search" name="ss" placeholder="Type to search" value=""/>
                            <br/>
                            <br/>
                        </form>
                        <li className="selected"><a href="https://australianhiker.com.au/trails/">All</a></li>
                        <ul className="sidebar-list">
                        <li><a href="?region=act">ACT</a></li>
                        <li><a href="?region=nsw">NSW</a></li>
                        <li><a href="?region=nt">NT</a></li>
                        <li><a href="?region=qld">QLD</a></li>
                        <li><a href="?region=sa">SA</a></li>
                        <li><a href="?region=tas">TAS</a></li>
                        <li><a href="?region=vic">VIC</a></li>
                        <li><a href="?region=wa">WA</a></li>
                        </ul>
                       
                        <form action="" method="get">
                        <div className="slider">
                        <div className="range inactive" data-widget="slider">
                        <span className="label bottom">0km</span>
                        <span className="label top">1000km</span>
                        <input type="range" name="dist" step="0.1" min="1" max="10"/>
                        <span className="label data">Distance</span>
                        </div>
                        </div>
                        <div className="slider">
                        <div className="range  inactive" data-widget="slider">
                        <span className="label bottom">0m</span>
                        <span className="label top">8848m</span>
                        <input type="range" name="alt" step="0.1" min="1" max="10"/>
                        <span className="label data">Peak Altitude</span>
                        </div>
                        </div>
                        <div className="slider">
                        <div className="range  inactive" data-widget="slider">
                        <span className="label bottom">1hr</span>
                        <span className="label top">20days</span>
                        <input type="range" name="dur" step="0.1" min="1" max="10"/>
                        <span className="label data">Duration</span>
                        </div>
                        </div>
                        </form>
                        </div>
            </div>
         )
    }
}

