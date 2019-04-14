import React, { Component } from "react";
import "../../Styles/mobile-confirm.css";
import Button from '@material-ui/core/Button';
import { HandleLogin } from "../../Actions";
import connect from "react-redux/es/connect/connect";
import dotnetify from 'dotnetify';
import OtpCodeForm from "./OtpCodeForm";

class MobileConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm: false,
            code:"",
            CountryISO2:localStorage.getItem('countryISO2'),
            CountryCode:localStorage.getItem('countryCode'),
            phoneNumber:localStorage.getItem('phonenumber'),
            // loginError:"",
        };

        this.vm = dotnetify.react.connect('MobileVerfication', this);
    }


    componentWillUnmount() {
        this.vm.$destroy();
    }



    render() {
        const {phoneNumber} = this.state;

        return (
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 main-div">
                    <div className="form-signin-or-up-container text-center">

                        <OtpCodeForm phonenumber={phoneNumber} countryCode={this.state.CountryCode} countryISO2={this.state.CountryISO2} codeInputLength={4} requestFrom="login"/>

                        <div className="clearfix"></div>

                        <div className={["col-xs-12","cancel-container",this.state.confirm?"without-margin-top":""].join(" ")}>
                            <Button variant="outlined" onClick={()=>this.props.history.push('/login')}>
                                Back
                            </Button>
                        </div>

                        {/* <Link to="/" className={["resend-code", this.state.resendcode ? "visible" : "hidden"].join(' ')}>resend code</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { HandleLogin })(MobileConfirm);

