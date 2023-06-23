import { combineReducers } from "redux";
import editBookReducer from "./EditBooks/reducer";
import bookReducer from "./Books/reducer";
import { filterReducer } from "./Filters/reducer";

const rootReducer=combineReducers({edit:editBookReducer,books:bookReducer,filter:filterReducer})
export default rootReducer