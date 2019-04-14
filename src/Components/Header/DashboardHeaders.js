import React , {Component} from "react";
import "./../../Styles/dashboard.css";
import "./../../Styles/profile-header.css";
import AceLogo from "./../../Images/Ace-Acc.png";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DashboardItems from "./DashboardItems";
import Divider from '@material-ui/core/Divider';



class DashboardHeaders extends Component{
    constructor(props){
        super(props);
        this.state=({
            left: false,
        })
    }

    toggleDrawer(open){
        this.setState({
            left: open,
        });
    };
    render(){
        return(
            <div className="profile-header xs-size-header">
                <span className="hidden-xs">
                    <DashboardItems/>
                </span>

                <IconButton className="visible-xs burger-menu" color="inherit" aria-label="Menu" onClick={this.toggleDrawer.bind(this,true)}>
                    <MenuIcon />
                </IconButton>


                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer.bind(this,false)}
                    onOpen={this.toggleDrawer.bind(this,true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        className="drawer-container"
                        onClick={this.toggleDrawer.bind(this,false)}
                        onKeyDown={this.toggleDrawer.bind(this,false)}
                    >
                        <div className="drawer-img">
                            <img src={AceLogo} alt="ace accounting" className="img-responsive"/>
                        </div>
                        <Divider />
                        <DashboardItems/>

                    </div>
                </SwipeableDrawer>


            </div>

        )
    }
}

export default DashboardHeaders;

