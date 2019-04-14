import React, {Component} from 'react';
import {CardNumberElement ,CardExpiryElement ,CardCVCElement ,PostalCodeElement, injectStripe} from 'react-stripe-elements';
import "./../../../Styles/CompanyDetailsStep.css";
import Button from '@material-ui/core/Button';


class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    //async submit(ev) {
    //    console.log(ev)
        // let {token} = await this.props.stripe.createToken({name: "Name"});
        // let response = await fetch("/charge", {
        //     method: "POST",
        //     headers: {"Content-Type": "text/plain"},
        //     body: token.id
        // });
        //
        // if (response.ok) console.log("Purchase Complete!")
    //}


    handleBlur(){
        console.log('[blur]');
    };
    handleChange(change){
        console.log('[change]', change);
    };
    handleClick(){
        console.log('[click]');
    };
    handleFocus(){
        console.log('[focus]');
    };
    handleReady(){
        console.log('[ready]');
    };

    handleSubmit(ev){
        ev.preventDefault();
        if (this.props.stripe) {
            this.props.stripe
                .createSource({
                    type: "card",
                    amount: 12414234,
                    currency: 'eur',
                    // owner: {
                    //     name: ev.target.name.value,
                    // },
                    // redirect: {
                    //     return_url: 'http://localhost:3000/dashboard',
                    // },
                })
                .then((payload) => {
                    console.log('[source]', payload);
                    console.log(payload.error);
                    if(payload.error===undefined){
                        console.log("hi")
                    };

                });
        } else {
            console.log("Stripe.js hasn't loaded yet.");
        }
    };
    render() {
        return (
            <div className="checkout">
                <div className="col-xs-6">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        {/*<p>Would you like to complete the purchase?</p>*/}
                        {/*<AddressSection />*/}
                        {/*<CardElement />*/}
                        {/*<button onClick={this.submit}>Send</button>*/}
                        <div className="col-xs-12 no-horizantal payment-element">
                            <label>
                                Card number
                                <CardNumberElement
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.handleFocus.bind(this)}
                                    onReady={this.handleReady.bind(this)}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                        </div>

                        <div className="col-xs-12 no-horizantal payment-element">
                            <label>
                                Expiration date
                                <CardExpiryElement
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.handleFocus.bind(this)}
                                    onReady={this.handleReady.bind(this)}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                        </div>


                        <div className="col-xs-12 no-horizantal payment-element">
                            <label>
                                CVC
                                <CardCVCElement
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.handleFocus.bind(this)}
                                    onReady={this.handleReady.bind(this)}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                        </div>


                        <div className="col-xs-12 no-horizantal payment-element">
                            <label>
                                Postal code
                                <PostalCodeElement
                                    onBlur={this.handleBlur.bind(this)}
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.handleFocus.bind(this)}
                                    onReady={this.handleReady.bind(this)}
                                    {...createOptions(this.props.fontSize)}
                                />
                            </label>
                        </div>

                        <Button variant="contained" color="primary" className="payment-progress-btn" onClick={this.handleSubmit.bind(this)}>
                            Pay
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);



const createOptions = (fontSize, padding) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
                padding,
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};