import React,{Component} from "react";
import Chip from '@material-ui/core/Chip';
import "./../../../Styles/CompanyDetailsStep.css";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import validator from 'validator';
// import Slider from '@material-ui/lab/Slider';
import Slider from '@material-ui/lab/Slider';

class FirstStep extends Component{
    constructor(props){
        super(props);
        this.state=({
            SliderValue: 200,
            minSlider:150,
            maxSlider:500,
            fields: {
                companyname: "",
                kvknumber: "",
            },
            errors: {}
        })
    }

    handleInputChange(event){
        let fields = this.state.fields;
        let errors = {};
        switch(event.target.name) {
            case "kvknumber":
                if (validator.isNumeric(event.target.value)) {
                    fields[event.target.name] = event.target.value;
                    errors["kvknumber"] = "";
                    break;
                }else if(validator.isEmpty(event.target.value)) {
                    fields[event.target.name] = event.target.value;
                    errors["kvknumber"] = "KVK number cant be empty.";
                    break;
                }else{
                    errors["kvknumber"] = "KVK number must be digit.";
                    break;
                }
            case "companyname":
                if (validator.isEmpty(event.target.value)) {
                    fields[event.target.name] = event.target.value;
                    errors["companyname"] = "Company name cant be empty.";
                    break;
                }else{
                    fields[event.target.name] = event.target.value;
                    errors["companyname"] = "";
                    break;
                }
            default:
                break;
        }
        this.setState({ fields, errors })
    }

    handleChange(event, value){
        this.setState({ SliderValue:value });
    };


    render(){
        const {fields, errors}=this.state;
        return(
            <div className="col-xs-12 ">
                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Company Information" className="chip" color="primary"/>
                    <br/>
                    <div className="col-xs-12 " >
                        <h3 className="company-detail-header">Type your company name and registrations:</h3>
                        <div className="col-xs-12 no-horizantal center-horizantal">
                            <div className="col-xs-4">
                                <p className="input-label">Company Name:</p>
                            </div>
                            <div className="col-xs-8">
                                <TextField
                                    label="Company Name"
                                    margin="normal"
                                    variant="outlined"
                                    name="companyname"
                                    value={fields.companyname}
                                    onChange={this.handleInputChange.bind(this)}
                                    fullWidth
                                    className="company-detail-input"
                                />
                                <br/>

                            </div>
                        </div>

                        {errors["companyname"]?
                            <div className="col-xs-12 no-horizantal">
                                <div className="col-xs-4">
                                </div>
                                <div className="col-xs-8">
                                    <span className="input-errors">{errors["companyname"]}</span>
                                </div>
                            </div>
                            :
                            null
                        }


                        <div className="col-xs-12 no-horizantal center-horizantal">
                            <div className="col-xs-4">
                                <p className="input-label">KVK Number:</p>
                            </div>
                            <div className="col-xs-8">
                                <TextField
                                    label="KVK Number"
                                    margin="normal"
                                    variant="outlined"
                                    name="kvknumber"
                                    value={fields.kvknumber}
                                    onChange={this.handleInputChange.bind(this)}
                                    fullWidth
                                    className="company-detail-input"
                                    // InputProps={{
                                    //     inputComponent: NumberFormatCustom,
                                    // }}
                                />

                            </div>
                        </div>

                        {errors["kvknumber"]?
                            <div className="col-xs-12 no-horizantal">
                                <div className="col-xs-4">
                                </div>
                                <div className="col-xs-8">
                                    <span className="input-errors">{errors["kvknumber"]}</span>
                                </div>
                            </div>
                            :
                            null
                        }

                    </div>

                </div>
                <hr className="col-xs-12"/>
                <div className="col-xs-12 no-horizantal company-details-each-section">
                    <Chip label="Company Revenue" className="chip" color="primary"/>
                    <br/>

                    <div className="col-xs-12 no-horizantal">
                        <h3 className="company-detail-header">Choose your company estimate annual revenue:</h3>
                        <div className="col-xs-4">
                            <p className="input-label">Estimate Annual Revenue:</p>
                        </div>
                        <div className="col-xs-8">
                            <div className="col-xs-12 no-horizantal ">

                                <Slider
                                    classes={{ root:"slider-dashboard",container: "slider-container-dashboard" }}
                                    value={this.state.SliderValue}
                                    min={this.state.minSlider}
                                    max={this.state.maxSlider}
                                    step={50}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <div className="col-xs-12 inline-row-flex-space no-horizantal">
                                    <span className="slider-range slider-min">Min</span>
                                    <span  className="slider-range slider-max">Max</span>
                                </div>
                                <div className="col-xs-12 text-center annual-revenue-resault">
                                    <span>Estimate Annual Revenue Is:</span>
                                    <span>
                                        <NumberFormat value={this.state.SliderValue} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <hr/>

            </div>
        )
    }
}

export default FirstStep;


function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },

                });
            }}
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};