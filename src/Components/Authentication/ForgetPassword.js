import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../../Styles/auth.css";
import Button from '@material-ui/core/Button';
import validator from "validator";


class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: "",
            },
            errors: {}
        }
    }

    // submit(event){
    //     event.preventDefault();
    //     // if(this.state.valid) this.props.history.push('/phoneconfirmation')
    // }


    handleChange(event) {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields })
    }

    handleValidation(callback) {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        // validate mail
        if (validator.isEmpty(fields.email)) {
            formIsValid = false;
            errors["email"] = "Email address can't be empty.";
        } else if (!validator.isEmail(fields.email)) {
            formIsValid = false;
            errors["email"] = "Email address is invalid.";
        }

        // set errors
        this.setState({ errors }, () => {
            return callback(formIsValid);
        })


    }

    handlesubmit(event) {
        event.preventDefault();
        this.handleValidation((valid) => {
            if (valid) {
                console.log("forgetpass word")

                // this.props.history.push('/phoneconfirmation')
            }
        })
    }



    render() {
        return (

            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 main-div">
                    <div className="form-signin-or-up-container">
                        <h1 className="text-center colored-header-box">Forgot your password?</h1>
                        <form className="register-form" onSubmit={this.handlesubmit.bind(this)}>
                            <FormControl
                                type="text"
                                className="sign-up-form"
                                value={this.state.fields.email}
                                placeholder="Email address"
                                name="email"
                                onChange={this.handleChange.bind(this)}
                            />
                            {this.state.errors.email ?
                                <span className="input-errors" >{this.state.errors.email}</span>
                                :
                                null
                            }
                            <Button variant="contained" color="primary" className="submit-btn" type="submit">
                                Reset password
                            </Button>
                        </form>
                        <div className="col-xs-12 no-horizantal go-to-login text-center">
                            <span>Remember your password? </span>
                            <span><Link to="/login">Log in</Link></span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ForgetPassword;
