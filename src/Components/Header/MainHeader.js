import React, { Component } from "react";
import { connect } from "react-redux";
import { HandleLogout } from "../../Actions";
import Dashboard from "./Dashboard";
import Authentication from "./Authentication";

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isAuthenticated:this.props.auth,
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth!==this.props.auth) {
            this.setState({
                isAuthenticated:nextProps.auth,
            })
        }
    }
    // LogoutClick() {
    //     this.setState({
    //         anchorEl: null,
    //     });
    //     auth.signOut();
    //     this.props.HandleLogout();
    // }

    render() {
        return (
            <div className="col-xs-12 no-horizantal ">
                {this.state.isAuthenticated 
                    ?<Dashboard/>
                    :<Authentication/>
                }
            </div>
        )
    }
}



export default connect(null, { HandleLogout })(MainHeader);