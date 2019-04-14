import React,{Component} from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';
import "./../../../Styles/CompanyDetailsStep.css";

class FifthStep extends Component{
    constructor(props){
        super(props)
        this.state=({
            value:0,
        })
    }

    handleChange(event, value){
        this.setState({ value });
    };

    render(){
        return(

            <div className="col-xs-12">
                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Revenue / Expenses" className="chip" color="primary"/>
                    <br/>
                    <div className="col-xs-12 " >
                        <h3 className="company-detail-header">Choose desired book keeping timeline:</h3>
                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild text-center">
                            <Paper square className="timeline-container">
                                <Tabs
                                    value={this.state.value}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    onChange={this.handleChange.bind(this)}
                                >
                                    <Tab label="Quarterly" className="each-timeline"/>
                                    <Tab label="Monthly" className="each-timeline"/>
                                    <Tab label="Weekly" className="each-timeline"/>
                                    <Tab label="Daily" className="each-timeline"/>
                                </Tabs>
                            </Paper>

                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default FifthStep;