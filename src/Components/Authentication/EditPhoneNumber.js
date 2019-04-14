import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ReactCountryFlag from 'react-country-flag';
import validator from 'validator';
import "../../Styles/mobile-confirm.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import dotnetify from 'dotnetify';


class EditPhoneNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: localStorage.getItem('country'),
            CountryCode:localStorage.getItem('countryCode'),
            isLogin: true,
            Phonenumber: localStorage.getItem('phonenumber'),
            OldPhonenumber:localStorage.getItem('phonenumber'),
            changePhoneNumber: false,
            error: '',
            PhoneValidate:false,
            CountryISO2:localStorage.getItem('countryISO2'),
            CountryNameFormISO2:'',
            ChangePhoneNumberError:"",
            SubmitSuccuss:false,
        };

        this.myRef = React.createRef();

        this.vm = dotnetify.react.connect('MobileVerfication', this);
    }

    // componentDidMount() {
    //     this.setState({
    //         phonenumber:localStorage.getItem('phonenumber'),
    //     });
    // }

    handlePhone(status, value){
        console.log(status);
        if (validator.isNumeric(value)) {
            this.setState(
                {
                    Phonenumber: value ,
                    PhoneValidate: status,
                }
            );
        }
        if(value.length === 0 ){
            this.setState({
                Phonenumber: "",
                PhoneValidate: false,
            });
        }
    }


    BackToOtp() {
        this.props.history.push({
            pathname: '/phone-confirmation',
        });
        // this.setState({ changePhoneNumber:true });
    }

    handleValidation(callback) {
        let { Phonenumber, error } = this.state;
        let formIsValid = true;

        if (validator.isEmpty(Phonenumber)) {
            formIsValid = false;
            error= "phone number can't be empty.";
        } else if(!validator.isLength(Phonenumber, { min: 3, max: undefined })) {
            formIsValid = false;
            error= "Phone number is invalid.";
        } else if (!validator.isNumeric(Phonenumber)) {
            formIsValid = false;
            error = "Phone number only must contain number.";
        }else if(!this.state.PhoneValidate) {
            formIsValid = false;
            error = "Phone number is not compatible.";
        }

        this.setState({error}, () => {
            return callback(formIsValid);
        });
    }
    handlesubmit(event) {
        event.preventDefault();
        this.handleValidation(valid => {
            if (valid) {
                // if(this.state.changePhoneNumber){
                    this.vm.$dispatch({
                        ChangePhone: {
                            newPhone: this.state.Phonenumber,
                            oldPhone: this.state.OldPhonenumber,
                            countryISO2: this.state.CountryISO2,
                        }
                    });
            }
            else{
                console.log("its not valid")
            }
        })
    }

    componentDidUpdate(prevState){
        if (this.state.SubmitSuccuss !== prevState.SubmitSuccuss) {
            if(this.state.SubmitSuccuss){
                localStorage.setItem('phonenumber', this.state.Phonenumber);
                this.props.history.push({
                    pathname: '/signup-phone-verification',
                });
            }
        }
    }


    componentWillUnmount(){
        this.vm.$destroy();
    }




    render() {
        const {CountryISO2} = this.state;

        return (
            <div className="col-xs-12 no-horizantal edit-Signup-Mobile_phone">
                <div className="col-xs-12 main-div">
                    <div className="form-signin-or-up-container">
                        <h1 className="text-center colored-header-box">Please Verify Your number</h1>
                     
                        <form
                            className="register-form verifynumber"
                            onSubmit={this.handlesubmit.bind(this)}
                        >
                            <div className="col-xs-12 no-horizantal ">
                                <ReactCountryFlag
                                    styleProps={{
                                        width: '20px',
                                        height: '20px',
                                        left: '5px',
                                        position:"absolute",
                                    }}
                                    code={`${CountryISO2}`}
                                    svg
                                />
                                <span className="col-xs-12 no-horizantal text-right" style={{ marginBottom: "15px" }}>{this.state.country + "( "+this.state.CountryCode+" ) "}</span>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-xs-12 no-horizantal">
                                {CountryISO2
                                    ? <IntlTelInput
                                        preferredCountries={[CountryISO2.toLowerCase()]}
                                        onPhoneNumberChange={this.handlePhone.bind(this)}
                                        separateDialCode={true}
                                        value={this.state.Phonenumber}
                                        fieldName="phonenumber"
                                        fieldId="phonenumber"
                                    />
                                     :null
                                }

                            </div>


                            {this.state.error ? (
                                <span className="input-errors">
                                    {this.state.error}
                                </span>
                            ) : null}

                            {this.state.ChangePhoneNumberError
                                ?<span className="input-errors text-center" style={{marginTop:"15px",marginBottom:"-10px"}}>{this.state.ChangePhoneNumberError}</span>
                                :null
                            }

                           
                            <Button variant="contained" color="primary" className="submit-btn" type="submit" >
                                Continue
                            </Button>

                            <div className="text-center changenumber">
                                <Button color="primary"
                                    className="change-phone-number"
                                    onClick={this.BackToOtp.bind(this)}
                                >
                                    Back
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default EditPhoneNumber;
