import React,{Component} from "react";
import {Link} from "react-router-dom";
import InvoiceType from "./InvoiceType";
import "./../../Styles/invoice.css";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchPanel from "./SearchPanel";

class Invoice extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
            anchorEl: null,
        }
    }


    handleOpen(event){
        this.setState({
            isOpen : !this.state.isOpen,
            anchorEl: event.currentTarget
        })
    }

    handleClose(){
        this.setState({ anchorEl: null });
    };

    render(){
        return(
            <div className="col-xs-12 invoive-page">
                <div className="container">
                    <div className=" no-horizantal invoice-header dashboard-pages-header">
                        <Button variant="contained" className="new-invoice btn-invoice header-btn" onClick={this.handleOpen.bind(this)}>
                            new
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose.bind(this)}
                        >
                            <MenuItem onClick={this.handleClose.bind(this)}><Link to="/new-invoice">Invoice</Link></MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)}><Link to="#">Qoute</Link></MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)}><Link to="#">Repeating Invoice</Link></MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)}><Link to="#">Credit note</Link></MenuItem>
                        </Menu>

                        <Button variant="contained" className="new-invoice btn-invoice header-btn" >
                            Send Statement
                        </Button>

                        <Button variant="contained" className="new-invoice btn-invoice header-btn" >
                            Import
                        </Button>

                        <SearchPanel/>
                    </div>

                    <div className="searchPanel col-xs-12 no-horizantal">

                    </div>

                    <div className="col-xs-12 no-horizantal inline-row-flex invoice-type-select border-top" >
                        <span>
                            Invoice
                        </span>
                        <span>
                            <Link to="">
                                 Paid
                            </Link>

                        </span>
                        <span>
                            <Link to="">
                                 Repeating
                            </Link>

                        </span>
                        <span>
                            <Link to="">
                                 Import
                            </Link>
                        </span>
                    </div>
                    <div className="col-xs-12  no-horizantal">
                        <InvoiceType/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invoice;