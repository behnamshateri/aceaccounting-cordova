import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import "../../Styles/auth.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'react-intl-tel-input/dist/main.css';
import validator from 'validator';
import { HandleLogin } from "../../Actions"
import { connect } from "react-redux";
import IntlTelInput from "react-intl-tel-input";
import { withNamespaces,Trans } from 'react-i18next';
import auth from './../../auth';
import propTypes from 'prop-types';
import dotnetify from "dotnetify";


class Login extends Component {

    constructor(props) {
        super(props);

        this.vm = dotnetify.react.connect('Login', this, {"base_url":"wss://devdash.aceaccounting.nl"});

        this.state = {
            checked: true,
            LoginType:true,
            validation: true,
            // LoginTypeText:'Switch to login with phone number',
            inputName:'email',
            inputValue:'email',
            placeholder:'Email address',
            phoneValidate: false,
            countryName: "",
            flag: '',
            countryCode:"",
            fields: {
                email: "",
                password: "",
                phonenumber:'',
            },
            loginError: "",
            loginErrorWithPhone:"",
            SubmitSuccuss:false,
            errors: {},
            WhatsMyInfo: {
                CountryCodeISO2: '',
                CountryName: '',
                CountryCodePhone: 0,
                ExternalIPAddress: ''
            }
        };
        this.myRef = React.createRef();

    }
    
    handleChangeCheckbox() {
        this.setState({ checked: !this.state.checked });
    }

