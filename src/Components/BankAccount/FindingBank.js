import React,{Component} from "react";
import "../../Styles/FindingBank.css";
import TextField from '@material-ui/core/TextField';
import Banks from "./Banks";
import dotnetify from "dotnetify";

class FindingBank extends Component{
    constructor(props){
        super(props);
        this.state={
            displayedBanks:[],
            searchQuery:'',
            Banks:[],
            BanksError:false,
        };

        this.vm = dotnetify.react.connect('FindBank', this);

    }




    handleSearch(event){
        const searchQuery = event.target.value.toLowerCase();
        const filteredBanks = this.state.Banks.filter(function(bank) {
            let searchedBank = bank.BankName.toLowerCase();
            return searchedBank.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedBanks: filteredBanks,
            searchQuery: event.target.value,
        });
    }

    submit(event){
        event.preventDefault()
    }



    render(){
        const {BanksError}=this.state;
        return(
            <div className="col-xs-12 no-horizantal">
                <div className="container">
                    <div className="col-xs-12 find-bank-panel">
                        <h1 className="text-center">
                            Find your bank
                        </h1>

                        {BanksError
                            ? <p className="bank-find-error">Server Error, please try again</p>
                            : null
                        }
                        <div className="banks-search-container col-xs-8 col-xs-offset-2">
                            <form className="finding-bank-form" noValidate autoComplete="off" onSubmit={this.submit.bind(this)}>
                                <TextField
                                    label="Search for your bank..."
                                    className='bank-name-input search-icon'
                                    name="bank-name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleSearch.bind(this)}
                                />
                            </form>
                            <div className=" no-horizantal finding-bank-resaults col-xs-12">
                                <div className="col-xs-12 gray-box">
                                    <h2 className="text-center">Popular Banks</h2>
                                </div>
                                <div className="col-xs-12 finded-banks-container no-horizantal">
                                    {this.state.displayedBanks.length > 0 ?
                                        this.state.searchQuery.length !== 0 ?
                                            this.state.displayedBanks.map( (bank,index) => {return <Banks key={index} index={index} banks={bank} banksLength={this.state.displayedBanks.length}/>} )
                                            :
                                            <div className="there-isnt-bank">
                                                <p>No banks available</p>
                                                <p></p>
                                            </div>
                                        :
                                        this.state.searchQuery.length !== 0 ?
                                            <div className="there-isnt-bank">
                                                <p>No banks available</p>
                                                <p> We couldn't find "<span style={{color:"red"}}>{this.state.searchQuery}</span>"</p>
                                            </div>
                                            :
                                            <div className="there-isnt-bank">
                                                <p>No banks available</p>
                                                <p></p>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default FindingBank;