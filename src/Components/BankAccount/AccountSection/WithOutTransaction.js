import React,{Component} from 'react';
import {Link} from "react-router-dom";


class WithOutTransaction extends Component{
    // constructor(props){
    //     super(props);
    //
    // }
    render(){
        return(
           <div className="transaction-data without-Transaction">
               <p>No transactions imported</p>
               <div className="clearfix"/>
               <Link to="/uhu/kjhh">import bank statement</Link>
           </div>
        )
    }
}

export default WithOutTransaction;