import React , {Component} from "react";
import {Trans, withNamespaces} from "react-i18next";
import "./../../Styles/Footer.css";
import LanguageSelect from "./LanguageSelect";

class Footer extends Component{
    render() {
        return (
            <div className="col-xs-12 no-horizantal footer">
                <div className="container ">
                    <div className="col-xs-12 no-horizantal footer-container">
                        {/*<div className="col-xs-9">*/}

                        {/*</div>*/}
                        <div className="col-xs-12">
                            <p className="col-xs-12 no-horizantal">
                                <Trans i18nKey="footer.change-language">
                                    Change language:
                                </Trans>
                            </p>
                            <LanguageSelect/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 no-horizantal copyright-section text-center">
                    <p>
                        © 2016

                        <Trans i18nKey="footer.copyright">
                            Copyright:
                        </Trans>
                        <span> Ace Accounting - Xero Online Boekhouden </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default  withNamespaces('translation')(Footer);