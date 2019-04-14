import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import { withNamespaces,Trans } from 'react-i18next';
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from "@material-ui/core/Divider/Divider";
import Button from '@material-ui/core/Button';

class Authentication extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            isLoginPage: false,
            anchorEl: null,
            anchorLogin:null,
        });
    }

    handleProfileMenuOpen(event ){
        this.setState({ anchorLogin: event.currentTarget })
    }

    handleMobileMenuClose(){
        this.setState({ anchorLogin: null })
    }
    handleMenuClose(){
        this.setState({ anchorLogin: null });
        this.handleMobileMenuClose();
    }

    handleLogin(){
        this.props.history.push('/login');
        this.setState({ anchorLogin: null });
    }

    handleSignup(){
        this.props.history.push('/signup');
        this.setState({ anchorLogin: null });
    }
    
    render(){
        const isMenuOpen = Boolean(this.state.anchorLogin);
        return(
            <div className="col-xs-12 no-horizantal main-header-component">
                        <div className="logo hidden-xs">
                            <Link to="/">
                                <span className="logo-normal"></span>
                            </Link>
                        </div>

                        <div className="logo visible-xs xs-size-header login-profile">
                            <Link to="/">
                                <span className="logo-normal"></span>
                            </Link>
                        </div>

                        <div className="user-access xs-size-header">
                            <span className="hidden-xs">
                                <Button variant="outlined" className="login-logout">
                                    <Link to="/login">
                                        <Trans i18nKey="header.login-btn">
                                            LOGIN
                                        </Trans>

                                    </Link>
                                </Button>
                                <Button variant="contained" color="primary" className='login-logout signup'>
                                    <Link to="/signup">
                                        <Trans i18nKey="header.signup-btn">
                                            SIGNUP
                                        </Trans>

                                    </Link>
                                </Button>
                            </span>

                            <span className="visible-xs change-login-signup">
                                <IconButton
                                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleProfileMenuOpen.bind(this)}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    anchorEl={this.state.anchorLogin}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    open={isMenuOpen}
                                    className="change-login-type-ul"
                                    onClose={this.handleMenuClose.bind(this)}
                                >
                                    <MenuItem onClick={this.handleLogin.bind(this)} className="change-login-type-xs">
                                        <Trans i18nKey="header.login-btn">
                                            LOGIN
                                        </Trans>
                                    </MenuItem>
                                    <Divider/>
                                    <MenuItem onClick={this.handleSignup.bind(this)} className="change-login-type-xs">
                                        <Trans i18nKey="header.signup-btn">
                                            SIGNUP
                                        </Trans>
                                    </MenuItem>
                                </Menu>
                            </span>
                            
                        </div>
                
                    </div>
        )
    }
}
export default withNamespaces('translation')(withRouter(Authentication));