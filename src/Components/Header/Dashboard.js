import React, {Component} from "react";
import DashboardHeaders from "./DashboardHeaders";
import Profile from "./Profile/Profile";
import {Link, withRouter} from "react-router-dom";
import dotnetify from 'dotnetify';
import { withNamespaces,Trans } from 'react-i18next';
import auth from "./../../auth";
import queryString from "query-string";
import connect from "react-redux/es/connect/connect";
import {HandleOrganizationChange, HandleUserInfoChange} from "../../Actions";

class Dashboard extends Component{
    constructor(props){
        super(props);
        const values = queryString.parse(this.props.location.search);
        this.state=({
            Organisations:[],
            UserEmailActivation:'',
            Token: values.verify_token,
            UserId:'',
            SelectedOrganisation:'',
        });




        this.vm = dotnetify.react.connect('Shared', this, {
            headers: { Authorization: 'Bearer ' + auth.getAccessToken() }
        });

    }

    componentDidUpdate(prevState){
        if (this.state.UserId !== prevState.UserId) {
            if(this.state.UserId){
                this.props.HandleUserInfoChange(this.state.UserId);
            }
        }

        if (this.state.SelectedOrganisation !== prevState.SelectedOrganisation) {
            if(this.state.SelectedOrganisation){

            }
        }


        if (this.state.Organisations !== prevState.Organisations) {
            if(this.state.Organisations.length === 0){
                // if user org is empty cleat previus data
                localStorage.removeItem('selectedCompany');
                localStorage.removeItem('selectedCompanyShortCode');
            }
            const selectedCompany = localStorage.getItem('selectedCompany') ? localStorage.getItem('selectedCompany') : this.state.SelectedOrganisationName;
            const shortCode = localStorage.getItem('selectedCompanyShortCode') ? localStorage.getItem('selectedCompanyShortCode') : this.state.SelectedOrganisation;
            this.props.HandleOrganizationChange( selectedCompany, shortCode, this.state.Organisations );
        }
    }

    _closeEmailAlert(){
        this.setState({
            UserEmailActivation:true,
        })
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }
    render(){

        const {Organisations, UserEmailActivation, SelectedOrganisation}=this.state;
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 no-horizantal main-header-component">
                    <div className="logo hidden-xs xs-size-header login-profile">
                        <Link to="/">
                            <span className="logo-normal"></span>
                        </Link>
                    </div>

                    <DashboardHeaders/>

                    <div className="logo visible-xs xs-size-header">
                        <Link to="/">
                            <span className="logo-normal"></span>
                        </Link>
                    </div>

                    <div className="user-access xs-size-header">
                        <Profile organisations={Organisations} selectedOrg={SelectedOrganisation}/>
                    </div>
                </div>

                <div className="col-xs-12 no-horizantal errorbar">
                    {!this.state.Token?
                        UserEmailActivation
                            ?null
                            :<div className="email-isnt-acctive">

                                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>

                                <Trans i18nKey="header.email_is_not_active">
                                    Please active your email address
                                </Trans>

                                <span className="email-isnt-acctive-close" onClick={this._closeEmailAlert.bind(this)}>
                                    <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                                </span>
                            </div>
                    :null
                    }

                </div>
          
            </div>
            
           
        )
    }
}

// const MapStateToProps = state => {
//     return {
//         // userInfo: state.User,
//         companyDetails: state.CompanyDetails,
//     }
// };


export default withNamespaces('translation')(withRouter( (connect(null, { HandleUserInfoChange, HandleOrganizationChange })( Dashboard ) ) ) );