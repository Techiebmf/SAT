import { connect } from 'react-redux'
import React, {Component} from 'react'
import HeaderComponent from '../../components/HeaderComponent/index.js';
import {textChange} from './action';
import HomeSlider from '../../components/HomeSlider';


class Home extends Component {
    
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
            <div>
               <div className="page-container">
                    <HeaderComponent/>
               </div>
                <HomeSlider/>
            </div>
               )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const App = connect(
    mapStateToProps
)(Home)
export default App;