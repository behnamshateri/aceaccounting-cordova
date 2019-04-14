import React,{Component} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

class Banks extends Component{
   render(){
        return(
            <div>
                {this.props.index===0?
                    <span className="col-xs-12 results-count">{this.props.banksLength} Resaults</span>
                :
                    null
                }
                    <Link to={`/banking/add-account/${this.props.banks.Id}`}
                    >
                        <ListItem button component="button" name="selected-bank" value={this.props.banks.Id} >
                            <ListItemText primary={this.props.banks.BankName} className="each-bank-selected"/>
                        </ListItem>
                    </Link>
            </div>
        )
    }
}

export default Banks;


