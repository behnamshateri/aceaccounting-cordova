import React , {Component} from "react";
import bankImage from "../../../../Images/bank-logo/bunq-bank.png";
import bunq from "../../../../Images/bank-logo/bunq-btn.png";
import "../../../../Styles/Bank/abn-bank.css";
import "../../../../Styles/Bank/bunq-bank.css";
import dotnetify from "dotnetify";



class Bunq extends Component{
    constructor(props) {
        super(props);
        this.state=({
            Test:'',
        });
        this.vm = dotnetify.react.connect('Bunq', this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.vm.$dispatch({
            UpdateBunq: {
                account: 4535345,
            }
        });

    }


    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        console.log(this.state.Test, "test");
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 abn-body">
                    <div className="container">
                        <div className="main-body-abn col-xs-10 col-xs-offset-1">
                            <form action="">
                                <div id="header" className="text-center">
                                    <div className="abn-header text-center">
                                        <img src={bankImage} className="img-responsive" alt="ing Bank"/>
                                    </div>
                                </div>
                                <div className="col-xs-12 abn-body-container">
                                    <div className="col-xs-12 form-container text-center">
                                        <button className="connect-to-bunq-btn" onClick={this.handleSubmit.bind(this)}>
                                            <img src={bunq} className="img-responsive" alt="bunq Bank"/>
                                            <span>Connect to bunq</span>
                                        </button>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bunq;