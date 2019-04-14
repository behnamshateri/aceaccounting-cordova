import React,{Component} from "react";
import "../../Styles/Alert.css";
class ErrorAlert extends Component{
    render(){
        return(
            <div className="sa">
                <div className="sa-error">
                    <div className="sa-error-x">
                        <div className="sa-error-left"></div>
                        <div className="sa-error-right"></div>
                    </div>
                    <div className="sa-error-placeholder"></div>
                    <div className="sa-error-fix"></div>
                </div>
            </div>
        )
    }
}

export default ErrorAlert;
