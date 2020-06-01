import {ADD_ITEM, DELETE_ITEM, SET_FORM, CHECK_FORM} from '../actions/types';

const initialState = {
  form: {name: ''},
  formValid: null,
  itemList: [],
};

const itemReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: {...state.form, [action.inputType]: action.inputValue},
        formValid: null,
      };
    case ADD_ITEM:
      return state.form.name.length === 0
        ? {
            ...state,
            formValid: false,
          }
        : {
            ...state,
            itemList: state.itemList.concat({
              key: Math.random(),
              name: action.data,
            }),
            formValid: true,
            form: {name: ''},
          };
    case DELETE_ITEM:
      return {
        ...state,
        itemList: state.itemList.filter(item => item.key !== action.key),
      };
    default:
      return state;
  }
};

export default itemReducers;
