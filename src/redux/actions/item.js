import {ADD_ITEM, DELETE_ITEM, SET_FORM} from './types';

export const addItem = data => ({type: ADD_ITEM, data: data.name});
export const deleteItem = key => ({type: DELETE_ITEM, key: key});
export const setForm = (inputType, value) => ({
  type: SET_FORM,
  inputType: inputType,
  inputValue: value,
});
