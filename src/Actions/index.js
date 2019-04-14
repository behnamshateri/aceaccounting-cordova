import * as types from "./../Constant/Actiontypes";
import auth from "./../auth";



// action for checking user is login
const FirstLogin = (isLogin) => ({
    type: types.USER_CHECKLOGIN,
    isLogin: isLogin,
});
const Language = (localize) => ({
    type: types.LANGUAGE,
    language:localize,
});
export const FirstCheckLogin = () => dispatch => {
    let localize = localStorage.getItem('i18nextLng');
    if(localize==null){
        localize = null;
    }
    let isLogin = localStorage.getItem('access_token');
   
    dispatch(FirstLogin(isLogin));
    dispatch(Language(localize));
};


// change lang
export const HandleChangeLang = (language) => dispatch => {
    localStorage.setItem('localize' , language);
    dispatch(Language(language));
};

// action for signout
const Logout = (isLogin) => ({
    type: types.USER_LOGOUT,
    isLogin: isLogin,
});
export const HandleLogout = () => dispatch => {
    auth.signOut();
    // localStorage.removeItem("api_token");
    let isLogin = false;
    dispatch(Logout(isLogin));
};


// action for signup
const Signup = (phonenumber,flag, country ,code) => ({
    type: types.USER_SIGNUP,
    phonenumber: phonenumber,
    countryName: country,
    flag: flag,
    code: code,

});

export const HandleSignup = (phonenumber,flag, country, code) => dispatch => {
    dispatch(Signup(phonenumber, flag, country, code));
};



// action for login
const Login = (isLogin) => ({
    type: types.USER_LOGIN,
    isLogin: isLogin,
});
export const HandleLogin = () => dispatch => {
    let isLogin = true;
    dispatch(Login(isLogin));
};





// action related to organization change that happened when user changed it form header
const OrganizationChange=(selectedorg,id, organisation) => ({
    type: types.USER_ORGANIZATION,
    selectedorg: selectedorg,
    selectedorgId:id,
    organisation:organisation,
});
export const HandleOrganizationChange=(selectedorg, id, organisation=[]) => dispatch => {
    if(selectedorg == null && id == null){
        localStorage.removeItem('selectedCompanyShortCode');
        localStorage.removeItem('selectedCompany');
    }
    dispatch(OrganizationChange(selectedorg, id, organisation));
};



// action related to save user info
const UserInfoChange=(userId) => ({
    type: types.USER_INFO,
    userId: userId,
});
export const HandleUserInfoChange=(userId) => dispatch => {
    dispatch(UserInfoChange(userId));
};








