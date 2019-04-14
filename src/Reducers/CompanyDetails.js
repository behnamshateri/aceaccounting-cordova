import * as types from "./../Constant/Actiontypes";


const CompanyDetails = (state = [], action) => {
    switch (action.type) {
        case types.USER_ORGANIZATION:
            return {
                ...state,
                selectedorg:action.selectedorg,
                organisationShortCode:action.selectedorgId,
                organisation:action.organisation,
            };
        default:
            return state;
    }
};


export default CompanyDetails;