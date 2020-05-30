import {ADD_FOOD, DELETE_FOOD, SET_FORM} from './types';

export const addFood = data => ({type: ADD_FOOD, data: data.name});
export const deleteFood = key => ({type: DELETE_FOOD, key: key});
export const setForm = (inputType, value) => {
  return {type: SET_FORM, inputType: inputType, inputValue: value};
};
