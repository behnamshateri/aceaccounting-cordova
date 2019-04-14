import React,{Component} from "react";
import NavItem from "../NavItem";
import ReactTooltip from "react-tooltip";

class DashboardItems extends Component{
    render() {
        return (
            <ul>
                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/dashboards"}}
                >
                    <div className="each-section" data-tip data-for='tooltip1'>
                        {/*<Link to="/dashboard">*/}
                        <span className="img-text">
                                <span className="image-span image-0"></span>
                                <div className="section-title">
                                    <p>Dashboard</p>
                                </div>
                            </span>
                    </div>
                </NavItem>
                <ReactTooltip place="bottom" id='tooltip1' type="dark" effect="solid">Home</ReactTooltip>

                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/sales"}}
                >
                    <div className="each-section" data-tip data-for='tooltip2'>
                            <span className="img-text">
                                <span className="image-span image-1"></span>
                                <div className="section-title">
                                    <p>Sales Invoice</p>
                                </div>
                            </span>
                    </div>
                </NavItem>
                <ReactTooltip place="bottom" id='tooltip2' type="dark" effect="solid">List and create sales invoice</ReactTooltip>


                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/bills"}}
                >
                    <div className="each-section" data-tip data-for='tooltip3'>
                            <span className="img-text">
                                <span className="image-span image-2"></span>
                                <div className="section-title">
                                    <p>Bill</p>
                                </div>
                            </span>
                    </div>
                </NavItem>

                <ReactTooltip place="bottom" id='tooltip3' type="dark" effect="solid">List and pay bills</ReactTooltip>


                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/bank-accounts"}}
                >
                    <div className="each-section" data-tip data-for='tooltip4'>
                            <span className="img-text">
                                <span className="image-span image-3"></span>
                                <div className="section-title">
                                    <p>Bank Account</p>
                                </div>
                            </span>
                    </div>
                </NavItem>
                <ReactTooltip place="bottom" id='tooltip4' type="dark" effect="solid">Bank Statement updates</ReactTooltip>


                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/human-resources"}}
                >
                    <div className="each-section" data-tip data-for='tooltip5'>
                            <span className="img-text">
                                <span className="image-span image-4"></span>
                                <div className="section-title">
                                    <p>Human Resource</p>
                                </div>
                            </span>
                    </div>
                </NavItem>
                <ReactTooltip place="bottom" id='tooltip5' type="dark" effect="solid">Payroll, annual leave and salary slip</ReactTooltip>

                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/leave-form"}}
                >
                    <div className="each-section" data-tip data-for='tooltip6'>
                            <span className="img-text">
                                <span className="image-span image-5"></span>
                                <div className="section-title">
                                    <p>Leave Form</p>
                                </div>
                            </span>
                    </div>
                </NavItem>
                <ReactTooltip place="bottom" id='tooltip6' type="dark" effect="solid">Request and Manage for leave</ReactTooltip>

                <NavItem
                    activeClassName="selected"
                    activeOnlyWhenExact={true}
                    to={{pathname:"/documents"}}
                >
                    <div className="each-section" data-tip data-for='tooltip7'>
                            <span className="img-text">
                                <span className="image-span image-6"></span>
                                <div className="section-title">
                                    <p>Documents</p>
                                </div>
                            </span>
                    </div>
                </NavItem>
                <ReactTooltip place="bottom" id='tooltip7' type="dark" effect="solid">Manage Orgnization Documents</ReactTooltip>

            </ul>
        )
    }
}

export default DashboardItems;