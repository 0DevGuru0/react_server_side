import { combineReducers } from "redux";

import admins from "./admins";
import users from "./users";
import auth from "./auth";

export default combineReducers({ admins, users, auth });
