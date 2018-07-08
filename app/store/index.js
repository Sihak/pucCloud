import loginSignUp from "./model/loginSignUp";
import GridButtons from "./model/gridButtons";
import Auth from "./model/auth";
import cNavigation from "./model/navigation";
import Register from "./model/register";
import Admission from './model/admission'


export default store = {
    loginSignUp: new loginSignUp(),
    gridButtons: new GridButtons(),
    auth : new Auth(),
    cNavigation : new cNavigation(),
    register: new Register(),
    admission:new Admission()
}