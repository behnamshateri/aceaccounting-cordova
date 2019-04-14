import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

class Isnotlogin extends Component{
    render() {
        const {component:Component , path , auth : isAuthenticated , ...restProps}=this.props;
        return <Route {...restProps} render={(props)=>(
            isAuthenticated ?
                (
                    <Redirect to={{pathname:'/',state:{from:props.location}}}/>
                ):(
                     <Component {...props}/>
                )
        )} />
    }
}

Isnotlogin.propTypes={
    component:PropTypes.func.isRequired,
    path:PropTypes.string.isRequired,
};
export default Isnotlogin;