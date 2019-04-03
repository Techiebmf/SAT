import React, {Component} from 'react';
import ImgIcon from '../ImageIcon';
import logoImg from '../../assets/images/logo_img.png';
import './style.scss';

export default class BannerSlide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slick-slide"> 
                <ImgIcon src={this.props.imgSrc}/>
                <div className="page-container slider-container">
                    <div class="col-7 col-sm-9 col-xs-12 slide-text-wrap">
                    <h2>Advice, first hand</h2>
                    <h3>Tips and advice from fanatical hikers. Let us do all the research</h3>
                    <a class="listen-now" href="/advice" tabindex="0">Read Advice</a>
                </div>  
               </div>              
            </div>
         )
    }
}

