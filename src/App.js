import React, { Component } from "react";
import dotnetify from "dotnetify";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Styles/bootstrap.min.css";
import "./Styles/bootstrap-theme.min.css";
import "./Styles/font-awesome.min.css";
import "./Styles/main-page.css";
import Home from "./Components/Home";
import MainHeader from "./Components/Header/MainHeader";
import Loadable from "react-loadable";
import Isnotlogin from "./Components/Isnotlogin";
import FirstPage from "./Components/FirstPage";
import LoadingSvg from "./Loading";



const Loading=() => <LoadingSvg/>;

// const Loading =(props) => {
//         if (props.error) {
//             return <div>Error! <button onClick={props.retry}>Retry</button></div>;
//         } else if (props.pastDelay) {
//             return <div>Loading...</div>;
//         } else {
//             return null;
//         }
//     };
const Footer=Loadable({
    loader:()=>import ('./Components/Footer/Footer'),
    loading:Loading,
});

const login=Loadable({
    loader:()=>import ('./Components/Authentication/Login'),
    loading:Loading,
});

const Signup=Loadable({
    loader:()=>import ('./Components/Authentication/SignUp'),
    loading:Loading,
});
const ForgetPassword=Loadable({
    loader:()=>import ('./Components/Authentication/ForgetPassword'),
    loading:Loading,
});

const MobileConfirm=Loadable({
    loader:()=>import ('./Components/Authentication/MobileConfirm'),
    loading:Loading,
});

const LoginMobileConfirm=Loadable({
    loader:()=>import ('./Components/Authentication/LoginMobileConfirm'),
    loading:Loading,
});

const EditPhoneNumber=Loadable({
    loader:()=>import ('./Components/Authentication/EditPhoneNumber'),
    loading:Loading,
});

const EmailVerification=Loadable({
    loader:()=>import ('./Components/Authentication/EmailVerification'),
    loading:Loading,
});



const NotFound404=Loadable({
    loader:()=>import ('./Components/NotFound-404'),
    loading:Loading
});

const Dashboard=Loadable({
    loader:()=>import ('./Components/Dashboard'),
    loading:Loading
});

const PrivateRoute=Loadable({
    loader:()=>import ('./Components/PrivateRoute'),
    loading:Loading
});

const Invoice=Loadable({
    loader:()=>import ('./Components/SalesInvoice/Invoice'),
    loading:Loading
});

// Todo: Work in progress
// const Expenses = Loadable({
//     loader:()=>import ('./Components/Expenses'),
//     loading:Loading
// });

const Account=Loadable({
    loader:()=>import ('./Components/BankAccount/Account'),
    loading:Loading
});

const Resource=Loadable({
    loader:()=>import ('./Components/Resource'),
    loading:Loading
});

const Form=Loadable({
    loader:()=>import ('./Components/Form'),
    loading:Loading
});
const Documents=Loadable({
    loader:()=>import ('./Components/Documents'),
    loading:Loading
});

const OrganizationDetails=Loadable({
    loader:()=>import ('./Components/DashboardHome/OrganizationDetails'),
    loading:Loading
});

const NewInvoice=Loadable({
    loader:()=>import ('./Components/SalesInvoice/NewInvoice'),
    loading:Loading
});

const FindingBank=Loadable({
    loader:()=>import ('./Components/BankAccount/FindingBank'),
    loading:Loading
});

const AccountDetails=Loadable({
    loader:()=>import ('./Components/BankAccount/AccountDetails'),
    loading:Loading
});

const InvoiceDraft=Loadable({
    loader:()=>import ('./Components/SalesInvoice/InvoiceType/InvoiceDraft/InvoiceDraft'),
    loading:Loading
});
const InvoiceAwatingApproved=Loadable({
    loader:()=>import ('./Components/SalesInvoice/InvoiceType/InvoiceAwatingApproved/InvoiceAwatingApproved'),
    loading:Loading
});

const InvoiceAwatingPayment=Loadable({
    loader:()=>import ('./Components/SalesInvoice/InvoiceType/InvoiceAwatingPayment/InvoiceAwatingPayment'),
    loading:Loading
});

const InvoiceOverride=Loadable({
    loader:()=>import ('./Components/SalesInvoice/InvoiceType/InvoiceOverride/InvoiceOverride'),
    loading:Loading
});

const AbnAmro=Loadable({
    loader:()=>import ('./Components/BankAccount/Banks/AbnAmro/AbnAmro'),
    loading:Loading
});

const Rabo=Loadable({
    loader:()=>import ('./Components/BankAccount/Banks/Rabo/Rabo'),
    loading:Loading
});

const Ing=Loadable({
    loader:()=>import ('./Components/BankAccount/Banks/Ing/Ing'),
    loading:Loading
});

const Cimb=Loadable({
    loader:()=>import ('./Components/BankAccount/Banks/Cimb/Cimb'),
    loading:Loading
});

const Bunq=Loadable({
    loader:()=>import ('./Components/BankAccount/Banks/Bunq/Bunq'),
    loading:Loading
});


