import * as types from "../Constant/Actiontypes";

const Login = (state = false, action) => {
    switch (action.type) {
        case types.USER_CHECKLOGIN:
            return {
                ...state,
                UserOrganizations: action.userOrg,
                isLogin: action.isLogin,
            };
        case types.USER_LOGOUT:
            return {
                ...state,
                isLogin: action.isLogin,
            };

        case types.USER_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin,
            };
        default:
            return state;
    }
};


export default Login;