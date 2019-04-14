import React,{Component} from "react";
import "../../../../Styles/Bank/abn-bank.css";
import "../../../../Styles/Bank/rabo-bank.css";
import bankImage from "../../../../Images/bank-logo/rabo-bank.png";
import colorCodeGray from "../../../../Images/bank-logo/color-code-rabo-gray.png";
import raboscanner from "../../../../Images/bank-logo/rabo-scanner-retina.gif";
import validator from "validator";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import dotnetify from "dotnetify";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class Rabo extends Component{
    constructor(props){
        super(props);
        this.state=({
            loading:false,
            openDialog:false,
            acception:true,
            focusAccount:false,
            focusCard:false,
            focusLoginCode:false,
            validCard:false,
            validAccount:false,
            cardIfSubmitted:false,
            disableAccountInfo:false,
            canLogin:true,
            AccountSubmitError:false,
            AccountErrorMessage:false,
            AccountSubmitSuccess:false,
            OTPSubmitSuccess:false,
            // OTPSubmitError:false,
            accountStatus:{},
            CrawlerStatusUpdate:'',
            fields: {
                account_number: '',
                card_number: '',
                login_code: '',
                response:'',
                identifyCode:''
            },
            errors: {},
        });

        this.vm = dotnetify.react.connect('Rabobank', this);
    }


    componentDidUpdate(prevProps, prevState){
        if (this.state.AccountSubmitSuccess !== prevState.AccountSubmitSuccess) {
            if(this.state.AccountSubmitSuccess){
                this.setState({
                    accountStatus:JSON.parse(prevState.AccountSubmitSuccess),
                    loading:false,
                    cardIfSubmitted:true,
                    canLogin:false,
                    disableAccountInfo:true,
                });
            }
        }

        if (this.state.AccountSubmitError !== prevState.AccountSubmitError) {
            if(this.state.AccountSubmitError ){
                this.setState((prevState)=>{
                    return {
                        loading:false,
                        cardIfSubmitted:false,
                        disableAccountInfo:false,
                        AccountSubmitSuccess:false,
                        canLogin:true,
                        fields:{
                            ...prevState.fields,
                            login_code: '',
                        }
                    }
                });
            }
        }

        if (this.state.OTPSubmitSuccess !== prevState.OTPSubmitSuccess) {
            if(this.state.OTPSubmitSuccess){
                this.setState((prevState)=> {
                    return {
                        loading: false,
                        openDialog:true,
                    }
                })
            }
        }

    }

    //handle acception of terms and conditions
    handleChangeAcception(){
        this.setState({acception:!this.state.acception})
    }

    handleValidationAccountInfo(callback){
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        // check account number
        if (validator.isEmpty(fields.account_number)) {
            formIsValid = false;
            errors["account_number"] = "This is a mandatory field.";
        } else if (!validator.isLength(fields.account_number, {min: 9, max:9})) {
            formIsValid = false;
            errors["account_number"] = "Enter at least 9  digits.";
        }else if(!validator.isNumeric(fields.account_number)){
            formIsValid = false;
            errors["account_number"] = "card number must be digit";
        }


        // check card number
        if (validator.isEmpty(fields.card_number)) {
            formIsValid = false;
            errors["card_number"] = "This is a mandatory field.";
        } else if (!validator.isLength(fields.card_number, {min: 3, max:4})) {
            formIsValid = false;
            errors["card_number"] = "Enter at least 9  digits.";
        }else if(!validator.isNumeric(fields.card_number)){
            formIsValid = false;
            errors["card_number"] = "card number must be digit";
        }

        // set errors
        this.setState({ errors }, () => {
            return callback(formIsValid);
        })
    }

    submitAccountInfo(event){
        event.preventDefault();
        this.setState({
            loading:true,
            // cardIfSubmitted:true,
            canLogin:false,
        });


        this.handleValidationAccountInfo((valid) => {
            if (valid) {
                //web socket to get data from backend
                this.vm.$dispatch({
                    SubmitAccountInformation: {
                        accountNumber: this.state.fields.account_number,
                        cardNumber: this.state.fields.card_number,
                    }
                });
            }else{
                this.setState({
                    loading:false,
                    cardIfSubmitted:false,
                    canLogin:true,
                });
            }
        });

    }



    // check validation of card and account
    handleInputNumber(event){
        //remove server error
        this.setState({
            AccountSubmitError:false,
        });

        let fields = this.state.fields;
        let errors = {};
        let validCard=false;
        let validAccount=false;


        if(event.target.name ==="account_number") {
            if(validator.isLength(event.target.value, {min: 0, max:8})){
                errors[event.target.name] = "Account number consists of 9 digits.";
                validAccount=false;
            }else if(validator.isLength(event.target.value, {min: 9, max:9})){
                errors[event.target.name] = "";
                validAccount=true;
            }
        }else if(event.target.name ==="card_number"){
            if(validator.isLength(event.target.value, { min:0, max:3 })){
                errors[event.target.name] = "Card number must consist of 4 digits";
                validCard=false;
            }else if(validator.isLength(event.target.value, { min:4, max: 4 })){
                errors[event.target.name] = "";
                validCard=true;
            }
        }
        if(validator.isNumeric(event.target.value)) {
            fields[event.target.name]=event.target.value;
            if(validCard){
                this.setState({
                    validCard:true,
                    fields:fields,
                    errors:errors
                })
            }else if(validAccount){
                this.setState({
                    validAccount:true,
                    fields:fields,
                    errors:errors
                })
            }else if(!validCard){
                this.setState({
                    validCard:false,
                    fields:fields,
                    errors:errors
                })
            }else if(!validAccount) {
                this.setState({
                    validAccount: false,
                    fields: fields,
                    errors: errors
                })
            }
        }
        else if(validator.isEmpty(event.target.value)){
            fields[event.target.name]=event.target.value;
            this.setState({
                validCard:false,
                validAccount:false,
                fields :fields,
                errors:errors
            })
        }
    }




    handleValidation(callback){
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        //check login code
        if (validator.isEmpty(fields.login_code)) {
            formIsValid = false;
            errors["login_code"] = "This is a mandatory field.";
        }else if (!validator.isLength(fields.login_code, {min: 8, max:8})) {
            formIsValid = false;
            errors["login_code"] = "Enter at least 8  digits.";
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
                this.setState({
                    loading:true,
                    // OTPSubmitError:false,
                    cardIfSubmitted:false,
                });
                //web socket to get data from backend
                this.vm.$dispatch({
                    SubmitOtp: {
                        OTPValue: this.state.fields.login_code,
                    }
                });

            }
        })

    }

    handleFocusAccount(){
        this.setState({focusAccount:true})
    }

    handleBlurAccount(){
        this.setState({focusAccount:false})
    }

    handleFocusCard(){
        this.setState({focusCard:true})
    }

    handleBlurCard(){
        this.setState({focusCard:false})
    }

    handleFocusLoginCode(){
        this.setState({focusLoginCode:true})
    }

    handleBlurLoginCode(){
        this.setState({focusLoginCode:false})
    }


    componentWillUnmount() {
        this.vm.$destroy();
    }



    handleCloseDialog(){
        this.setState({
            openDialog:false,
        },function () {
            this.props.history.push('/bank-accounts');
        })
    }


    render(){
        const {fields , errors ,cardIfSubmitted ,loading, AccountSubmitError, CrawlerStatusUpdate}=this.state;
        return(
            <div className="col-xs-12 no-horizantal rabo-bank-account-update">

               <div className="col-xs-12 abn-body">
                    <div className="container">
                        <div className="main-body-abn col-xs-10 col-xs-offset-1">
                            <form action="">
                                <div id="header" className="text-center">
                                    <div className="abn-header text-center">
                                        <img src={bankImage} className="img-responsive" alt="Rabo Bank"/>
                                    </div>
                                </div>

                                <div className="col-xs-12 abn-body-container">
                                    {/*<hr/>*/}
                                    <div className="col-xs-12 form-container">
                                        <div className="col-xs-8">

                                            {loading ?
                                                (
                                                    <div className="spinner-container">
                                                        <CircularProgress disableShrink  size={24} thickness={4} className="loading-spinner" />
                                                    </div>
                                                )
                                                :
                                                null
                                            }

                                            <div className="col-xs-12 no-horizantal">
                                                <p>Bank card</p>
                                            </div>
                                            {AccountSubmitError
                                                ? <p className="col-xs-12 server-error">The combination of your account, card number and code is incorrect. If the problem persists, please contact your Rabobank. (947)</p>
                                                : null
                                            }
                                            <div className="col-xs-12 no-horizantal text-center card-account-constant-height">
                                                <div className="col-xs-6 no-horizantal account-access">
                                                    <label htmlFor="" className="col-xs-12 no-horizantal">
                                                        <div className="col-xs-12">
                                                            Account number
                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <div className={["col-xs-10","border-input-rabo",this.state.focusAccount ? "has-focus":"",errors.account_number ? "has-error" : ""].join(" ")}>
                                                            <div className="col-xs-6 no-horizantal">
                                                                NL • • RABO 0
                                                            </div>
                                                            <div className="col-xs-6 no-horizantal">
                                                                <input
                                                                    type="text"
                                                                    maxLength="9"
                                                                    name="account_number"
                                                                    onBlur={this.handleBlurCard.bind(this)}
                                                                    onFocus={this.handleFocusCard.bind(this)}
                                                                    onChange={this.handleInputNumber.bind(this)}
                                                                    disabled={this.state.disableAccountInfo}
                                                                    value={fields.account_number}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-2 no-horizantal text-center more-info-rabo">
                                                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                                                        </div>


                                                    </label>
                                                    {errors.account_number ?
                                                        <div className="col-xs-10 no-horizantal">
                                                            <span className="input-errors-rabo">{errors.account_number}</span>
                                                        </div>
                                                        :
                                                        null
                                                    }

                                                </div>
                                                <div className="col-xs-4 no-horizantal account-access">
                                                    <label htmlFor="" className="col-xs-12 no-horizantal">
                                                        <div className="col-xs-12">
                                                            card number
                                                        </div>
                                                        <div className={["col-xs-10","border-input-rabo",this.state.focusCard ? "has-focus":"",errors.card_number ? "has-error" : ""].join(" ")}>
                                                            <input
                                                                type="text"
                                                                maxLength="4"
                                                                name="card_number"
                                                                onBlur={this.handleBlurCard.bind(this)}
                                                                onFocus={this.handleFocusCard.bind(this)}
                                                                onChange={this.handleInputNumber.bind(this)}
                                                                disabled={this.state.disableAccountInfo}
                                                                value={fields.card_number}
                                                            />
                                                        </div>
                                                        <div className="col-xs-2 no-horizantal text-center more-info-rabo">
                                                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                                                        </div>
                                                    </label>

                                                    {errors.card_number ?
                                                        <div className="col-xs-10 no-horizantal">
                                                            <span className="input-errors-anb">{errors.card_number}</span>
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                </div>
                                            </div>
                                            {!this.state.disableAccountInfo
                                                ?   <div className="col-xs-12  no-horizantal">
                                                        <div className="col-xs-12 no-horizantal text-left">
                                                            <input type="checkbox" id="remember-me"/>
                                                            <label htmlFor="remember-me" className="pointer">
                                                                <span className="handle-checkbox"></span>
                                                                Remember account and card number locally.
                                                            </label>
                                                        </div>


                                                        <div className="col-xs-12  no-horizantal">
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                type="submit"
                                                                className="bank-submit bank-submit-account-info"
                                                                onClick={this.submitAccountInfo.bind(this)}
                                                            >
                                                                submit
                                                            </Button>
                                                        </div>
                                                    </div>
                                                : null
                                            }

                                            <div className="col-xs-12 no-horizantal">

                                                <div className="col-xs-12 no-horizantal">
                                                    <div className="col-xs-8 no-horizantal">
                                                        <ul className={["how-to-login", cardIfSubmitted ? "" : "deactive"].join(" ")}>
                                                            <li>Insert your card into the Rabo Scanner</li>
                                                            <li>Enter your PIN</li>
                                                            <li>Scan the color code</li>
                                                            <li>Verify the summary on the Rabo Scanner</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xs-4 no-horizantal">


                                                        {cardIfSubmitted?
                                                            <img src={`data:image/jpeg;base64,${JSON.parse(CrawlerStatusUpdate).Base64Data}`} className="img-responsive" alt="color code"/>
                                                            :
                                                            <img src={colorCodeGray} className="img-responsive" alt="color code gray"/>
                                                        }
                                                    </div>
                                                </div>


                                                <div className="col-xs-12 no-horizantal account-access">
                                                    <label htmlFor="" className="col-xs-12 no-horizantal">
                                                        <div className="col-xs-12">
                                                            Login code
                                                        </div>
                                                        <div className={["col-xs-8","border-input-rabo",this.state.focusLoginCode ? "has-focus":""].join(" ")}>
                                                            <input
                                                                type="text"
                                                                maxLength="8"
                                                                name="login_code"
                                                                onBlur={this.handleBlurLoginCode.bind(this)}
                                                                onFocus={this.handleFocusLoginCode.bind(this)}
                                                                onChange={this.handleInputNumber.bind(this)}
                                                                disabled={this.state.canLogin}
                                                                value={fields.login_code}
                                                            />
                                                        </div>

                                                    </label>
                                                    {errors.login_code ?
                                                        <div className="col-xs-10 no-horizantal">
                                                            <span className="input-errors-anb">{errors.login_code}</span>
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                </div>
                                            </div>



                                            <div className="col-xs-12 no-horizantal text-center">

                                            </div>
                                        </div>
                                        <div className="col-xs-4">
                                            <img src={raboscanner} alt="rabo scanner" className="img-responsive"/>
                                        </div>





                                    </div>
                                    <div className="col-xs-12 getfeed-btn no-horizantal">
                                        {cardIfSubmitted
                                        ? (
                                            <div className="col-xs-12 no-horizantal">
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
                                                        null
                                                    }
                                                </div>
                                                <div className="col-xs-12 text-center">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        className="bank-submit"
                                                        onClick={this.handleSubmit.bind(this)}
                                                    >
                                                        Accept and Login
                                                    </Button>
                                                </div>
                                            </div>
                                            )
                                        : null
                                        }
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
                    <DialogTitle className="text-center title-dialog" id="alert-dialog-title">
                        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" className="dialog-container-text" >
                            Your account has been updated
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className="text-center submit-btn-dialog">
                        <Button onClick={this.handleCloseDialog.bind(this)} variant="outlined" color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}


export default Rabo;
