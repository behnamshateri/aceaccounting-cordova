import {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {HandleLogin} from "../../Actions";
import ReactCodeInput from "react-code-input";
import Button from "@material-ui/core/Button/Button";
import React from "react";
import auth from "../../auth";
import {withRouter} from "react-router-dom";

class OtpCodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError:'',
            confirm: false,
            code:"",
            codeInputLength:this.props.codeInputLength,
        }
    }
    isvalid(value) {
        if (value.length === Number(this.state.codeInputLength, 10)) {
            this.setState({
                confirm: true,
                code:value,
            });
        } else {
            this.setState({
                confirm: false,
            })
        }
    }

    submit(event) {
        event.preventDefault();
        const {requestFrom, phonenumber}=this.props;

        // if user enter code completely
        if (this.state.confirm){
            // handle login for signup or signin
            switch(requestFrom){
                case "signup":
                    auth.signInUserAfterSignUp(this.state.code, phonenumber, this.props.countryISO2).then(_ => {
                        this.props.HandleLogin();
                        this.props.history.push('/dashboards');
                    }).catch(error => {

                        if (error.message === '400') {
                            this.setState({ loginError: 'Invalid OTP' });
                        }
                        else {
                            this.setState({ loginError: "There is no such user" });
                        }
                    });
                    break;

                case "login":
                    auth.signInWithPhone(this.state.code, phonenumber, this.props.countryISO2).then(_ => {
                        this.props.HandleLogin();
                        this.props.history.push('/dashboards');
                    }).catch(error => {

                        if (error.message === '400') {
                            this.setState({ loginError: 'Invalid OTP' });
                        }
                        else {
                            this.setState({ loginError: "There is no such user" });
                        }
                    });

                    break;
                default:
                    break;
            }

        }
    }


    render() {
        const {loginError, confirm, codeInputLength} = this.state;
        return (
            <div className="col-xs-12 no-horizantal">
                <h1 className="text-center colored-header-box">Enter confirmation code</h1>
                <p>
                    Please type the
                    <br />
                    One-Time-Passcode that we have
                    <br />
                    sent to your mobile phone:
                </p>
                <p>
                    {"+" + this.props.countryCode+" - "+this.props.phonenumber}
                </p>

                <ReactCodeInput
                    type='text'
                    fields={codeInputLength}
                    autoFocus
                    onChange={this.isvalid.bind(this)}
                />
                {loginError ?
                    <span className="input-errors text-center" style={{marginTop:"15px",marginBottom:"-10px"}}>{loginError}</span>
                    :
                    null
                }
                {confirm ?
                    <Button variant="contained" color="primary" className="submit-btn" onClick={this.submit.bind(this)}>
                        Submit
                    </Button>
                    : null
                }
            </div>
        )
    }
}


export default withRouter(connect(null, { HandleLogin })(OtpCodeForm));
