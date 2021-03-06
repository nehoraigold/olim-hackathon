import { createStore } from "redux";
import {mainReducer} from "../reducers/rootReducer";

const store = createStore(mainReducer);

window.store = store;

export default store;