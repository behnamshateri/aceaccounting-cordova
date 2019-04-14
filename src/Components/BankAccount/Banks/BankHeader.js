import React,{Component} from "react";
import PropTypes from "prop-types";


class BankHeader extends Component{
    render(){
        return(
            <div className="col-xs-12 bank-dark-header">
                <div className="container">
                    <div className="header-container inline-row-flex-space">
                        <span>
                            Connect with {this.props.bankName} bank
                        </span>
                        <span className="bank-image">
                            <img src={this.props.bankImageUrl} className="img-responsive" alt="{this.props.bankName}"/>
                        </span>

                    </div>
                </div>
            </div>

        )
    }
}
BankHeader.propTypes={
    bankName:PropTypes.string.isRequired,
    bankImageUrl:PropTypes.string.isRequired,
};

export default BankHeader;

