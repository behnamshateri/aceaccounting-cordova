import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

class NextAndBackBtn extends Component{
    render(){
        // console(this.props)
        return(
            <div className="col-xs-12  ">
                <Link to={this.props.back}>
                    <Button variant="contained" >
                        back
                    </Button>
                </Link>
                <Link to={"/a"}>
                    <Button variant="contained"  color="primary">
                        save
                    </Button>
                </Link>
            </div>
        )
    }
}

export default NextAndBackBtn;