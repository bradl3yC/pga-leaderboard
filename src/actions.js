import {
  ADD_OR_UPDATE_PLAYER,
  DELETE,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_FORM_DATA,
  RETRIEVE_PLAYER,
} from './const';

export const onDelete = id => ({
  type: DELETE,
  id,
});

export const addPlayer = player => ({
  type: ADD_OR_UPDATE_PLAYER,
  player,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const updateFormData = (key, value) => ({
  type: UPDATE_FORM_DATA,
  key,
  value,
});

export const retrievePlayer = id => ({
  type: RETRIEVE_PLAYER,
  id,
});
