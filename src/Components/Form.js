﻿import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
    render() {
        return (
            <div className="col-xs-12">
                <div className="container">
                    <div className="back">
                        <Link to="/dashboard" className="btn go-back">back</Link>
                    </div>
                    Form
                </div>
            </div>
        )
    }
}

export default Form;