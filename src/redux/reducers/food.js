import {ADD_FOOD, DELETE_FOOD, SET_FORM, CHECK_FORM} from '../actions/types';

const initialState = {
  form: {name: ''},
  formValid: null,
  foodList: [],
};

const foodReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: {...state.form, [action.inputType]: action.inputValue},
        formValid: null,
      };
    case ADD_FOOD:
      return state.form.name.length === 0
        ? {
            ...state,
            formValid: false,
          }
        : {
            ...state,
            foodList: state.foodList.concat({
              key: Math.random(),
              name: action.data,
            }),
            formValid: true,
            form: {name: ''},
          };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter(item => item.key !== action.key),
      };
    default:
      return state;
  }
};

export default foodReducers;
