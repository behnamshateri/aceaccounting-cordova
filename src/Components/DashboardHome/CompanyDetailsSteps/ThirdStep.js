import React,{Component} from "react";
import Chip from '@material-ui/core/Chip';
import "./../../../Styles/CompanyDetailsStep.css";
import NumberFormat from 'react-number-format';
import ChangeBtn from "./ChangeBtn";

class ThirdStep extends Component{
    render(){
        return(
            <div className="col-xs-12">
                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Revenue / Expenses" className="chip" color="primary"/>
                    <br/>
                    <div className="col-xs-12 " >
                        <h3 className="company-detail-header">Choose your estimate Sales and Expense transactions:</h3>
                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">Sales Invoice (block of 20 item):</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={20} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center ">
                                    <ChangeBtn defaultvalue="1" inputName="sales-invoice" changeInput={true}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">Expense Invoice (block of 20 item):</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={35} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="1" inputName="expense-invoice" changeInput={true}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild" >
                            <div className="col-xs-4">
                                <p className="input-label">Receipt Scan Facility (person):</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={10} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center">
                                    <ChangeBtn defaultvalue="1" inputName="receipt-scan-facility" changeInput={true}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Payroll" className="chip" color="primary"/>
                    <br/>
                    <div className="col-xs-12 " >
                        <h3 className="company-detail-header">Select how many staff your company has employed:</h3>
                        <div className="col-xs-12 no-horizantal center-horizantal margin-bottom-feild">
                            <div className="col-xs-4">
                                <p className="input-label">Stuff:</p>
                            </div>
                            <div className="col-xs-8 ">
                                <div className="col-xs-6 no-horizantal text-center price-unit">
                                    <NumberFormat value={10} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <div className="col-xs-6 no-horizantal text-center ">
                                    <ChangeBtn defaultvalue="0" inputName="stuff" changeInput={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdStep;