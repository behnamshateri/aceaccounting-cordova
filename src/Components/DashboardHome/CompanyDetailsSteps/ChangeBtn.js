import React,{Component} from "react";
// import Button from '@material-ui/core/Button';

class ChangeBtn extends Component{
    constructor(props){
        super(props);
        this.state=({
            inputValue:this.props.defaultvalue,
            inputDisabled: false
        })
    }


    changeinput(event){
        switch(event.target.getAttribute("data-roll")){
            case "decrease":
                // console.log(this.state.inputValue);
                if(this.state.inputValue<=1){
                    this.setState({
                        inputDisabled: true
                    })
                }
                if(this.state.inputValue>=1){
                    this.setState({
                        inputValue: parseInt(this.state.inputValue, 10) - 1,
                    });
                }

                break;
            case "increase":
                this.setState({
                    inputValue: parseInt(this.state.inputValue , 10) + 1,
                    inputDisabled: false
                });
                break;
            default:
                this.setState({
                    inputValue: parseInt(this.state.inputValue ,10)
                })
        }
    }
    render(){
        return(
            <div className="col-xs-12 text-center">
                {this.props.changeInput ?
                        <span
                            onClick={this.changeinput.bind(this)}
                            data-roll="decrease"
                            className={this.state.inputDisabled ? "cant-clicked change-input-btn" : "change-input-btn"}
                        >
                            -
                        </span>
                :null}

                <input name={this.props.inputName} type="number" defaultValue={this.state.inputValue} className="hidden"/>
                <span className="input-simulator">{this.state.inputValue}</span>

                {this.props.changeInput ?
                    <span onClick={this.changeinput.bind(this)} data-roll="increase" className="change-input-btn">+</span>
                :null}

            </div>
        )
    }
}

export default ChangeBtn;