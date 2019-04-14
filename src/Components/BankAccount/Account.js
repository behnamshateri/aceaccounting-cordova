import React,{Component} from "react";
import "../../Styles/account.css";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import {Link} from "react-router-dom";
// Todo: Uncomment Trans for language change
import { withNamespaces /*, Trans */ } from 'react-i18next';
import dotnetify from "dotnetify";
import WithoutAccount from "./../../Images/account/bankAccount.png";
import connect from "react-redux/es/connect/connect";
import AccountSection from "./AccountSection/AccountSection";
import Loading from "../../Loading";


class Account extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            vertical: 'bottom',
            horizontal: 'right',
            Accounts:[],
            ChangedAccounts:[],
            OrganisationShortCode:'',
        };

    }

    async componentWillMount() {
        // let firstOrg;
        // if(this.props.companyDetails.length>0){
        //     // if company data set, get first org data
        //     if(await this.props.companyDetails.organisation.length>0){
        //         firstOrg = await this.props.companyDetails.organisation[0].XeroOrgs[0].ShortCode;
        //     }
        // }

        var organisationShortCode=this.props.companyDetails.organisationShortCode ? this.props.companyDetails.organisationShortCode: null;
        this.vm = dotnetify.react.connect('BankAccount', this, { vmArg: { OrganisationShortCode: organisationShortCode, UserId:this.props.userInfo.userId }});
    }

    async componentDidMount(){
        if(this.props.location.state){
            if(this.props.location.state.isNew){
                this.setState({
                    open:true,
                })
            }
        }
    }


    componentDidUpdate(prevProps, prevState){
         if (this.props.companyDetails.organisationShortCode !== prevProps.companyDetails.organisationShortCode) {
            this.vm.$dispatch({
                ChangeOrganisationBankAccount: {
                    OrganisationShortCode: this.props.companyDetails.organisationShortCode,
                    UserId: this.props.userInfo.userId,
                }
            });
        }

        if (JSON.stringify(this.state.ChangedAccounts) !==JSON.stringify( prevState.ChangedAccounts)) {
            this.setState({
                Accounts :this.state.ChangedAccounts,
            })
        }
    }

    handleClose(){
        this.setState({ open: false });
    };

    changeRoute(){
        this.props.history.push('/banking/account/find')
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render(){
        const {Accounts}=this.state;
        return(
            <div className="col-xs-12 bank-account-page" >
                <div className="container">
                        <div className=" no-horizantal bank-account-header dashboard-pages-header">
                            <Button variant="contained" className="new-invoice btn-invoice header-btn" onClick={this.changeRoute.bind(this)}>
                                <i className="fa fa-plus-square" aria-hidden="true"></i>
                                Add Bank Acount
                            </Button>

                            <Link to="/bank/transfer">
                                <Button variant="contained" className="new-invoice btn-invoice header-btn" >
                                    <i className="fa fa-plus-square" aria-hidden="true"></i>
                                    Transfer Money
                                </Button>
                            </Link>
                        </div>
                        <div className="col-xs-12 invoice-type-select border-top"></div>

                        <div className="col-xs-12 no-horizantal account-container ">

                            {Accounts
                                ? Accounts.length>0
                                    ?
                                    Accounts.map((item, index)=>{
                                        return <AccountSection key={index} item={item}/>
                                    })
                                    :
                                    <div className="col-xs-12">
                                        <img src={WithoutAccount}  alt="without-account" className="img-responsive without-account"/>

                                        <div className="col-xs-12 text-center">
                                            <Button variant="contained" color="primary" className="add-account" onClick={this.changeRoute.bind(this)}>
                                                Add Account
                                            </Button>
                                        </div>
                                    </div>
                                : <Loading/>
                            }

                        </div>
                    <Snackbar
                        anchorOrigin={{vertical:this.state.vertical , horizontal:this.state.horizontal}}
                        open={this.state.open}
                        onClose={this.handleClose.bind(this)}
                        autoHideDuration={6000}
                        className="snackbar-success"
                        variant="success"
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={
                            <span id="message-id">
                                your account has been added.
                                <i className="fa fa-times right" onClick={this.handleClose.bind(this)} aria-hidden="true"></i>
                            </span>
                        }

                    />
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        userInfo: state.User,
        companyDetails: state.CompanyDetails,
    }
};

export default withNamespaces('translation')(connect(MapStateToProps, {})(Account));