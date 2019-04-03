import React, {Component} from 'react';
import trigger from '../../assets/images/trigger.png';
import './style.scss';

export default class MenuComp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            mobileMenu: false
        }
    }

    toggleMenu = () => {
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }

    render() {
        const btnBg = {
            backgroundImage: trigger,   
        };
        return (
          <div>
            <div className="trigger-box" style={btnBg} onClick={() => this.toggleMenu()}></div>
            <div className={`cs-menu-inner-wrap ${this.state.mobileMenu && 'show-mobile-menu'}`}>
                
                <ul id="menu-menu-2" className="menu">
                    {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9879"><a href="#/blog/">Journeys</a></li> */}
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"><a href="#/episodes/">Cycle Trek</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"><a href="#/gear/">Blog</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="#/advice/">Advice</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"><a href="#/trails/">Treks</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"><a href="#/about/">About</a></li>
                </ul>
            </div>
          </div>
         )
    }
}

