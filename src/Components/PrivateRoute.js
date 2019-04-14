import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import auth from './../auth';
import dotnetify from 'dotnetify';

class PrivateRoute extends Component{
    constructor(props){
        super(props);
        this.state=({
            isLoading: true,
        });

        //// Send access_token to server in order to authorization
        this.vm = dotnetify.react.connect('AppLayout', this, {
           headers: { Authorization: 'Bearer ' + auth.getAccessToken() },
           exceptionHandler: _ => auth.signOut()
        });

    }
  

    componentWillReceiveProps(nextProps ,props) {
        if (nextProps.auth !== props.auth) {
            this.setState({
                isLoading: false,
            })
        }
    }


    componentWillUnmount() {
        this.vm.$destroy();
    }



    render() {
        const { component: Component, auth: isAuthenticated, ...restProps } = this.props;
        const {isLoading}=this.state;
        return (
            <Route {...restProps} render={(props)=>(
                isLoading || isAuthenticated ?(
                    <Component {...props}/>
                ):(
                    <Redirect to={{pathname:'/login' , state:{from:props.location}}} />
                )
            )} />
        )
    }
}

PrivateRoute.propTypes={
    component:PropTypes.func.isRequired,
    path:PropTypes.string.isRequired,
};

export default PrivateRoute;