const Transfer=Loadable({
    loader:()=>import ('./Components/BankAccount/TransferMony'),
    loading:Loading
});




 class App extends Component{
    constructor(props){
        super(props);
        this.state={
            isAuthenticated:false,
            connection:true,
            connectionString:"",
        };

        // check connection of SingnalR
        dotnetify.connectionStateHandler = (state) => {
            switch(state) {
                case 'terminated':
                    this.setState({
                        connection:false,
                        connectionStatus:<i className="fa fa-times-circle connection-icon connection-terminated-icon" aria-hidden="true"></i>,
                        connectionString:"disconnected",
                    });
                    break;
                case 'connecting':
                    this.setState({
                        connection:false,
                        connectionStatus:<i className="fa fa-refresh connection-icon connection-reconnecting-icon" aria-hidden="true"></i>,
                        connectionString:"connecting",
                    });
                    break;
                case 'connected':
                    this.setState({
                        connection:true,
                        connectionStatus:null,
                        connectionString:"",
                    });
                    break;
                case 'reconnecting':
                    this.setState({
                        connection:false,
                        connectionStatus:<i className="fa fa-refresh connection-icon connection-reconnecting-icon" aria-hidden="true"></i>,
                        connectionString:"reconnecting",
                    });
                    break;
                case 'disconnected':
                    this.setState({
                        connection:false,
                        connectionStatus:<i className="fa fa-exclamation-triangle connection-icon connection-disconnected-icon" aria-hidden="true"></i>,
                        connectionString:"disconnected",
                    });
                    break;
                default:
                    return null;
            }
            console.log(state);
        };

    }


    componentDidMount(){
     let apiToken=this.props.login.isLogin;
       if(apiToken!=null){
           // check there is correct api_token from server
            this.setState({
                isAuthenticated:true
            })

       }else{
           this.setState({
               isAuthenticated:false
           })
       }
    }

     componentWillReceiveProps(nextProps) {
         if(nextProps.login!==this.props.login) {
             let apiToken = nextProps.login.isLogin;
             console.log(apiToken);
             if(apiToken!==null){
                 // check there is correct api_token from server
                 // if it is ok
                 if(apiToken){
                     this.setState({
                         isAuthenticated:true
                     })
                 }else{
                     this.setState({
                         isAuthenticated:false
                     })
                 }
             }else{
                 this.setState({
                     isAuthenticated:false,
                 })
             }
         }
     }

     handleClose(){

     }

     


     render() {
        return (
            <div className="col-xs-12 no-horizantal">
                <MainHeader auth={this.state.isAuthenticated}/>
                <div className="col-xs-12 no-horizantal content-container">
                    {/*<TransitionGroup>*/}
                    {/*<CSSTransition classNames="fade"  key={this.props.location.key} timeout={100} >*/}
                    <Switch>
                        <FirstPage path="/" exact={true} component={Home} auth={this.state.isAuthenticated}/>
                        <Isnotlogin path="/login" component={login} exact={true} auth={this.state.isAuthenticated}/>
                        <Route path="/signup" component={Signup} />
                        <Route path="/forget-password" component={ForgetPassword} />
                        <Route path="/signin-phone-verification" component={LoginMobileConfirm} />
                        <Route path="/signup-phone-verification" component={MobileConfirm} />
                        <Route path="/email/verification" component={EmailVerification} />
                        <Route path="/edit-phone" component={EditPhoneNumber} />
                        <PrivateRoute path="/dashboards" component={Dashboard} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/sales" component={Invoice} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/bills" component={Invoice} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/bank-accounts" component={Account} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/human-resources" component={Resource} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/leave-form" component={Form} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/documents" component={Documents} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/organization-details" component={OrganizationDetails} history={this.props.history} auth={this.state.isAuthenticated}/>

                        {/*banking*/}
                        <PrivateRoute path="/banking/account/find" component={FindingBank} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/banking/add-account/:bank" component={AccountDetails} history={this.props.history} auth={this.state.isAuthenticated}/>


                        <PrivateRoute path="/banking/nl/abn-amro" component={AbnAmro} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/banking/nl/rabo" component={Rabo} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/banking/nl/ing" component={Ing} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/banking/my/cimb" component={Cimb} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/banking/nl/bunq" component={Bunq} history={this.props.history} auth={this.state.isAuthenticated}/>





                        <PrivateRoute path="/new-invoice" component={NewInvoice} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/invoices/draft" component={InvoiceDraft} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/invoices/awaiting-approved" component={InvoiceAwatingApproved} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/invoices/awaiting-payment" component={InvoiceAwatingPayment} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/invoices/override" component={InvoiceOverride} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <PrivateRoute path="/bank/transfer" component={Transfer} history={this.props.history} auth={this.state.isAuthenticated}/>
                        <Route component={NotFound404} />
                    </Switch>
                    {/*</CSSTransition>*/}
                    {/*</TransitionGroup>*/}
                </div>
                <Footer/>
                <Dialog
                    open={!this.state.connection}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" className="title-Connection">Connection Status </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" className="connection-string">
                            {this.state.connectionStatus}
                            <div className="clearfix"></div>
                            {this.state.connectionString}
                            <p className="connection-wait">Please wait ...</p>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
         )
    }
};


const MapStateToProps = state => {
    return {
        login: state.Login,
    }
};

export default withRouter(connect(MapStateToProps)(App));
