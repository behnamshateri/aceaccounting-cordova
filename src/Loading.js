import React ,{Component} from "react";
import ReactLoading from 'react-loading';


class Loading extends Component{
    render() {
        const color='#2e459a';
        return (
            <div className="loading-container">
                <ReactLoading type="balls" color={color} height={63} width={63} />
            </div>
        );
    }
}

export default Loading;