import { createStore, combineReducers } from "redux";
import isOpenReducer from "./reducers/isOpenReducer";

const rootReducer = combineReducers({
  isOpenState: isOpenReducer,
});

const store = createStore(rootReducer);

export default store;