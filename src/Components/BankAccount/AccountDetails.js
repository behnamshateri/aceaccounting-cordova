import React,{Component} from "react";
import TextField from '@material-ui/core/TextField';
import "../../Styles/FindingBank.css";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import dotnetify from "dotnetify";
import validator from 'validator';
import NoSsr from "@material-ui/core/NoSsr/NoSsr";
import Select from "@atlaskit/select/dist/cjs/Select";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";



const components = {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};




class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            currency:"",
            fields:{
                accountName:"",
                accountNumber:'',
            },
            Currencies: [],
            BankInfo:'',
            bankId : this.props.match.params.bank,
            BanksError:false,
            BankNotFound:false,
            errors: {},
        };

        console.log(typeof this.state.bankId, "bank id");
        this.vm = dotnetify.react.connect('AddBankAccount', this, { vmArg: { BankId: this.state.BankId } });

        this.myRef = React.createRef();
    }





    handleChangeCurrency(event){
        if(event){
            this.setState({ currency: event.Currency});
        }
    }



    submit(event){
        event.preventDefault();
        let errors = {};
        let regex = this.myRef.current.props.regex;
        const re = new RegExp(regex);

        if(validator.isEmpty(this.state.fields.accountName)){
            errors['accountName']='Account name cant be empty';
        }

        if(!this.state.currency){
            errors['currency']='Select a currency';
        }

        if(re.test(this.state.fields.accountNumber)){
            if(this.state.currency){
                if(!validator.isEmpty(this.state.fields.accountName)  && ! /\d/g.test(this.state.fields.accountName) ){
                    // form is valid
                    this.props.history.push({
                        pathname: "/bank-accounts",
                        state: { isNew: true }
                    });

                }else if(/\d/g.test(this.state.fields.accountName)){
                    errors['accountName']='Account name cant contain digit';
                }
            }
        }else{
            errors['accountNumber']='Your Account number is not valid';
        }

        this.setState({errors});
    }

    handleAccountInformation(event){
        let errors = {};
        const accountLenght=this.myRef.current.props.lenght;
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });

        switch (event.target.name) {
            case "accountName":
                if(/\d/g.test(event.target.value)){
                    errors["accountName"]='Account name cant contain digit';
                }else{
                    errors["accountName"]='';
                }
                break;
            case "accountNumber":
                if(event.target.value.length === accountLenght){
                    errors["accountNumber"]='';
                }else {
                    errors["accountNumber"]=`Account number must be ${accountLenght}`;
                }
                break;
            default:
                break;
        }

        this.setState({errors});
    }





    render(){
        const {BankInfo, Currencies, BankNotFound}= this.state;

        // console.log(this.state.Currencies, "Currencies", BankInfo);

        let suggestions = Currencies.map(suggestion => ({
            value: suggestion.Id,
            label: suggestion.Currency
        }));

        return(
            <div className="col-xs-12 no-horizantal">
                <div className="container">
                    <div className="col-xs-12 find-bank-panel">
                        {BankInfo
                            ?   <h1 className="text-center">
                                    Enter your {BankInfo.BankName} account details
                                </h1>
                            :   <h1 className="text-center">Errors</h1>
                        }


                        <div className="banks-search-container col-xs-8 col-xs-offset-2">
                            {BankNotFound
                                ?  (
                                    <div className="col-xs-12 text-center bank-not-found">
                                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                        <p>Oops, bank not fount</p>
                                    </div>
                                )

                                :  (
                                    <form className="finding-bank-form" noValidate autoComplete="off" >
                                        {/*account name*/}
                                        <TextField
                                            label="Account Name"
                                            name="accountName"
                                            className='bank-name-input'
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleAccountInformation.bind(this)}
                                            helperText="e.g Business Account"
                                        />

                                        {this.state.errors.accountName
                                            ? <span className="input-errors" >{this.state.errors.accountName}</span>
                                            : null
                                        }

                                        <div className="inline-row-flex-space">
                                            {/*account number*/}
                                            <TextField
                                                label="Account Number"
                                                name="accountNumber"
                                                value={this.state.TextField}
                                                className='bank-name-input get-account-number'
                                                margin="normal"
                                                variant="outlined"
                                                helperText={BankInfo.AccountPlaceHolder? `${'eg+: '+BankInfo.AccountPlaceHolder}` : 'eg'}
                                                onChange={this.handleAccountInformation.bind(this)}
                                                ref={this.myRef}
                                                regex={BankInfo.AccountRegex}
                                                lenght={BankInfo.Accountlenght}
                                                // InputProps={{
                                                //     inputComponent: NumberFormatCustom,
                                                // }}
                                            />


                                        </div>
                                        {this.state.errors.accountNumber
                                            ? <span className="input-errors" >{this.state.errors.accountNumber}</span>
                                            : null
                                        }

                                        {/*currency*/}
                                        {/*<TextField*/}
                                            {/*id="currency"*/}
                                            {/*select*/}
                                            {/*label="Currency"*/}
                                            {/*className="bank-name-input right"*/}
                                            {/*// value={this.state.currency}*/}
                                            {/*onChange={this.handleChangeCurrency.bind(this)}*/}
                                            {/*SelectProps={{*/}
                                                {/*native: true,*/}
                                                {/*MenuProps: {*/}
                                                    {/*className: "a",*/}
                                                {/*},*/}
                                            {/*}}*/}
                                            {/*helperText="select currency"*/}
                                            {/*margin="normal"*/}
                                            {/*variant="outlined"*/}
                                        {/*>*/}
                                            {/*<option value="">Select a currency</option>*/}

                                            {/*{Currencies*/}
                                                {/*?Currencies.map((option, index) => {*/}
                                                    {/*return (*/}
                                                        {/*<option key={index} value={option.Currency}>*/}
                                                            {/*{option.Currency}*/}
                                                        {/*</option>*/}
                                                    {/*)*/}
                                                {/*})*/}
                                                {/*:null*/}
                                            {/*}*/}

                                        {/*</TextField>*/}




                                        <NoSsr>
                                            <Select
                                            className="selectStyles"
                                            options={suggestions}
                                            components={components}
                                            value={this.state.currency}
                                            onChange={this.handleChangeCurrency.bind(this)}
                                            placeholder="Select currency"
                                            isClearable
                                            />
                                        </NoSsr>

                                        {this.state.errors.currency
                                            ? <span className="input-errors" >{this.state.errors.currency}</span>
                                            : null
                                        }


                                    </form>
                                )
                            }

                        </div>
                        <div className={["col-xs-8", "col-xs-offset-2", "next-and-back", BankNotFound? "bank-not-found-center" : ""].join(" ") }>
                            <Link to={"/banking/account/find"}>
                                <Button variant="contained" >
                                    back
                                </Button>
                            </Link>
                            {BankNotFound
                                ?null
                                :(
                                    <Button variant="contained"  color="primary" onClick={this.submit.bind(this)}>
                                        save
                                    </Button>
                                )
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AccountDetails;



function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};



function Placeholder(props) {
    console.log(props, " place holder");
    return (
        <Typography
            color="textSecondary"
            className="placeholder"
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}


function SingleValue(props) {
    console.log(props, "SingleValue");
    return (
        <Typography className="singleValue" {...props.innerProps}>
            {props.children}
        </Typography>
    );
}


function ValueContainer(props) {
    console.log(props, "ValueContainer");
    return <div className="singleValue" >{props.children}</div>;
}


function NoOptionsMessage(props) {
    console.log(props, "NoOptionsMessage");
    return (
        <Typography
            color="textSecondary"
            className="noOptionsMessage"
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function Menu(props) {
    console.log(props, "Menu");
    return (
        <Paper square className="paper" {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

function Control(props) {
//select section
    return (
        <TextField
            variant="outlined"
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: "input",
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}


function Option(props) {
    console.log(props, "Option");
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            className="item-selective"
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}














