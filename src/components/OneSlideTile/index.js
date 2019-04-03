import React, {Component} from 'react';
import ImgIcon from '../ImageIcon';
import cycleIcon from '../../assets/images/bike.gif';
import './style.scss'

export default class OneSlideTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const height1 = {
            height: '40%'
        }
        const height2 = {
            height: '80%'
        }
        return (
            <div className="episode">
            <div className="cycle-icon-wrap">
                <ImgIcon className="img-responsive" src={cycleIcon}/>
            </div>
            <h2>100-Trail Design</h2>
            </div>
         )
    }
}

