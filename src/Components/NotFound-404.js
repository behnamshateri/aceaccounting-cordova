import React, { Component } from "react";
import "./../Styles/404.css"
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";


class NotFound404 extends Component {
    handleredirect(){

    }
    render() {
        return (
            <div className="col-xs-12 main-div error-404">
                <h1>404</h1>
                <p className="colored-msg">OOPS, SORRY WE CANT FIND THAT PAGE!</p>
                <p className="usual-msg">Either something went wrong or the page doesn't exist anymore.</p>
                <Link to="/">
                    <Button variant="contained" color="primary" className="redirect-to-login" onClick={this.handleredirect.bind(this)}>
                        Home Page
                    </Button>
                </Link>

            </div>
        )
    }
}

export default NotFound404;