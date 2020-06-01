import {createStore, combineReducers} from 'redux';
import itemReducer from './reducers/item';

const rootReducer = combineReducers({
  itemReducer: itemReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
