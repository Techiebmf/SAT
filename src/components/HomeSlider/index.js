import React, {Component} from 'react';
import ImgIcon from '../ImageIcon';
import Slider from 'react-slick';
import BannerSlide from '../BannerSlide';
import imageone from '../../assets/images/DSC00164-1620x1080.jpg';
import imagetwo from '../../assets/images/pexels-photo-25638-e1476663833423.jpg';
import './style.scss';

export default class HomeSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className="cs-slider-wrap">
               <Slider {...settings}>
                <div><BannerSlide imgSrc={imageone}/></div>
                <div><BannerSlide imgSrc={imagetwo}/></div>
                <div><BannerSlide imgSrc={imageone}/></div>
                <div><BannerSlide imgSrc={imagetwo}/></div>
                </Slider>
            </div>

         )
    }
}

