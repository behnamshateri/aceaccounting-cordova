import { combineReducers } from "redux";
import Language from "./Language.js";
import Login from "./Login.jsx";
import CompanyDetails from "./CompanyDetails.js";
import User from "./User";

export default combineReducers({
    Language,
    Login,
    CompanyDetails,
    User,
})
