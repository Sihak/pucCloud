import Programs from "./model/programs";
import User from "./model/user";
import Register from "./model/register";
import Environment from "./model/environment";

export default store = {
    programs : new Programs(),
    user : new User(),
    register : new Register(),
    environment:new Environment(),
}