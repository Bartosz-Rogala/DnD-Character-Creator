import { combineReducers } from "redux";
import { reducer as formReducer} from 'redux-form';

import auth from "./Auth";
import message from "./Message";


export default combineReducers({
    form: formReducer,
    auth,
    message
});