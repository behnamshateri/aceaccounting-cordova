import React,{Component} from "react";
import "./../../Styles/NewInvoiceTabel.css";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from "@atlaskit/select/dist/esm/Select";




class NewInvoiceTable extends Component{

    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            anchorEl: null,
            tax:0,
            subtotal:0,
            total:0,
            taxType:"Tax Inclusive",
            currency:"USD",
            DialogOpen:false,
            currencies:[
                {
                    value: 'USD',label: 'USD Usa Dollar'
                }
            ],
            selectedcurrency:{},
            validDialog:false,
            error:<span className='error-input'>Please select a currency</span>,
        };

        this.myRef = React.createRef();
    }



    handleChangeTax(event){
        this.setState({ tax: event.target.value });
    }
    handleChangeCurrency(event){
        if(event.target.value === "add-currency"){
            this.setState({ DialogOpen: true });
        }else{
            this.setState({ currency: event.target.value });
        }

    }





    handleOpen(event){
        this.setState({
            isOpen : !this.state.isOpen,
            anchorEl: event.currentTarget
        })
    }


    handleClose(event){
        // var node = document.createElement("tr");
        // this.myRef.appendChild(node);
        console.log(event.target.getAttribute("data-add"))
        console.log(this.myRef.innerHTML)
        this.setState({ anchorEl: null });
    };

    addALine(){
        console.log(this.myRef.current);
        console.log(this.myRef);
        var node = document.createElement("tr");
        node.innerHTML="<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class='remove-row' onClick={this.RemoveRow}></td>";
        this.myRef.current.appendChild(node);
    }


    RemoveRow(event){
        console.log(event);
        event.target.parentNode.remove();
    }

    selectedCurrency(event){
        this.setState({
            selectedCurrency: event,
            validDialog:false,
            error:null,
        });
    }

    handleCloseDialog(){
        this.setState({
            DialogOpen: false,
            validDialog:false,
            error:<span className='error-input'>Please select a currency</span>,
        });
    }




    submitDialog(){
        if(!this.state.validDialog && this.state.error==null){
            var isInArray=false;
            var selected=this.state.selectedCurrency;
            this.state.currencies.forEach(function (value) {
                if(JSON.stringify(value) === JSON.stringify(selected)){
                    isInArray=true;
                }
            });

            if(isInArray){
                // console.log("fsfsgdgf")
            }else{
                this.state.currencies.push(this.state.selectedCurrency);
            }
            this.setState({
                DialogOpen: false,
                currency: this.state.selectedCurrency.value,
                validDialog:false,
                error:<span className='error-input'>Please select a currency</span>,
            });

        }else{
            this.setState({
                validDialog:true,
            })
        }
    }





    render(){
        const taxs = [
            {
                value: 'inclusive',
                label: 'Tax Inclusive',
            },{
                value: 'exclusive',
                label: 'Tax Exclusive',
            },
            {
                value: 'no-tax',
                label: 'No Tax',
            }
        ];

        return(
            <div className="col-xs-12 no-horizantal">
                <div className="col-xs-12 header-table-input no-horizantal">
                    {/*select currency*/}
                    <TextField
                        id="selected-curency"
                        select
                        label="Select"
                        className="invoice-input invoice-input-currency"
                        value={this.state.currency}
                        onChange={this.handleChangeCurrency.bind(this)}
                        SelectProps={{
                            MenuProps: {
                                className: "b",
                                id:"currency-menu"
                            },
                        }}
                        margin="normal"
                        variant="outlined"
                    >
                        {this.state.currencies.map(option => (
                            <MenuItem key={option.value} value={option.value} >
                                {option.label}
                            </MenuItem>
                        ))}

                        <MenuItem key="add-currency" value="add-currency" >
                            + Add Currency ...
                        </MenuItem>
                    </TextField>

                    {/*Dialog to add curreny*/}
                    <Dialog
                        open={this.state.DialogOpen}
                        onClose={this.handleCloseDialog.bind(this)}
                        aria-labelledby="form-dialog-title"
                        className="dailog-for-currency"
                    >
                        <DialogTitle id="form-dialog-title" className="daialog-title">Add Currency</DialogTitle>
                        <DialogContent>

                            <hr/>
                            <DialogContentText className="dialog-text">
                                Select a currency
                            </DialogContentText>
                            {/*<TextField*/}
                                {/*autoFocus*/}
                                {/*margin="dense"*/}
                                {/*id="name"*/}
                                {/*label="Email Address"*/}
                                {/*type="email"*/}
                                {/*fullWidth*/}
                            {/*/>*/}

                            <Select
                                className="select-other-currency"
                                classNamePrefix="react-select"
                                onChange={this.selectedCurrency.bind(this)}
                                options={[
                                    { label: 'Rial Iran', value: 'Rial' },
                                    { label: 'CAD canadian dollor', value: 'CAD' },
                                    { label: 'GBP British Pund', value: 'GBP' },
                                    { label: 'Darwin', value: 'darwin' },
                                    { label: 'Hobart', value: 'hobart' },
                                    { label: 'Melbourne', value: 'melbourne' },
                                    { label: 'Perth', value: 'perth' },
                                    { label: 'Sydney', value: 'sydney' },
                                ]}
                                placeholder="Choose a Currency"
                            />
                            {/*<span className="error-input">Please select a currency</span>*/}
                            {/*{this.state.error}*/}
                            {this.state.validDialog ?
                                this.state.error
                                :
                                null
                            }
                            <hr/>

                        </DialogContent>
                        <DialogActions
                            className="dialog-btn"
                        >
                            <Button onClick={this.handleCloseDialog.bind(this)} variant="outlined" color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.submitDialog.bind(this)}>
                                Subscribe
                            </Button>
                        </DialogActions>
                    </Dialog>



                    <TextField
                        id="invoice-branding"
                        select
                        label="Amounts are"
                        className="invoice-input"
                        value={this.state.tax}
                        onChange={this.handleChangeTax.bind(this)}
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
                        {taxs.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Disc %</th>
                            <th>Account</th>
                            <th>Tax Rate</th>
                            <th>Region</th>
                            <th>SalesType</th>
                            <th>Amount USD</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody ref={this.myRef}>
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                            </td>
                            <td className="remove-row" onClick={this.RemoveRow.bind(this)}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="remove-row" onClick={this.RemoveRow.bind(this)}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="remove-row" onClick={this.RemoveRow.bind(this)}></td>
                        </tr>
                    </tbody>
                </table>


                <div className="col-xs-12 no-horizantal tabel-footer">
                    <div>
                        <Button variant="contained" color="primary" className="new-invoice btn-new-invoice header-btn" onClick={this.addALine.bind(this)}>
                            Add a New Line
                            <i className="fa fa-caret-down" aria-hidden="true" onClick={this.handleOpen.bind(this)}></i>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose.bind(this)}
                        >
                            <MenuItem onClick={this.handleClose.bind(this)} data-add="2">Add 2</MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)} data-add="4">Add 4</MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)} data-add="6">Add 6</MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)} data-add="8">Add 8</MenuItem>
                        </Menu>
                    </div>
                    <div className="col-xs-4 price-section">
                        <div className="col-xs-12 no-horizantal subtotal-invoice">
                            <div className="col-xs-6 no-horizantal text-right">
                                SubTotal
                            </div>
                            <div className="col-xs-6 no-horizantal text-right">
                                <NumberFormat value={this.state.subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </div>
                        </div>
                        <div className="col-xs-12 no-horizantal tax-invoice">
                            <div className="col-xs-6 no-horizantal text-right">
                                Tax
                            </div>
                            <div className="col-xs-6 no-horizantal text-right">
                                <NumberFormat value={this.state.tax} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </div>
                        </div>
                        <div className="col-xs-12 no-horizantal total-invoice">
                            <div className="col-xs-6 no-horizantal text-right">
                                Total
                            </div>
                            <div className="col-xs-6 no-horizantal text-right">
                                <NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewInvoiceTable;