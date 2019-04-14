import React,{Component} from "react";
import "../../Styles/Alert.css";
class WarningAlert extends Component{
    render(){
        return(
            <div className="sa">
                <div className="sa-warning">
                    <div className="sa-warning-body"></div>
                    <div className="sa-warning-dot"></div>
                </div>
            </div>
        )
    }
}

export default WarningAlert;