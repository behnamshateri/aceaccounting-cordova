import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import Transaction from './Transaction';
import WithOutTransaction from './WithOutTransaction';
import "../../../Styles/AccountUpdate.css";

class AccountSection extends Component{
    constructor(props){
        super(props);
        this.state=({
            transactionData:[],
        });
    }
    render(){
        const {item}=this.props;
        // const {transactionData}=this.state;
        return(
            <div className="account">
                <div className="title">
                    <span className="image-span-bank">
                        {item.BankLogoUrl
                            ? <img src={item.BankLogoUrl} className='img-responsive' alt={item.BankName}/>
                            : <i className="fa fa-university" aria-hidden="true"></i>
                        }

                    </span>
                    <div className="section-title">
                        <p>{item.BankName}</p>
                        <p className="section-subtitle">{item.Country}</p>
                    </div>
                </div>
                <div className="account-content">
                    <div className="col-xs-3">
                        <div className="iban">
                        <span>
                            Account Number:
                        </span>
                            <span>
                            {item.AccountNumber}
                        </span>
                        </div>
                        {item.IBAN
                            ?
                            <div className="iban">
                            <span>
                                IBAN:
                            </span>
                                <span>
                                {item.IBAN}
                            </span>
                            </div>
                            :null
                        }

                        <div className="last-update">
                        <span>
                            Last Update:
                        </span>
                            <span>
                            <Moment format="YYYY/MM/DD">
                                {item.LastUpdate}
                            </Moment>
                        </span>
                        </div>
                    </div>

                    {/*transaction chart section*/}
                    <div className="col-xs-9 transaction-chart">
                        {true
                            ? <Transaction/>
                            : <WithOutTransaction/>
                        }
                    </div>

                </div>
                <div className="existance">
                    <div className="amount">
                        {item.XeroBalance===item.StatementBalance && item.StatementBalance===item.XeroBalanceStatement && item.XeroBalanceStatement !=null
                            ? null
                            : item.XeroBalance===item.StatementBalance
                                ? (
                                    <div>
                                        <span>
                                            Bank Statement Balance:
                                        </span>
                                        {item.XeroBalance ? item.XeroBalance : '--'} - {item.CurrencyCode} {item.CurrencySymbol ? `(${item.CurrencySymbol})` : null}
                                    </div>
                                )
                                : (     <div>
                                        <div>
                                            <span>
                                                Xero Balance:
                                            </span>
                                            {item.XeroBalance ? item.XeroBalance : '--'} - {item.CurrencyCode} {item.CurrencySymbol ? `(${item.CurrencySymbol})` : null}
                                        </div>
                                        <div>
                                            <span>
                                                Xero Statement Balance:
                                            </span>
                                            {item.XeroBalance ? item.XeroBalance : '--'} - {item.CurrencyCode} {item.CurrencySymbol ? `(${item.CurrencySymbol})` : null}
                                        </div>
                                    </div>

                                )

                        }
                        <div>
                            <span>
                                Account Balance:
                            </span>
                            {item.StatementBalance ? item.StatementBalance : '--'} - {item.CurrencyCode} {item.CurrencySymbol ? `(${item.CurrencySymbol})` : null}

                            {item.XeroBalance === item.StatementBalance && item.StatementBalance === item.XeroBalanceStatement && item.XeroBalanceStatement != null
                                ? <span className="balance-account">
                                    <i className="fa fa-check-circle-o"></i>
                                  </span>
                                : null
                            }
                        </div>

                    </div>
                    <div className="refresh">
                        <Link to={"/banking/"+ item.CountryIso2.toLowerCase() +"/"+ item.BankSlug.toLowerCase() }>
                            <Button variant="contained">Update Statement<i className="fa fa-chevron-right" aria-hidden="true"></i></Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountSection;