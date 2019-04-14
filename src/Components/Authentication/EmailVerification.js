import React, { Component } from 'react';
import "../../Styles/EmailVerification.css";
import Button from "@material-ui/core/Button/Button";
import SuccussAlert from "../ShareComponent/SuccussAlert";
import {withRouter} from "react-router-dom";
import queryString from 'query-string';
import * as dotnetify from "dotnetify";
import WarningAlert from "../ShareComponent/WarningAlert";

class EmailVerification extends Component{
    constructor(props){
        super(props);
        const values = queryString.parse(this.props.location.search);
        this.state=({
            Token : values.verify_token,
            TokenVerified:false,
            SubmitErrors:"",
        });
        this.vm = dotnetify.react.connect('EmailVerification', this, { vmArg: { Token: values.verify_token }});
    }

    componentDidMount() {

    }


    _handleRedirect(){
        this.props.history.push('/')
    }
    render(){
        const {TokenVerified, SubmitErrors}=this.state;
        console.log(this.state.TokenVerified, this.state.SubmitErrors);
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 main-div">
                    <div className="email-verification-container">
                        <div className="col-xs-12 text-center alert-container">
                            {TokenVerified
                                ?<SuccussAlert/>
                                :<WarningAlert/>
                            }
                        </div>
                        {TokenVerified
                            ?  <div>
                                    <h1 className="col-xs-12 text-center">Email address verified</h1>
                                    < p className = "col-xs-12 text-center greeting-text" > Thank you for verifing your email address</p>
                                </div>

                            :<div>

                                <h1 className="col-xs-12 text-center h1-error">{SubmitErrors}</h1>
                                {/*< p className = "col-xs-12 text-center greeting-text error" ></p>*/}
                            </div>

                        }
                        <div className="col-xs-12 text-center">
                            <Button variant="contained" color="primary" className="redirect-to_home" onClick={this._handleRedirect.bind(this)}>
                                Home Page
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(EmailVerification);