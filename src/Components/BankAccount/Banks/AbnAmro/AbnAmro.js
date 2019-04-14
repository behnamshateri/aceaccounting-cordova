import React,{Component} from "react";
import "./../../../../Styles/bank-feed.css";
import "../../../../Styles/Bank/abn-bank.css";
import bankImage from "../../../../Images/bank-logo/abn-amro-bank.png";
import identifier from './../../../../Images/identifier.svg';
import pin from './../../../../Images/pin.svg';
import {Link} from "react-router-dom";
import validator from 'validator';
import Button from '@material-ui/core/Button';
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import dotnetify from "dotnetify";



class AbnAmro extends Component{
    constructor(props){
        super(props);
        this.state=({
            isPin: true,
            acception:true,
            fields: {
                account_number: '',
                card_number: '',
                response:'',
                identifyCode:''
            },
            errors: {},
        });

        this.vm = dotnetify.react.connect('AbnAmro', this);
    }


    handleChangeAcception(){
        this.setState({acception:!this.state.acception})
    }

    handleIdentifierClick(){
        this.setState({
            isPin: !this.state.isPin,
            fields: {
                account_number: '',
                card_number: '',
                response:'',
                identifyCode:''
            },
            errors: {},
        });
    }

    handlePinClick(){
        this.setState({
            isPin: !this.state.isPin,
            fields: {
                account_number: '',
                card_number: '',
                response:'',
                identifyCode:''
            },
            errors: {},
        });
    }

    handleInputNumber(event){
        let fields = this.state.fields;
        let errors = {};
        fields[event.target.name]=event.target.value;

        if(validator.isEmpty(fields[event.target.name])){
            errors[event.target.name] = "This is a mandatory field.";
        }else{
            errors[event.target.name] = "";
        }

        if(event.target.name ==="account_number") {
           if(validator.isLength(event.target.value, {min: 0, max:8})){
                errors[event.target.name] = "Enter at least 9  digits.";
            }else if(validator.isLength(event.target.value, {min: 9, max:9})){
               errors[event.target.name] = "";
           }
        }else if(event.target.name ==="card_number"){
            if(!validator.isLength(event.target.value, { min:3, max: undefined })){
                errors[event.target.name] = "Enter at least 3  digits.";
            }else if(!validator.isLength(event.target.value, { min:3, max: 4 })){
                errors[event.target.name] = "Enter maximum 4 digits.";
            }
        }else if(event.target.name ==="response"){
            if(!validator.isLength(event.target.value, { min:5, max: undefined })){
                errors[event.target.name] = "Enter at least 5  digits.";
            }else if(!validator.isLength(event.target.value, { min:5, max: 8})){
                errors[event.target.name] = "Enter maximum 8 digits.";
            }
        }

        if(!this.state.isPin){
            if(event.target.name ==="identifyCode"){
                if(!validator.isLength(event.target.value, { min:5, max: 5})){
                    errors[event.target.name] = "Enter at least 5  digits.";
                }
            }
        }


        if(validator.isNumeric(fields[event.target.name])) {
            this.setState({
                fields:fields,
                errors:errors
            })
        }else if(validator.isEmpty(fields[event.target.name])){
            this.setState({
                fields :fields,
                errors:errors
            })
        }

    }


