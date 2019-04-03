import React, {Component} from 'react';
import './style.scss';

export default class MenuComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cs-menu-inner-wrap">
                <ul id="menu-menu-2" className="menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9879"><a href="#/blog/">Journeys</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"><a href="#/episodes/">Episodes</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"><a href="#/gear/">Gear</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="#/advice/">Advice</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"><a href="#/trails/">Trails</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"><a href="#/about/">About</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6642"><a href="#/shop/">Shop</a></li>
                </ul>
            </div>
         )
    }
}

