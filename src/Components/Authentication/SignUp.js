import React, { Component } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import "../../Styles/auth.css";
import ReactPasswordStrength from 'react-password-strength';
import { FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import validator from "validator";
import { connect } from "react-redux";
import { HandleSignup } from "../../Actions";
import dotnetify from 'dotnetify';


//
// const lookup = callback => {
//
//     const request = new XMLHttpRequest();
//
//     request.addEventListener('load', () => {
//         callback(JSON.parse(request.responseText).country_code);
//     });
//
//     request.open('GET', 'https://api.ipdata.co/?api-key=test');
//     request.send();
// };

class Signup extends Component {
    constructor(props) {
        super(props);

        this.vm = dotnetify.react.connect('SignUp', this, { vmArg: { CountryISO2: "nl" } });


        this.state = {
            valid: "",
            validation: true,
            countryName: "",
            flag: '',
            countryCode:'',
            country_code_ios2:"",
            phoneValidate: false,
            fields: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                phonenumber: ""
            },
            errors: {},
            SubmitErrors:"",
            SubmitSuccuss:false,
            WhatsMyInfo: {
                CountryCodeISO2: '',
                CountryName: '',
                CountryCodePhone: 0,
                ExternalIPAddress: ''
            }
        };
        this.myRef = React.createRef();

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

        // validate firstname
        if (validator.isEmpty(fields.firstname)) {
            formIsValid = false;
            errors["firstname"] = "First name can't be empty.";
        } else if (!validator.isLength(fields.firstname, { min: 3, max: undefined })) {
            formIsValid = false;
            errors["firstname"] = "First name must be more than 3 character.";
        }

        // validate lastname
        if (validator.isEmpty(fields.lastname)) {
            formIsValid = false;
            errors["lastname"] = "Last name address can't be empty.";
        } else if (!validator.isLength(fields.lastname, { min: 3, max: undefined })) {
            formIsValid = false;
            errors["lastname"] = "Last name must be more than 3 character.";
        }

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

        // set errors
        this.setState({ errors }, () => {
            return callback(formIsValid);
        })
    }
    handlesubmit(event) {
        event.preventDefault();
       
        this.handleValidation((valid) => {
            if (valid) {
                const { fields, country_code_ios2, WhatsMyInfo} = this.state;

                // Set up function to dispatch state to the back-end.
                this.vm.$dispatch({ 
                    Submit: {
                        firstname: fields.firstname,
                        lastname: fields.lastname,
                        email: fields.email,
                        phone: fields.phonenumber,
                        password: fields.password,
                        userCountryISO2: country_code_ios2 || WhatsMyInfo.CountryCodeISO2,
                    }
                });
            }
        })
    }

    componentDidUpdate(prevState){
        if (this.state.SubmitSuccuss !== prevState.SubmitSuccuss) {
            if(this.state.SubmitSuccuss){
                const { WhatsMyInfo} = this.state;
                localStorage.setItem('phonenumber', this.state.fields.phonenumber);
                localStorage.setItem('country', this.state.countryName|| WhatsMyInfo.CountryName);
                localStorage.setItem('countryISO2', this.state.flag|| WhatsMyInfo.CountryCodeISO2);
                localStorage.setItem('countryCode', this.state.countryCode || WhatsMyInfo.CountryCodePhone);
                this.props.history.push('/signup-phone-verification')
            }
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

    handler(status, value) {
        if (status) {
            this.setState({
                valid: true,
            })
        } else {
            this.setState({
                valid: false,
            })
        }
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

    selectcountry(status, value) {
        this.myRef.current.state.value = "";
        this.setState({
            countryCode: this.myRef.current.selectedCountryData.dialCode,
            countryName: this.myRef.current.selectedCountryData.name,
            flag: this.myRef.current.selectedCountryData.iso2,
            valid: false,
            country_code_ios2:value.iso2,
        })
    }

    _handleChangepasswordCallBack(event) {
        let {fields} = this.state;
        fields["password"] = event.password;
    }


    componentWillUnmount() {
       this.vm.$destroy();
    }

    render() {
        const { firstname, lastname, email } = this.state.fields;

        return (
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 main-div">
                    <div className="form-signin-or-up-container">
                        <h1 className="text-center colored-header-box">Create your account</h1>
                        <form className="register-form" onSubmit={this.handlesubmit.bind(this)}>
                            <FormControl
                                type="text"
                                value={firstname}
                                className="sign-up-form"
                                placeholder="First Name"
                                onChange={this.handleChange.bind(this)}
                                name="firstname"
                            />
                            {this.state.errors.firstname ?
                                <span className="input-errors" >{this.state.errors.firstname}</span>
                                :
                                null
                            }

                            <FormControl
                                type="text"
                                value={lastname}
                                className="sign-up-form"
                                placeholder="Last Name"
                                onChange={this.handleChange.bind(this)}
                                name="lastname"
                            />
                            {this.state.errors.lastname ?
                                <span className="input-errors" >{this.state.errors.lastname}</span>
                                :
                                null
                            }
                            <FormControl
                                type="text"
                                className="sign-up-form"
                                value={email}
                                placeholder="Email address"
                                onChange={this.handleChange.bind(this)}
                                name="email"
                            />
                            {this.state.errors.email ?
                                <span className="input-errors" >{this.state.errors.email}</span>
                                :
                                null
                            }

                            <ReactPasswordStrength
                                style={{
                                    marginBottom: '8px',
                                    borderRadius: '4px',
                                }}
                                minLength={0}
                                scoreWords={['Weak', 'Good', 'Strong', 'Secure']}
                                changeCallback={this._handleChangepasswordCallBack.bind(this)}
                                inputProps={{
                                    name: 'password',
                                    autoComplete: 'off',
                                    className: 'form-control sign-up-form',
                                    placeholder: 'Password',
                                }}
                            />

                            
                            {this.state.errors.password ?
                                <span className="input-errors" >{this.state.errors.password}</span>
                                :
                                null
                            }
                            {this.state.WhatsMyInfo.CountryCodeISO2
                                ?<IntlTelInput
                                    ref={this.myRef}
                                    onPhoneNumberBlur={this.isValid.bind(this)}
                                    preferredCountries={[this.state.WhatsMyInfo.CountryCodeISO2.toLowerCase()]}
                                    // defaultCountry="auto"
                                    // geoIpLookup={lookup}
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

                            {this.state.SubmitErrors ?
                                <span className="input-errors text-center" style={{marginTop:"15px",marginBottom:"-10px"}}>{this.state.SubmitErrors}</span>
                                :
                                null
                            }
                            

                            <Button variant="contained" color="primary" className="submit-btn" type="submit" >
                                Create account
                            </Button>
                        </form>
                        <div className="col-xs-12 no-horizantal go-to-login text-center">
                            <span>Already have an account? </span>
                            <span><Link to="/login">Log in</Link></span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null, { HandleSignup })(Signup);

