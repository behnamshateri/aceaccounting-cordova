import React,{Component} from 'react';
import LineChart from "../../ShareComponent/LineChart";


class Transaction extends Component{
    // constructor(props){
    //     super(props);
    //
    // }
    render(){
        return(
            <div className="transaction-data">
                <LineChart />
            </div>

        )
    }
}

export default Transaction;