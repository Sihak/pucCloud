import Programs from "./model/programs";
import User from "./model/user";
import Register from "./model/register";

export default store = {
    programs : new Programs(),
    user : new User(),
    register : new Register(),
}