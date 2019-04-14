import React,{Component} from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

class InnerSearch extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedValue:"Invoices",
            within:"with in",
            name:"",
            selectedValueUnset:false,
            isInvoices:true,
        }
    }


    handleChange(event){
        this.setState({ selectedValue: event.target.value });
        if(event.target.value==="Quotes") {
            this.setState({isInvoices: false});
        }else{
            this.setState(
                {isInvoices: true}
                );
        }
    };

    handleChangeSelect(event){
        this.setState({ within: event.target.value });
    }

    handleChangeunsent(event){
        this.setState({ selectedValueUnset: !this.state.selectedValueUnset });
    }
    render(){
        return(
            <form className="inner-search " noValidate>
                <div className="col-xs-12 no-horizantal">
                    <span>Search: </span>
                    <FormControlLabel
                        className="label-search-type"
                        control={
                            <Radio
                                checked={this.state.selectedValue === 'Invoices'}
                                onChange={this.handleChange.bind(this)}
                                value="Invoices"
                                name="search-type"
                                color="default"
                                aria-label="A"
                            />
                        }
                        label="Invoices"
                    />
                    <FormControlLabel
                        className="label-search-type"
                        control={
                            <Radio
                                checked={this.state.selectedValue === 'Quotes'}
                                onChange={this.handleChange.bind(this)}
                                value="Quotes"
                                name="search-type"
                                color="default"
                                aria-label="A"

                            />
                        }
                    label="Quotes"
                    />
                </div>
                <div className="col-xs-12">

                    <TextField
                        id="standard-name"
                        label="search for ..."
                        placeholder="Number, Reference, Customer"
                        className="search-for search-input-invoice"
                    />

                    <FormControl className="select-within search-input-invoice">

                        <InputLabel htmlFor="within">With in</InputLabel>
                        <Select
                            native
                            value={this.state.within}
                            onChange={this.handleChangeSelect.bind(this)}
                            inputProps={{
                                name: 'within',
                                id: 'within',
                            }}
                        >
                            <option value="" />
                            <option value='any-date'>Any Date</option>
                            <option value="date-created">Date Created</option>
                            <option value="expiry-date">Expiry Date</option>
                        </Select>
                    </FormControl>

                    <TextField
                        id="start-date"
                        label="Start"
                        type="date"
                        defaultValue="2018-05-24"
                        className="search-date search-input-invoice"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="end-date"
                        label="End"
                        type="date"
                        defaultValue="2018-05-24"
                        className="search-date search-input-invoice"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {this.state.isInvoices?
                        <FormControlLabel
                            className="label-search-type"
                            control={

                                <Checkbox
                                    name="ussnsent-only"
                                    checked={this.state.selectedValueUnset}
                                    onChange={this.handleChangeunsent.bind(this)}
                                    value="unsent-only"
                                />
                            }
                            label="Invoices"
                        />
                    :
                    null}


                    <Button variant="contained" color="primary" className="right submit-search-form">
                        Search
                    </Button>



                </div>
            </form>
        )
    }
}

export default InnerSearch;