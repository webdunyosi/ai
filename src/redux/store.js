import { createStore, combineReducers } from "redux";
import isOpenReducer from "./reducers/isOpenReducer"; // isOpen holatini boshqaruvchi reducer
import languageReducer from "./reducers/languageReducer"; // Tilni boshqaruvchi reducer

// Reducerlarni birlashtirish
const rootReducer = combineReducers({
  isOpenState: isOpenReducer, // isOpen holati uchun
  language: languageReducer, // Til holati uchun
});

// Redux store yaratish
const store = createStore(rootReducer);

export default store;