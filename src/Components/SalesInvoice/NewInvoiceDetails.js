import React,{Component} from "react";
import TextField from '@material-ui/core/TextField';
import "./../../Styles/NewInvoiceDetails.css";


class NewInvoiceDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            branding:"Standard",
        }
    }


    handleChange(){

    }

    handleChangeBranding(event){
        this.setState({ branding: event.target.value });
    }
    render(){

        const brandings = [
            {
                value: 'standard',
                label: 'Standard',
            },
            {
                value: 'special',
                label: 'Special Projects',
            },
            {
                value: 'orange-invoice',
                label: 'Very orange invoice!',
            }
        ];

        return(
            <div className="col-xs-12 no-horizantal invoice-detail-new-container">
                <TextField
                    id="invoice-to"
                    label="to"
                    className="invoice-input"
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    className="invoice-input date-input-invoice"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="due-date"
                    label="Due Date"
                    type="date"
                    defaultValue="2017-05-24"
                    className="invoice-input date-input-invoice"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="invoice-id"
                    label="Invoice #"
                    className="invoice-input id-input-invoice"
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="invoice-reference"
                    label="Invoice reference"
                    className="invoice-input ref-input-invoice"
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="invoice-branding"
                    select
                    label="Branding"
                    className="invoice-input"
                    value={this.state.branding}
                    onChange={this.handleChangeBranding.bind(this)}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: "a",
                        },
                    }}
                    // helperText="select currency"
                    margin="normal"
                    variant="outlined"
                >
                    {brandings.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </div>
        )
    }
}

export default NewInvoiceDetails;