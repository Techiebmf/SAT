import { connect } from 'react-redux'
import React, {Component} from 'react'
import {textChange} from './action';
import HeaderComponent from '../../components/HeaderComponent/index.js';
import OneSlideTile from '../../components/OneSlideTile';
import Sidebar from '../../components/Sidebar';
import './style.scss'

class Episodes extends Component {    
    constructor(props,context){
        super(props,context);
    }

    componentWillMount() {
        //Initial call will go here
    }
    
    onButtonClick = () =>{
        this.props.dispatch(textChange())
    }

    render() {        
        return (
            <div className="tarils-wrap main-left-right-col">
                 <div className="page-container">
                    <HeaderComponent/>
                    <div className="left-col-70">
                        <div className="tile-conatiner">
                            <OneSlideTile/>
                            <OneSlideTile/>
                            <OneSlideTile/>
                            <OneSlideTile/>
                        </div>
                    </div>
                    <div className="right-col-30">   
                        <Sidebar/>                     
                    </div>
                </div>
            </div>
               )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const EpisodesComp = connect(mapStateToProps)(Episodes)
export default EpisodesComp;