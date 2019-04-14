import React,{Component} from "react";
import "../../../../Styles/Bank/abn-bank.css";
import "../../../../Styles/Bank/cimb-bank.css";
import bankimage from "../../../../Images/bank-logo/cimb-bank.png";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button/Button";
import validator from "validator";
import dotnetify from "dotnetify";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import DeviceToken from "../../../../Images/cimb_token.png";
import SMSToken from "../../../../Images/cimb-phone_token.png";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

class Cimb extends Component{

    constructor(props){
        super(props);
        this.state=({
            loading:false,
            acception:true,
            AccountSubmitError:false,
            AccountErrorMessage:false,
            AccountSubmitSuccess:false,
            isOTPDevice:true,
            openDialog:true,
            fields: {
                company_id:'',
                user_id:'',
                password:'',
                otp_value:'',
                sms_token:'',
            },
            errors: {},
        });

        this.vm = dotnetify.react.connect('Cimb', this);
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.AccountSubmitSuccess !== prevState.AccountSubmitSuccess) {
            if(this.state.AccountSubmitSuccess){
                // Todo:handle true information
                this.setState({
                    loading:true,
                })
            }
        }

        if (this.state.AccountSubmitError !== prevState.AccountSubmitError) {
            if(this.state.AccountSubmitError){
                // Todo:handle invalid information
                this.setState({
                    loading:true,
                })
            }
        }
    }





    handleValidation(callback){
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        if(validator.isEmpty(fields.company_id)) {
            formIsValid = false;
            errors["company_id"] = "COMPANY ID is mandatory.";
        }

        if(validator.isEmpty(fields.user_id)) {
            formIsValid = false;
            errors["user_id"] = "USER ID is mandatory.";
        }

        if(this.state.isOTPDevice){
            if(validator.isEmpty(fields.otp_value)) {
                formIsValid = false;
                errors["otp_value"] = "OTP is mandatory.";
            }

            if(!validator.isNumeric(fields.otp_value)){
                formIsValid = false;
                errors["otp_value"] = "OTP must be number.";
            }else if(!validator.isLength(fields.otp_value, {min: 7, max:7})){
                formIsValid = false;
                errors["otp_value"] = "OTP must be contain 6 digit.";
            }
        }

        if(validator.isEmpty(fields.password)) {
            formIsValid = false;
            errors["password"] = "Password is mandatory.";
        }

        if(!this.state.acception){
            formIsValid = false;
            errors["acceptterms"] = "this must be accepted.";
        }

        this.setState({ errors }, () => {
            return callback(formIsValid);
        })

    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            loading:true,
        });

        this.handleValidation((valid) => {
            if (valid) {
                //web socket to get data from backend
                this.vm.$dispatch({
                    SubmitAccountInformation: {
                        CompanyId: this.state.fields.company_id,
                        UserId: this.state.fields.user_id,
                        Password: this.state.fields.password,
                        IsOTPDevice: this.state.isOTPDevice,
                        OTPValue: this.state.fields.otp_value,
                    }
                });
            }else{
                this.setState({
                    loading:false,
                });
            }
        })

    }

    handleChangeInput(event){
        let {fields} = this.state;
        // Todo: Bank errors are yet be loaded into page, pending Dotnetify
        let errors = {};
        if(event.target.name === "otp_value"){
            if(validator.isNumeric(event.target.value)) {
                if(!validator.isLength(event.target.value, {min: 8, max:8})){
                    fields[event.target.name]=event.target.value;
                }
            }else if(validator.isEmpty(event.target.value)){
                fields[event.target.name]=event.target.value;
            }

            if(!validator.isNumeric(event.target.value)){
                errors[event.target.name]="otp just contain number";
            }else if (validator.isEmpty(event.target.value)){
                errors[event.target.name]="";
            }
        }else if(event.target.name === "sms_token"){
            if(validator.isNumeric(event.target.value)) {
                if(!validator.isLength(event.target.value, {min: 9, max:9})){
                    fields[event.target.name]=event.target.value;
                }
            }else if(validator.isEmpty(event.target.value)){
                fields[event.target.name]=event.target.value;
            }

            if(!validator.isNumeric(event.target.value)){
                errors[event.target.name]="otp just contain number";
            }else if (validator.isEmpty(event.target.value)){
                errors[event.target.name]="";
            }
        }else{
            fields[event.target.name]=event.target.value;
        }

        this.setState({
            fields,
            errors,
        })

    }

    handleChangeacception(){
        this.setState({
            acception:!this.state.acception,
        })
    }


    componentWillUnmount() {
        this.vm.$destroy();
    }



    handleOTPClick(){
        this.setState({
            isOTPDevice:true,
        })
    }


    handleSMSClick(){
        this.setState({
            isOTPDevice:false,
        })
    }
    handleValidateSMSOtp(callback){
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;


        if(this.state.isOTPDevice){
            if(validator.isEmpty(fields.sms_token)) {
                formIsValid = false;
                errors["sms_token"] = "OTP is mandatory.";
            }

            if(!validator.isNumeric(fields.sms_token)){
                formIsValid = false;
                errors["sms_token"] = "OTP must be number.";
            }else if(!validator.isLength(fields.sms_token, {min: 8, max:8})){
                formIsValid = false;
                errors["sms_token"] = "OTP must be contain 8 digit.";
            }
        }
        this.setState({ errors }, () => {
            return callback(formIsValid);
        })
    }

    handleCloseDialog(){
        this.handleValidateSMSOtp((valid) => {
            if (valid) {
                //web socket to get data from backend
                this.vm.$dispatch({
                    SubmitOtp: {
                        SMSToken: this.state.fields.sms_token,
                    }
                });
            }else{
                console.log("nok")
            }
        });


    }


    render(){
        const {fields, errors, loading, isOTPDevice}=this.state;
        console.log(errors);
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 abn-body">
                    <div className="container">
                        <div className="main-body-abn col-xs-10 col-xs-offset-1">
                            <form action="" onSubmit={this.handleSubmit.bind(this)}>
                                <div id="header" className="text-center">
                                    <div className="abn-header text-center">
                                        <img src={bankimage} className="img-responsive" alt="ing Bank"/>
                                    </div>
                                </div>
                                <div className="col-xs-12 abn-body-container">
                                    <div className="col-xs-12 form-container">

                                        {loading ?
                                            (
                                                <div className="spinner-container">
                                                    <CircularProgress disableShrink  size={24} thickness={4} className="loading-spinner" />
                                                </div>
                                            )
                                            :
                                            null
                                        }

                                        <div className="col-xs-6 no-horizantal col-xs-offset-3 cimb-bank-container">
                                            <div className="col-xs-12 no-horizantal cimb-bank">
                                                <h1 className="header">
                                                    Welcome to BizChannel@CIMB
                                                </h1>
                                            </div>
                                            <div className="col-xs-12 no-horizantal cimb-bank">
                                                <div className="col-xs-12 label-container">
                                                    <label htmlFor="">Company ID</label>
                                                </div>
                                                <div className="col-xs-12">
                                                        <span className="col-xs-12 no-horizantal inputs-container">
                                                            <span className="col-xs-12 no-horizantal account-input">
                                                                <input type="text" name="company_id" onChange={this.handleChangeInput.bind(this)} value={fields.company_id}/>
                                                            </span>
                                                            <div className="clearfix"></div>
                                                            {/*{errors.company_id ?*/}
                                                                {/*<span className="input-errors-anb"><i className="fa fa-exclamation-triangle"></i>{errors.company_id}</span>*/}
                                                                {/*:*/}
                                                                {/*null*/}
                                                            {/*}*/}
                                                        </span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 no-horizantal cimb-bank">
                                                <div className="col-xs-12 label-container">
                                                    <label htmlFor="">User ID</label>
                                                </div>
                                                <div className="col-xs-12">
                                                        <span className="col-xs-12 no-horizantal inputs-container">
                                                            <span className="col-xs-12 no-horizantal account-input">
                                                                <input type="text" name="user_id" onChange={this.handleChangeInput.bind(this)} value={fields.user_id}/>
                                                            </span>
                                                            <div className="clearfix"></div>
                                                            {/*{errors.user_id ?*/}
                                                                {/*<span className="input-errors-anb"><i className="fa fa-exclamation-triangle"></i> {errors.user_id}</span>*/}
                                                                {/*:*/}
                                                                {/*null*/}
                                                            {/*}*/}
                                                        </span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 no-horizantal cimb-bank">
                                                <div className="col-xs-12 label-container">
                                                    <label htmlFor="">Password</label>
                                                </div>
                                                <div className="col-xs-12">
                                                        <span className="col-xs-12 no-horizantal inputs-container">
                                                            <span className="col-xs-12 no-horizantal account-input">
                                                                <input type="password" name="password" onChange={this.handleChangeInput.bind(this)} value={fields.password}/>
                                                            </span>
                                                            <div className="clearfix"></div>

                                                        </span>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 no-horizantal cimb-bank">
                                                <div className="col-xs-12 label-container">
                                                    <label htmlFor="">OTP Type</label>
                                                </div>
                                                <div className="col-xs-12">
                                                        <span className="col-xs-12 no-horizantal inputs-container">
                                                            <span className="col-xs-12 no-horizantal account-input how-to-login">
                                                                <span className={isOTPDevice ? "active" : ""} onClick={this.handleOTPClick.bind(this)}>
                                                                    <img
                                                                        className="img-responsive"
                                                                        alt=""
                                                                        src={DeviceToken}
                                                                    />

                                                                </span>
                                                                    <span className={isOTPDevice ? "" : "active"} onClick={this.handleSMSClick.bind(this)}>
                                                                    <img
                                                                        className="img-responsive"
                                                                        alt=""
                                                                        src={SMSToken}
                                                                    />
                                                                </span>
                                                            </span>
                                                            <div className="clearfix"></div>

                                                        </span>
                                                </div>
                                            </div>
                                            {isOTPDevice
                                            ? <div className="col-xs-12 no-horizantal cimb-bank">
                                                    <div className="col-xs-12 label-container">
                                                        <label htmlFor="">One Time Passcode</label>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <span className="col-xs-12 no-horizantal inputs-container">
                                                            <span className="col-xs-12 no-horizantal account-input">
                                                                <input type="text" name="otp_value" onChange={this.handleChangeInput.bind(this)} autoComplete="off" value={fields.otp_value}/>
                                                            </span>
                                                            <div className="clearfix"></div>
                                                            {errors.otp_value ?
                                                                <span className="input-errors-anb"><i className="fa fa-exclamation-triangle"></i>{errors.otp_value}</span>
                                                                :
                                                                null
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            : null
                                            }

                                            <div className="col-xs-12">
                                                {errors.company_id ?
                                                    <span className="input-errors-anb">{errors.company_id}</span>
                                                    :
                                                    null
                                                }
                                                <br/>

                                                {errors.user_id ?
                                                    <span className="input-errors-anb">{errors.user_id}</span>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-xs-12 getfeed-btn no-horizantal">
                                        <div className="col-xs-12 text-center">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="default"
                                                        checked={this.state.acception}
                                                        value="remember-me"
                                                        onChange={this.handleChangeacception.bind(this)}
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
                                                null
                                            }
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

                <Dialog
                    open={this.state.openDialog}
                    onClose={this.handleCloseDialog.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <DialogTitle className="text-center title-dialog dialog-token" id="alert-dialog-title">
                        <div className="col-xs-12 sms-token-image">
                            <img
                                className="img-responsive"
                                alt=""
                                src={SMSToken}
                            />
                        </div>
                    </DialogTitle>
                    <DialogContent className='dialog-token'>
                        <DialogContentText id="alert-dialog-description " className="dialog-container-text cimb-bank" >
                            <div className="col-xs-12 label-container">
                                <label htmlFor="">One Time Passcode</label>
                            </div>
                            <div className="col-xs-12">
                                <span className="col-xs-12 no-horizantal inputs-container">
                                    <span className="col-xs-12 no-horizantal account-input">
                                        <input type="text" name="sms_token" onChange={this.handleChangeInput.bind(this)} value={fields.sms_token}/>
                                    </span>
                                    <div className="clearfix"></div>
                                    {errors.sms_token ?
                                        <span className="input-errors-anb"><i className="fa fa-exclamation-triangle"></i>{errors.sms_token}</span>
                                        :
                                        null
                                    }
                                </span>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className="text-center submit-btn-dialog dialog-token">
                        <Button onClick={this.handleCloseDialog.bind(this)} variant="outlined" color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}

export default Cimb;
