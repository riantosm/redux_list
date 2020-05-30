import {createStore, combineReducers} from 'redux';
import foodReducer from './reducers/food';

const rootReducer = combineReducers({
  foodReducer: foodReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
