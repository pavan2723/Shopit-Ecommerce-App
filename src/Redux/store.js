import { legacy_createStore,applyMiddleware,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer as ElectronicsReducer } from "./ElectronicsReducer/reducer";
import {reducer as GroceriesReducer} from "./GroceriesReducer/reducer";
import {reducer as FashionReducer} from "./FashionReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ElectronicsReducer,GroceriesReducer,FashionReducer});
const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );


export default store;