import React, {Component} from 'react';
import './style.scss';

export default class SidebarAbout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidebar sidebar-about">
                    <ul className="small right">
                        About
                        <li><a href="#australian-hiker">Australian Hiker</a></li>
                        <li><a href="#australian-hiker">Australian Hiker</a></li>
                        <li><a href="#australian-hiker">Australian Hiker</a></li>
                        <li><a href="#australian-hiker">Australian Hiker</a></li>
                        <li><a href="#australian-hiker">Australian Hiker</a></li>
                        <li><a href="#australian-hiker">Australian Hiker</a></li>
                    </ul>
                </div>
            </div>
         )
    }
}

