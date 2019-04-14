import React,{Component} from "react";
import Chip from '@material-ui/core/Chip';
import "./../../../Styles/CompanyDetailsStep.css";
import NumberFormat from 'react-number-format';
import ChangeBtn from "./ChangeBtn";



class SecondStep extends Component{
    render(){
        return(
            <div className="col-xs-12">
                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Company Information" className="chip" color="primary"/>
                    <br/>
                    <div className="col-xs-12 " >
                        <h3 className="company-detail-header">Choose number of your bank accounts:</h3>
                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">Current Account:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={10} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center ">
                                    <ChangeBtn defaultvalue="1" inputName="current-account" changeInput={true}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">Saving Account:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={10} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="0" inputName="saving-account" changeInput={true}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild" >
                            <div className="col-xs-4">
                                <p className="input-label">Credit Card:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={10} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="1" inputName="credit-card" changeInput={true}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default SecondStep;