

import * as types from "./../Constant/Actiontypes";


const CompanyDetails = (state =[], action) => {
    switch (action.type) {
        case types.LANGUAGE:
            return {
                ...state,
                language:action.language
            };

        default:
            return state;
    }
}


export default CompanyDetails;