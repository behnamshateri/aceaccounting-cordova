import * as types from "../Constant/Actiontypes";

const User = (state = false, action) => {
    switch (action.type) {
        case types.USER_INFO:
            return {
                userId: action.userId,
            };
        // case types.USER_INFO:
        //     return {
        //         userId: action.userId,
        //     };
        default:
            return state;
    }
};


export default User;