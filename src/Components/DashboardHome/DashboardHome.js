import React,{Component} from "react";
import Button from '@material-ui/core/Button';
// import { createHashHistory } from 'history'


class DashboardHome extends Component{

    linkBtn(event){
        event.preventDefault();
        this.props.history.push('/organization-details');
    }


    render(){
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 no-horizantal btn-containe">
                    <h2>
                        Create profile
                    </h2>
                    <p>
                        We generally don’t give out your company information, but we are required to have it on file in case a consumer has a question or complaint.
                    </p>
                    <Button variant="contained" color="primary" className="submit-btn" onClick={this.linkBtn.bind(this)}>
                        Create a website profile
                    </Button>

                </div>


            </div>
        )
    }
}

export default DashboardHome;