import React, {Component} from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {languages} from "../../Languages";
import connect from "react-redux/es/connect/connect";
import {HandleChangeLang} from "../../Actions";
import "../../Styles/MainHeader.css";
import i18n from './../../i18n';


class LanguageSelect extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            languages:languages,
            defaultlang:this.props.language || 'en',
        });
    }
    handleChange(event){
        this.setState({
            defaultlang:event.target.value,
        });
        i18n.changeLanguage(event.target.value);
        this.props.HandleChangeLang(event.target.value)
    }

    render(){
        return(
            <FormControl className="selectlanguage">
                <NativeSelect
                    className="selectbox"
                    value={this.state.defaultlang}
                    name="language"
                    onChange={this.handleChange.bind(this)}
                    inputProps={{
                        className: 'change-lang-select',
                    }}
                >
                    {languages.map((lang , index)=>
                        <option value={lang.code} key={index}>{lang.code.toUpperCase()}</option>
                      )
                    }
                </NativeSelect>
            </FormControl>
        )
    }
}

const MapStateToProps = state => {
    return {
        language: state.Language.language,
    }
};

export default connect(MapStateToProps,{HandleChangeLang})(LanguageSelect);