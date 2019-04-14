import React,{Component} from "react";
import "./../Styles/dashboard.css";
import {withRouter} from "react-router-dom";
import DashboardHome from "./DashboardHome/DashboardHome";



class Dashboard extends Component{

    render(){
        return(
            <div className="col-xs-12 no-horizantal dashboard-page">
                {/*<div className="col-xs-12 no-horizantal header">*/}
                    {/*<div className="">*/}
                        {/*<div className="logo">*/}
                            {/*<img src="/static/media/Ace-Accounting-logo.b253f337.png" alt="" className="img-responsive"/>*/}
                        {/*</div>*/}
                        {/*<div className="company-manager">*/}
                            {/*<DashboardHeader/>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}
                <div className="col-xs-12">
                    <div className="container">
                        {/*<div className="section-container">*/}
                        {/*</div>*/}
                        <div>
                            {this.props.match.isExact?
                                <DashboardHome history={this.props.history}/>
                                :null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)