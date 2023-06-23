import { applyMiddleware, createStore } from "redux";
import bookReducer from "./Books/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootReducer";
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))