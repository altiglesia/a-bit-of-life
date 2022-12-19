import { combineReducers } from "redux";
import userSlice from "./components/store/user"

const rootReducer = combineReducers({
    user: userSlice,
  });

  export default rootReducer;
  