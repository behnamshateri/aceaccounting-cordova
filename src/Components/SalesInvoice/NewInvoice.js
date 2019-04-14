import React,{Component} from "react";
import "./../../Styles/NewInvoice.css";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NewInvoiceTable from "./NewInvoiceTable";
import NewInvoiceDetails from "./NewInvoiceDetails";


class NewInvoice extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
            anchorElSave: null,
            anchorElApprove: null,
        }
    }

    handleOpenSave(event){
        this.setState({
            isOpen : !this.state.isOpen,
            anchorElSave: event.currentTarget
        })
    }
    handleOpenApprove(event){
        this.setState({
            isOpen : !this.state.isOpen,
            anchorElApprove: event.currentTarget
        })
    }

    handleCloseSave(){
        this.setState({ anchorElSave: null });
    };
    handleCloseApprove(){
        this.setState({ anchorElApprove: null });
    };
    render(){
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="container">
                    <div className="invoice-container col-xs-12 no-horizantal">
                        <div className="col-xs-12 invoicing-details">
                            <NewInvoiceDetails/>
                        </div>
                        <div className="col-xs-12 lineItems">
                            <NewInvoiceTable/>
                        </div>
                        <div className="col-xs-12 invoice-footer">
                            <div>
                                <Button variant="contained" color="primary" className="new-invoice btn-new-invoice header-btn" >
                                    Save
                                    <i className="fa fa-caret-down" aria-hidden="true" onClick={this.handleOpenSave.bind(this)}></i>
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={this.state.anchorElSave}
                                    open={Boolean(this.state.anchorElSave)}
                                    onClose={this.handleCloseSave.bind(this)}
                                >
                                    <MenuItem onClick={this.handleCloseSave.bind(this)}><Link to="/new-invoice">Save as draft</Link></MenuItem>
                                    <MenuItem onClick={this.handleCloseSave.bind(this)}>Save and continue editing</MenuItem>
                                    <MenuItem onClick={this.handleCloseSave.bind(this)}>Save and submit for approval</MenuItem>
                                    <MenuItem onClick={this.handleCloseSave.bind(this)}>Save and add another</MenuItem>
                                </Menu>
                            </div>
                            <div>
                                <Button variant="contained" color="primary" className="new-invoice btn-new-invoice header-btn approve-invoice-btn" >
                                    Approve
                                    <i className="fa fa-caret-down" aria-hidden="true" onClick={this.handleOpenApprove.bind(this)}></i>
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={this.state.anchorElApprove}
                                    open={Boolean(this.state.anchorElApprove)}
                                    onClose={this.handleCloseApprove.bind(this)}
                                >
                                    <MenuItem onClick={this.handleCloseApprove.bind(this)}><Link to="/new-invoice">Approve</Link></MenuItem>
                                    <MenuItem onClick={this.handleCloseApprove.bind(this)}>Approve and add another</MenuItem>
                                    <MenuItem onClick={this.handleCloseApprove.bind(this)}>Approve and view next</MenuItem>
                                    <MenuItem onClick={this.handleCloseApprove.bind(this)}>Approve and print</MenuItem>
                                </Menu>

                                <Link to={"/sales"}>
                                    <Button variant="contained" className="btn-new-invoice" >
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>d
            </div>
        )
    }
}

export default NewInvoice;