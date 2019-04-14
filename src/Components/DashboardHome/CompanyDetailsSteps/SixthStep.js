import React,{Component} from "react";
import "./../../../Styles/CompanyDetailsStep.css";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class SixthStep extends Component{


    //async submit(ev) {
    //    // User clicked submit
    //}


    render(){
        return(
            <div className="col-xs-12">
                <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                    <div className="example">
                        <h3 className="company-detail-header">Package Payment</h3>
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </StripeProvider>
            </div>
        )
    }
}

export default SixthStep;