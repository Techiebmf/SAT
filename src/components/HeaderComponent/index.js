import React, {Component} from 'react';
import LogoComp from '../Logo';
import MenuComp from '../MenuComp'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="cs-header-wrap">
                    <LogoComp/>
                    <div className="cs-menu-wrap">
                        <MenuComp/>
                    </div>               
                </div>
                
            </div>
         )
    }
}

