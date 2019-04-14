import * as types from "../Constant/Actiontypes";

const Signup = (state = false, action) => {
    switch (action.type) {
        case types.USER_SIGNUP:
            return {
                ...state,
                phonenumber: action.phonenumber,
                countryName: action.countryName,
                flag: action.flag,
                code: action.code,
            };
        default:
            return state;
    }
}


export default Signup;