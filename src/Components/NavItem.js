import React, { Component } from "react";
import {Route,Link} from "react-router-dom";

export default class Navitem extends Component{

    render(){
        const {children , activeOnlyWhenExact , to} = this.props;
        return(
            <Route path={decodeURIComponent(to.pathname)} exact={activeOnlyWhenExact} children={({ match }) => (
                <li className={match ? "active" : ""}>
                    <Link to={to.pathname} >{children}</Link>
                </li>
            )}
            />

        )
    }
}