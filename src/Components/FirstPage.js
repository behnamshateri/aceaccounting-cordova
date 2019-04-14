import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

class FirstPage extends Component{
    render(){
        const {component:Component , auth : isAuthenticated , ...restProps}=this.props;
        return (
            <Route {...restProps} exact={true} render={(props)=>(
                isAuthenticated?(
                     <Redirect to={{pathname:'/dashboards' , state:{from:props.location}}}/>
                ):(
                     <Redirect to={{pathname:'/login' , state:{from:props.location}}}/>
                )
            )} />
        )
    }

}



FirstPage.propTypes={
    component:PropTypes.func.isRequired,
    path:PropTypes.string.isRequired,
};
export default FirstPage;