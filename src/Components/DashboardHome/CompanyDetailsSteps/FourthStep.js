import React,{Component} from "react";
import Chip from '@material-ui/core/Chip';
import "./../../../Styles/CompanyDetailsStep.css";
import NumberFormat from 'react-number-format';
import ChangeBtn from "./ChangeBtn";

class FourthStep extends Component{
    render(){
        return(
            <div className="col-xs-12">
                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Included Items" className="chip" color="primary"/>
                    <br/>
                    <div className="col-xs-12 " >
                        <h3 className="company-detail-header">Select Included Items:</h3>
                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">Xero Account Subscription:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={30} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center ">
                                    <ChangeBtn defaultvalue="1" inputName="xero-account" changeInput={false}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">VAT Filings (quarterly):</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="1" inputName="vat-filings" changeInput={false}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild" >
                            <div className="col-xs-4">
                                <p className="input-label">Annual Corporate Income Tax:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="1" inputName="annual-tax" changeInput={false}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild" >
                            <div className="col-xs-4">
                                <p className="input-label">Annual Reports:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="1" inputName="annual-reports" changeInput={false}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default FourthStep;