import React,{Component} from "react";
import "../../Styles/Alert.css";
class SuccussAlert extends Component{
    render(){
        return(
            <div className="sa">
                <div className="sa-success">
                    <div className="sa-success-tip"></div>
                    <div className="sa-success-long"></div>
                    <div className="sa-success-placeholder"></div>
                    <div className="sa-success-fix"></div>
                </div>
            </div>
        )
    }
}

export default SuccussAlert;
