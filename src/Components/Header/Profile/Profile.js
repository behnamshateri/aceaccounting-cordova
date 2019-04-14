import React ,{Component} from "react";
import { withNamespaces,Trans } from 'react-i18next';
import Popover from "@material-ui/core/Popover/Popover";
import BlockIcon from '@material-ui/icons/Block';
import {Link, withRouter} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from "react-redux";
import {HandleLogout} from "../../../Actions";
import {HandleOrganizationChange} from "../../../Actions";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
// import Avatar from "@material-ui/core/Avatar/Avatar";
import Chip from '@material-ui/core/Chip';


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = ({
            anchorEl: null,
            selectedCompany : '',
            selectedCompanyShortCode : '',
            Organisations:'',
            searchedOrg:'',
            xeroOrganisation:[],
            filteredOrgs:[],
            hasSelected: window.localStorage.getItem("selectedCompany") || "",
        });
    }

    componentDidMount(){
        // set preselect company in redux
        // this.props.HandleOrganizationChange(this.state.selectedCompany, this.state.selectedCompanyShortCode);
        this.setState({
            selectedCompany: this.props.selectedOrg,
        })
    }


    componentDidUpdate(prevProps){
        if (this.props.organisations !== prevProps.organisations) {
            const organisations=this.props.organisations;
            const xeroOrganisation=[];

            organisations.map( ( org ) => {
                    org.XeroOrgs.map((xero) => {
                        if (org.XeroOrgs.length > 1) {
                            xero['multiOrg'] = true;
                        }
                        xeroOrganisation.push(xero);
                        return null;
                    });
                return null;
            });

            this.setState({
                Organisations: this.props.organisations,
                xeroOrganisation,
                filteredOrgs:xeroOrganisation,
            });

       }

        if (this.props.selectedOrg !== prevProps.selectedOrg) {
            this.setState({
                selectedCompany:this.props.selectedOrg,
            })
        }

    }

   
    LogoutClick() {
        // logout
        this.setState({
            anchorEl: null,
            searchedOrg:'',
            filteredOrgs : this.state.xeroOrganisation
        });
        this.props.HandleLogout();
    }

    handleClick(event) {
        // open popover
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose() {
        // close popover
        this.setState({
            anchorEl: null,
            searchedOrg:'',
            filteredOrgs : this.state.xeroOrganisation,
        });
    }

    addOrganisation(){
        // close popover
        this.setState({
            anchorEl: null,
            searchedOrg:'',
            filteredOrgs : this.state.xeroOrganisation,
        });
        this.props.history.push('/organization-details')
    }

    //handle organization change
    _handleChangeOrg(xeroOrg , event){
        window.localStorage.setItem("selectedCompany", xeroOrg.Name);
        window.localStorage.setItem("selectedCompanyShortCode", xeroOrg.ShortCode );
        this.setState({
            anchorEl: null,
            searchedOrg:'',
            filteredOrgs : this.state.xeroOrganisation,
            hasSelected : xeroOrg.Name,
            selectedCompany : xeroOrg.Name,
        });
        this.props.HandleOrganizationChange(xeroOrg.Name, xeroOrg.ShortCode);
    }

    _handleSearchOrganisation(event){
        const searchQuery = event.target.value.toLowerCase();

        const filteredOrgs = this.state.xeroOrganisation.filter(function(org) {
            let searchedOrg = org.Name.toLowerCase();
            return searchedOrg.indexOf(searchQuery) !== -1;
        });

        this.setState({
            filteredOrgs,
            searchedOrg : event.target.value,
        })
    }

    render() {
        const {selectedCompany, Organisations, filteredOrgs}=this.state;
        const open = Boolean(this.state.anchorEl);

        return (
            <span>
                 <Chip
                     // icon={<FaceIcon />}
                     label={Organisations? Organisations.length > 0 ? selectedCompany ? selectedCompany : Organisations[0].XeroOrgs[0].Name : '' : '' }
                     onClick={this.handleClick.bind(this)}
                     className="user-profile-name "
                 />

                 {/*<span onClick={this.handleClick.bind(this)} className="inline-block">*/}
                     {/*<AvatarComp companyname={Organisations? Organisations.length > 0 ? selectedCompany ? selectedCompany : Organisations[0].XeroOrgs[0].Name : '' : '' }/>*/}
                 {/*</span>*/}



                 <Popover
                     id="user-profile-poper"
                     open={open}
                     anchorEl={this.state.anchorEl}
                     onClose={this.handleClose.bind(this)}
                     anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'right',
                     }}
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                     }}
                 >

                        <div className="user-profile-menu">
                            {/*<div className="col-xs-12 userinfo">*/}
                                {/*<p className="user-profile-name">*/}
                                    {/*{Organisations?*/}
                                            {/*Organisations.length > 0*/}
                                            {/*?  (*/}
                                                    {/*selectedCompany*/}
                                                        {/*? selectedCompany*/}
                                                        {/*: Organisations[0].XeroOrgs[0].Name*/}
                                                {/*)*/}
                                            {/*:"no organisation"*/}
                                        {/*:"no organisation"*/}
                                    {/*}*/}


                                {/*</p>*/}
                                {/*<span className="profile-image-container">*/}
                                    {/*<img src={UserImage} alt="TNP 24" className="img-responsive user-profile-image" />*/}
                                {/*</span>*/}

                            {/*</div>*/}
                            {/*<div className="clearfix"></div>*/}
                            <Divider />
                            <List component="nav" className="company-selection">
                                 {Organisations.length > 0

                                     ? <div className="col-xs-12 search-org-container">
                                         <i className="fa fa-search" aria-hidden="true"></i>
                                         <input type="text" value={this.state.searchedOrg} className="search-organisation" placeholder="Search organisation" onChange={this._handleSearchOrganisation.bind(this)}/>
                                       </div>
                                     : null
                                 }
                                {Organisations.length > 0
                                    ? filteredOrgs.length > 0 ?
                                        (
                                            filteredOrgs.map((xeroOrg, index) => {
                                                if (index < 5) {
                                                    const data = new Date(xeroOrg.CreatedAt);
                                                    return (
                                                        <ListItem key={index} button
                                                                  onClick={this._handleChangeOrg.bind(this, xeroOrg)}>
                                                            <ListItemIcon>
                                                                <InboxIcon/>
                                                            </ListItemIcon>
                                                            <ListItemText primary={xeroOrg.Name}
                                                                          className="company-text no-horizantal"/>
                                                            <ListItemText
                                                                primary={xeroOrg.multiOrg ? data.getFullYear() : "-"}
                                                                className="company-text company-text-year no-horizantal"/>
                                                        </ListItem>
                                                    )
                                                }
                                                return null;
                                            })
                                        )
                                        :
                                        (<div className="col-xs-12 organisation-not-found">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                            <p>No results found.</p>
                                        </div>)
                                    : (<div className="col-xs-12 organisation-not-found">
                                        <p>You have no organisation.</p>
                                    </div>)
                                }


                                {/*add organisation*/}
                                <ListItem button onClick={this.addOrganisation.bind(this)}>
                                  <ListItemIcon>
                                    <AddIcon/>
                                  </ListItemIcon>
                                  <ListItemText primary="Add New Organisation" className="company-text no-horizantal"/>
                                </ListItem>
                              </List>
                            <div className="col-xs-12 second-part no-horizantal">
                                <div className="col-xs-4 no-horizantal">
                                    <Link to="/"><PersonIcon />
                                        <Trans i18nKey="header.profile">
                                            Profile
                                        </Trans>
                                    </Link>
                                </div>
                                <div className="col-xs-4 no-horizantal">
                                    <Link to="/"><SettingsIcon />
                                        <Trans i18nKey="header.account">
                                            Account
                                        </Trans>
                                    </Link>
                                </div>
                                <div className="col-xs-4 no-horizantal" onClick={this.LogoutClick.bind(this)} >
                                    <Link to="/"><BlockIcon />
                                        <Trans i18nKey="header.logout-btn">
                                            Logout
                                        </Trans>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover>

            </span>
        );
    }
}


const MapStateToProps = state => {
    return {
        UserOrganizations: state.Login.UserOrganizations,
        selectedOrg: state.CompanyDetails.selectedorg,
    }
};

export default withNamespaces('translation')(withRouter(connect(MapStateToProps, { HandleLogout, HandleOrganizationChange })(Profile)));




// avatar of selected company and get first character of each word
// function AvatarComp(props){
//     const name=props.companyname;
//     if(name){
//         var caracterName=[];
//         name.split(" ").map( (i , index) => {
//             if(index > 1) {
//                 return null;
//             }
//             else{
//                 caracterName[index]=i.toUpperCase().charAt(0);
//                 return null;
//             }
//
//         });
//         const splitedname=caracterName.join(" ");
//         return <Avatar className="avatar-profile">{splitedname}</Avatar>
//     }else{
//         return <Avatar className="avatar-profile"></Avatar>
//     }
//
// }