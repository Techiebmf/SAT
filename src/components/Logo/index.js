import React, {Component} from 'react';
import ImgIcon from '../ImageIcon';
import logoImg from '../../assets/images/logo_img.png';
import './style.scss';

export default class LogoComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cs-logo-wrap">
                <ImgIcon className="img-responsive" src={logoImg} />
            </div>
         )
    }
}