    handleValidation(callback){
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        //check account number
        if (validator.isEmpty(fields.account_number)) {
            formIsValid = false;
            errors["account_number"] = "This is a mandatory field.";
        } else if (!validator.isLength(fields.account_number, {min: 9, max:9})) {
            formIsValid = false;
            errors["account_number"] = "Enter at least 9  digits.";
        }


        //check card number
        if (validator.isEmpty(fields.card_number)) {
            formIsValid = false;
            errors["card_number"] = "This is a mandatory field.";
        } else if (!validator.isLength(fields.card_number, {min: 3, max:4})) {
            formIsValid = false;
            errors["card_number"] = "Enter at least 9  digits.";
        }

        if(this.state.isPin){
            //check response
            if (validator.isEmpty(fields.response)) {
                formIsValid = false;
                errors["response"] = "This is a mandatory field.";
            } else if (!validator.isLength(fields.response, {min: 5, max:8} )) {
                formIsValid = false;
                errors["response"] = "Enter at least 5 and max 8 digits.";
            }
        }else{
            //check identifyCode
            if (validator.isEmpty(fields.identifyCode)) {
                formIsValid = false;
                errors["identifyCode"] = "This is a mandatory field.";
            } else if (!validator.isLength(fields.identifyCode, {min: 5, max:5})) {
                formIsValid = false;
                errors["identifyCode"] = "Enter at least 5 digits.";
            }

        }


        if(!this.state.acception){
            formIsValid = false;
            errors["acceptterms"] = "this must be accepted.";
        }
        // set errors
        this.setState({ errors }, () => {
            return callback(formIsValid);
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.handleValidation((valid) => {
            if (valid) {

                //web socket to get data from backend

                this.vm.$dispatch({
                    PhoneLogin: {
                        account: 4535345,
                    }
                });

            }
        })

    }


    componentWillUnmount() {
        this.vm.$destroy();
    }

    render(){
        const {isPin,fields , errors}=this.state;
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 abn-body">
                    <div className="container">
                        <div className="main-body-abn col-xs-10 col-xs-offset-1">
                            <form action="" onSubmit={this.handleSubmit.bind(this)}>
                                <div id="header" className="text-center">
                                    <div className="abn-header text-center">
                                        <img src={bankImage} className="img-responsive" alt="Abn Armo Bank"/>
                                    </div>
                                </div>

                                <div className="col-xs-12 abn-body-container">
                                {/*<hr/>*/}
                                    <div className="form-container">
                                    <div className="row">
                                        <div className="col-xs-6 text-right label-container">
                                            How do you wish to log on?
                                        </div>
                                        <div className="col-xs-6 how-to-login">
                                        <span className={isPin ? "active" : ""}>
                                            <img
                                                alt=""
                                                src={identifier}
                                                onClick={this.handleIdentifierClick.bind(this)}
                                            />

                                        </span>
                                            <span className={isPin ? "" : "active"}>
                                            <img
                                                alt=""
                                                src={pin}
                                                onClick={this.handlePinClick.bind(this)} />
                                        </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 text-right label-container">
                                            <label htmlFor="">Account Number</label>
                                        </div>
                                        <div className="col-xs-6">
                                        <span className="col-xs-12 no-horizantal inputs-container">
                                            <span className="account-number-static">
                                                NL • • RABO 0
                                            </span>
                                            <span className="account-input">
                                                <input type="text" maxLength={9} name="account_number" onChange={this.handleInputNumber.bind(this)} value={fields.account_number}/>
                                            </span>
                                            <div className="clearfix"></div>
                                            {errors.account_number ?
                                                <span className="input-errors-anb"><i className="fa fa-exclamation-triangle"></i> {errors.account_number}</span>
                                                :
                                                null
                                            }
                                        </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 text-right label-container">
                                            <label htmlFor="">Card Number</label>
                                        </div>
                                        <div className="col-xs-6">
                                        <span className="col-xs-12 no-horizantal inputs-container">
                                            <span>
                                                <input type="text" maxLength={4} name="card_number" onChange={this.handleInputNumber.bind(this)} value={fields.card_number}/>
                                            </span>
                                            <div className="clearfix"></div>
                                            {errors.card_number ?
                                                <span className="input-errors-anb " ><i className="fa fa-exclamation-triangle"></i> {errors.card_number}</span>
                                                :
                                                null
                                            }
                                        </span>
                                            <div className="clearfix"></div>

                                            <input type="checkbox" id="remember-me"/>
                                            <label htmlFor="remember-me" className="pointer">
                                                <span className="handle-checkbox"></span>
                                                Remember account and card number
                                            </label>
                                        </div>
                                    </div>
                                    {
                                        isPin?
                                            <div className="row">
                                                <div className="col-xs-6 text-right label-container">
                                                    Instructions
                                                </div>
                                                <div className="col-xs-6">
                                                    <ol>
                                                        <li>Insert your card into the e.dentifier</li>
                                                        <li>Press 1 for 'Log on' (Inloggen)</li>
                                                        <li>Enter the PIN of your card + OK</li>
                                                        <li>Fill in the response code onto your screen</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            :
                                           null
                                    }
                                    {
                                        isPin ?
                                            <div className="row">
                                                <div className="col-xs-6 text-right label-container">
                                                    <label htmlFor="">Response</label>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="col-xs-12 no-horizantal inputs-container">
                                                        <span>
                                                            <input type="text" maxLength={8} name="response" onChange={this.handleInputNumber.bind(this)} value={fields.response}/>
                                                        </span>
                                                        <div className="clearfix"/>
                                                        {errors.response ?
                                                            <span className="input-errors-anb " ><i className="fa fa-exclamation-triangle"></i> {errors.response}</span>
                                                            :
                                                            null
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            :
                                            <div className="row">
                                                <div className="col-xs-6 text-right label-container">
                                                    <label htmlFor="">Identification code</label>
                                                </div>
                                                <div className="col-xs-6">
                                                    <span className="col-xs-12 no-horizantal inputs-container code-input">
                                                          <span>
                                                                <input type="text" className="text-center" maxLength={5} name="identifycode" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" onChange={this.handleInputNumber.bind(this)} value={fields.identifyCode}/>
                                                          </span>
                                                           <div className="clearfix"></div>
                                                                {errors.identifyCode ?
                                                                    <span className="input-errors-anb " ><i className="fa fa-exclamation-triangle"></i> {errors.identifyCode}</span>
                                                                    :
                                                                    null
                                                                }
                                                    </span>
                                                    <div className="clearfix"></div>
                                                    <Link to="" className="newcode">Request a (new) identification code</Link>
                                                </div>
                                            </div>

                                    }

                                    <div className="row text-center">


                                    </div>



                                    </div>
                                    <div className="col-xs-12 getfeed-btn no-horizantal">
                                        <div className="col-xs-12  text-center">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="default"
                                                        checked={this.state.acception}
                                                        value="remember-me"
                                                        onChange={this.handleChangeAcception.bind(this)}
                                                        className="remember-me"
                                                        name="acceptterms"
                                                    />
                                                }
                                                label="Accept aceaccounting terms and conditions"
                                                className="label-remember-me terms-condition"
                                            />
                                            <div className="clearfix"></div>
                                            {this.state.errors.acceptterms ?
                                                <span className="input-errors" >{this.state.errors.acceptterms}</span>
                                                :
                                                null}
                                        </div>

                                        <div className="col-xs-12 text-center">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="bank-submit"
                                            >
                                                Accept and Login
                                            </Button>
                                        </div>


                                    </div>


                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}
export default AbnAmro;



