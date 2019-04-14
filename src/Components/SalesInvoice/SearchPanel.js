import React,{Component} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import "./../../Styles/searchincoice.css";
import Button from '@material-ui/core/Button';
import InnerSearch from "./InnerSearch";


class SearchPanel extends Component{
    render(){
        return(
            <div className="col-xs-12 no-horizantal search-container-invoice">
                <ExpansionPanel className="modal-search">
                    <ExpansionPanelSummary className="modal-header">
                        <Button aria-label="Delete" color="primary" className="search-btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            search
                        </Button>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="search-content">
                        <InnerSearch />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default SearchPanel;