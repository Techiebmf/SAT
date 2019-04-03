import { connect } from 'react-redux';
import React, {Component} from 'react';
import {textChange} from './action';
import ImgIcon from '../../components/ImageIcon';
import HeaderComponent from '../../components/HeaderComponent/index.js';
import Tile from '../../components/Tile';
import SidebarAbout from '../../components/SidebarAbout';
import Detailpage from '../../components/Detailpage';
import './style.scss';

class About extends Component {    
    constructor(props,context){
        super(props,context);
    }  

    render() {   
        const topBg = {
            backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url( https://australianhiker.com.au/wp-content/uploads/2016/09/pexels-photo-4-1400x933.jpg)',   
        };     
        return (
            <Detailpage/>
        )    
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const AboutComp = connect(mapStateToProps)(About)
export default AboutComp;