    handleChange(event) {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields })
    }
    handleValidation(callback) {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        if(this.state.LoginType){
            // validate mail
            if (validator.isEmpty(fields.email)) {
                formIsValid = false;
                errors["email"] = "Email address can't be empty.";
            } else if (!validator.isEmail(fields.email)) {
                formIsValid = false;
                errors["email"] = "Email address is invalid.";
            }

            // validate password
            if (validator.isEmpty(fields.password)) {
                formIsValid = false;
                errors["password"] = "Password can't be empty.";
            } else if (!validator.isLength(fields.password, { min: 6, max: undefined })) {
                formIsValid = false;
                errors["password"] = "Email must be more than 6 character.";
            }

        }else{
            // validate Phone number
            if (validator.isEmpty(fields.phonenumber)) {
                formIsValid = false;
                errors["phonenumber"] = "Phone number can't be empty.";
            } else if (!validator.isLength(fields.phonenumber, { min: 3, max: undefined })) {
                formIsValid = false;
                errors["phonenumber"] = "Phone number is invalid.";
            } else if (!validator.isNumeric(fields.phonenumber)) {
                formIsValid = false;
                errors["phonenumber"] = "Phone number only must contain number.";
            } else if (!this.state.phoneValidate) {
                formIsValid = false;
                errors["phonenumber"] = "Phone number is not compatible.";
            }
        }

        // set errors
        this.setState({ errors }, () => {
            return callback(formIsValid);
        })


    }

    handlesubmit(event) {
        event.preventDefault();
        this.setState({ error: null });
        // Handle verification
        this.handleValidation((valid) => {
            if (valid) {
                if (this.state.LoginType) {
                    // if user select login with user and password
                    auth.signInWithEmail(this.state.fields.email, this.state.fields.password, this.state.LoginType).then( (response) => {
                        this.props.HandleLogin();
                        this.props.history.push('/dashboards');
                    }).catch(error => {
                        if (error.message === '400') {
                            this.setState({ loginError: 'Invalid user or password' });
                        }
                        else {
                            this.setState({ loginError: "There is no such user" });
                        }
                    });

                } else {
                    // if user select login with phone
                    const { flag, fields, WhatsMyInfo} = this.state;
                    this.vm.$dispatch({
                        PhoneLogin: {
                            phone: fields.phonenumber,
                            countryISO2: flag || WhatsMyInfo.CountryCodeISO2,
                        }
                    });
                }

            }
        })
    }



    componentDidUpdate(prevState){
        if (this.state.SubmitSuccuss !== prevState.SubmitSuccuss) {
            if(this.state.SubmitSuccuss){
                // check login type is with phone
                if(!this.state.LoginType){
                    const {flag, fields, countryName, countryCode, WhatsMyInfo} = this.state;
                    localStorage.setItem('countryCode', countryCode|| WhatsMyInfo.CountryCodePhone);
                    localStorage.setItem('countryISO2', flag|| WhatsMyInfo.CountryCodeISO2);
                    localStorage.setItem('phonenumber', fields.phonenumber);
                    localStorage.setItem('country', countryName || WhatsMyInfo.CountryCodePhone);
                    this.props.history.push('/signin-phone-verification')
                }
            }
        }
    }





    selectcountry(status, value) {
        this.myRef.current.state.value = "";
        this.setState({
            countryCode: this.myRef.current.selectedCountryData.dialCode,
            countryName: this.myRef.current.selectedCountryData.name,
            flag: this.myRef.current.selectedCountryData.iso2,
            valid: false,
        })
    }

    changeLoginType(){
        this.setState({
            LoginType:!this.state.LoginType,
        });
        if(this.state.LoginType){
            this.setState({
                // LoginTypeText:'Switch to login with email address',
                placeholder:'phone number',
                inputName:'phonenumber',
                inputValue:'phonenumber',
                loginError:"",
                LoginErrorWithPhone:"",
            })
        }else{
            this.setState({
                // LoginTypeText:'Switch to login with phone number',
                placeholder:'Email address',
                inputName:'email',
                inputValue:'email',
                loginError:"",
                LoginErrorWithPhone:"",
                
            })
        }
    }

    handlePhone(status, value) {
        let fields = this.state.fields;
        fields["phonenumber"] = value;
        this.setState({
            fields,
            phoneValidate: status,
        })
    }

    isValid() {
        if (!this.state.valid) {
            this.setState({
                validation: false,
            })
        } else {
            this.setState({
                validation: true,
            })
        }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }


    render() {
        const {t}=this.props;
        const { email, password } = this.state.fields;
        const {loginError, WhatsMyInfo, LoginErrorWithPhone}=this.state;

        return (
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 main-div">
                    <div className="form-signin-or-up-container">
                       <h1 className="text-center colored-header-box">
                            <Trans i18nKey="login.title">
                                Login to your account
                            </Trans>
                        </h1>
                        <div className="switch-login-container text-center">
                            <p className="switch-login text-center" onClick={this.changeLoginType.bind(this)}>
                                {this.state.LoginType?
                                    (
                                        <Trans i18nKey="login.login-with-mobile">
                                            Switch to login with phone number
                                        </Trans>
                                    )
                                        :
                                    (
                                        <Trans i18nKey="login.login-with-email">
                                            Switch to login with email address
                                        </Trans>
                                    )
                                }

                            </p>
                        </div>

                        <form className="register-form" onSubmit={this.handlesubmit.bind(this)} >
                            {this.state.LoginType?
                                (
                                    //login with email
                                    <div className="col-xs-12 no-horizantal">
                                        <FormControl
                                            type="text"
                                            className="sign-up-form"
                                            value={email}
                                            name="email"
                                            placeholder="Email address"
                                            onChange={this.handleChange.bind(this)}
                                        />
                                        {this.state.errors.email ?
                                            <span className="input-errors" >{this.state.errors.email}</span>
                                            :
                                            null}
                                        <FormControl
                                            type="password"
                                            className="sign-up-form"
                                            value={password}
                                            name="password"
                                            placeholder="Password"
                                            onChange={this.handleChange.bind(this)}
                                        />
                                        {this.state.errors.password ?
                                            <span className="input-errors" >{this.state.errors.password}</span>
                                            :
                                            null
                                        }

                                       
                                    </div>

                                    
                                    
                                )
                                :
                                (
                                    //login with phone number
                                    <div className="col-xs-12 no-horizantal">
                                        {WhatsMyInfo.CountryCodeISO2
                                            ?<IntlTelInput
                                                ref={this.myRef}
                                                onPhoneNumberBlur={this.isValid.bind(this)}
                                                preferredCountries={[WhatsMyInfo.CountryCodeISO2]}
                                                onPhoneNumberChange={this.handlePhone.bind(this)}
                                                onSelectFlag={this.selectcountry.bind(this)}
                                                separateDialCode={true}
                                                fieldName="phonenumber"
                                                fieldId="phonenumber"
                                            />
                                            :null
                                        }

                                        {this.state.errors.phonenumber ?
                                            <span className="input-errors" >{this.state.errors.phonenumber}</span>
                                            :
                                            null
                                        }

                                       
                                    </div>
                                )
                            }

                            <div className="col xs-12 no-horizantal remember-section">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="default"
                                            checked={this.state.checked}
                                            value="remember-me"
                                            onChange={this.handleChangeCheckbox.bind(this)}
                                            className="remember-me"
                                            name="remember-me"
                                        // defaultChecked
                                        />
                                    }
                                    label={t('login.remember-me')}
                                    className="label-remember-me"
                                />

                                <Link to="/forget-password" >
                                    <Trans i18nKey="login.forgetpassword">
                                        Forgot your password?
                                    </Trans>
                                </Link>
                            </div>

                            {
                                loginError ?
                                <span className="input-errors text-center" style={{marginTop:"15px",marginBottom:"-10px"}}>{loginError}</span>
                                :
                                null
                            }

                            {LoginErrorWithPhone ?
                                <span className="input-errors text-center" style={{marginTop:"15px",marginBottom:"-10px"}}>{LoginErrorWithPhone}</span>
                                :
                                null
                            }

                           
                            <Button variant="contained" color="primary" className="submit-btn" type="submit">
                                <Trans i18nKey="login.login-btn">
                                    LOG IN
                                </Trans>
                            </Button>
                        </form>
                        <div className="col-xs-12 no-horizantal go-to-login text-center">
                            <span>
                                <Trans i18nKey="login.without-account">
                                    No account yet?
                                </Trans>
                            </span>
                            <span>
                                <Link to="/signup">
                                    <Trans i18nKey="login.signup">
                                        Sign up
                                    </Trans>
                                </Link>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

Login.propTypes = {
    HandleLogin: propTypes.func
};


export default withNamespaces('translation')(connect(null, { HandleLogin })(Login));
