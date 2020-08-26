import { createStore, combineReducers } from "redux";
import menuReducer from "./menu/menuReducer";

// const rootReducer = combineReducers({
//   menuReducer
// });
const store = createStore(menuReducer);

export default store;
