import React,{Component} from "react";
import "../../../../Styles/Bank/abn-bank.css";
import "../../../../Styles/Bank/ing-bank.css";
import bankimage from "../../../../Images/bank-logo/ing-bank.png";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button/Button";
import TextField from '@material-ui/core/TextField';
import validator from "validator";
import dotnetify from "dotnetify";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

class Ing extends Component{

    constructor(props){
        super(props);
        this.state=({
            loading:false,
            acception:true,
            loginType:true, //personal
            username:'',
            password:'',
            warning:true,//visible warning
            AccountSubmitError:false,
            AccountErrorMessage:false,
            AccountSubmitSuccess:false,
            fields: {
                username:'',
                password:'',
            },
            errors: {},
        });

        this.vm = dotnetify.react.connect('Ing', this);
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.AccountSubmitSuccess !== prevState.AccountSubmitSuccess) {
            if(this.state.AccountSubmitSuccess){
                // Todo:handle true information
                this.setState({
                    loading:false,
                })
            }
        }

        if (this.state.AccountSubmitError !== prevState.AccountSubmitError) {
            if(this.state.AccountSubmitError){
                // Todo:handle invalid information
                this.setState({
                    loading:false,
                })
            }
        }
    }

    handleChangeInput(event){
        let {fields} = this.state;
        let errors = {};
        fields[event.target.name]=event.target.value;
        if(validator.isEmpty(fields[event.target.name])){
            if(event.target.name==="username"){
                errors[event.target.name] = "Please enter your user name.";
            }else if(event.target.name==="password"){
                errors[event.target.name] = "Please enter your password.";
            }
        }

        this.setState({
            fields:fields,
            errors:errors
        })

    }


    handleValidation(callback){
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;


        if(validator.isEmpty(fields.username)) {
            formIsValid = false;
            errors["username"] = "Please enter your user name.";
        }

        if(validator.isEmpty(fields.password)) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
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
                        UserName: this.state.fields.username,
                        Password:this.state.fields.password,
                        IsPersonal:this.state.loginType,
                    }
                });

            }else{
                this.setState({
                    loading:false,
                });
            }
        })

    }

//handle acception of terms and conditions
    handleChangeAcception(){
        this.setState({
            acception:!this.state.acception,

        })
    }

// handle login type
    handleChangeLoginType(){
        this.setState({
            loginType:!this.state.loginType,
            warning:true,
        })
    }

    handleWarning(){
        this.setState({
            warning:false,
        })
    }


    componentWillUnmount() {
        this.vm.$destroy();
    }


    render(){
        const {fields, errors, warning, loading}=this.state;
        console.log(this.state.AccountSubmitError, this.state.AccountSubmitSuccess);

        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 abn-body">
                    <div className="container">
                        <div className="main-body-abn col-xs-10 col-xs-offset-1">
                            <form action="" onSubmit={this.handleSubmit.bind(this)}>
                            <input type="hidden" name="login_type" value={this.state.loginType}/>
                            <div id="header" className="text-center">
                                    <div className="abn-header text-center">
                                        <img src={bankimage} className="img-responsive" alt="ing Bank"/>
                                    </div>
                                </div>
                                <div className="col-xs-12 abn-body-container">
                                    <div className="col-xs-12 form-container text-center">
                                        {loading ?
                                            (
                                                <div className="spinner-container">
                                                    <CircularProgress disableShrink  size={24} thickness={4} className="loading-spinner" />
                                                </div>
                                            )
                                            :
                                            null
                                        }

                                        <span className="login-ing-container">

                                            <div className="col-xs-12 change-login-type">
                                                <span className={["" , this.state.loginType?"isactive":""].join(" ")} onClick={this.handleChangeLoginType.bind(this)}>Personal</span>
                                                <span className={["" , this.state.loginType?"":"isactive"].join(" ")} onClick={this.handleChangeLoginType.bind(this)}>Business</span>
                                            </div>

                                            <div className="col-xs-12 ing-sub-body">
                                                {warning ?
                                                    <div className="col-xs-12 warning no-horizantal">
                                                        <div className="alert">
                                                            <i className="fa fa-info-circle left" aria-hidden="true"></i>
                                                            <span>
                                                                <h2 className="title">Want to log in as a {this.state.loginType? "business":"private"} user?</h2>
                                                                <span className="text">Select {this.state.loginType? "‘Business’":"‘Personal’"} to log in to Mijn ING. </span>
                                                            </span>
                                                            <i className="fa fa-times right" onClick={this.handleWarning.bind(this)} aria-hidden="true"></i>

                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                                }
                                                <h1 className="up-title text-left">Log in to Mijn ING</h1>
                                                <div className="col-xs-12 no-horizantal">
                                                    <TextField
                                                        id="standard-username-input"
                                                        label="User name"
                                                        className={["input-ing",errors.username?"haserror":""].join(" ")}
                                                        type="text"
                                                        margin="normal"
                                                        name='username'
                                                        value={fields.username}
                                                        onChange={this.handleChangeInput.bind(this)}
                                                        inputProps={{
                                                            autoComplete:"section-email",
                                                        }}
                                                    />
                                                    {errors.username ?
                                                        <span className="input-errors-ing"><i className="fa fa-times-circle"></i> {errors.username}</span>
                                                        :
                                                        null
                                                    }
                                                </div>

                                                <div className="col-xs-12 no-horizantal">
                                                    <TextField
                                                        id="standard-password-input"
                                                        label="Password"
                                                        className={["input-ing",errors.password?"haserror":""].join(" ")}
                                                        type="password"
                                                        margin="normal"
                                                        name='password'
                                                        value={fields.password}
                                                        onChange={this.handleChangeInput.bind(this)}
                                                        inputProps={{
                                                            autoComplete:"new-password",
                                                        }}
                                                    />
                                                    {errors.password ?
                                                        <span className="input-errors-ing"><i className="fa fa-times-circle"></i> {errors.password}</span>
                                                        :
                                                        null
                                                    }
                                                </div>

                                                <div className="col-xs-12 no-horizantal text-left">
                                                    <input type="checkbox" id="remember-me"/>
                                                    <label htmlFor="remember-me" className="pointer">
                                                        <span className="handle-checkbox"></span>
                                                        Remember my user name.
                                                    </label>
                                                </div>


                                            </div>

                                        </span>

                                    </div>

                                    <div className="col-xs-12 getfeed-btn no-horizantal">
                                        <div className="col-xs-12 text-center">
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
                                            <div className="clearfix"/>
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
            </div>
        )
    }
}

export default Ing;
