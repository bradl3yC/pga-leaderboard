import get from 'lodash/get';
import md5 from 'md5';
import {
  DELETE,
  ADD_OR_UPDATE_PLAYER,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_FORM_DATA,
  RETRIEVE_PLAYER,
} from './const';

const initialState = {
  players: [],
  modalIsOpen: false,
  formData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_UPDATE_PLAYER:
      // create a unique id for our players - this would normally be done with a DB ID
      const id = get(state, 'formData.id', md5(Date.now()));
      return {
        ...state,
        modalIsOpen: false,
        players: [...state.players.filter(player => player.id !== id), { ...state.formData, id }],
        formData: {},
      };
    case DELETE:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id),
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      };

    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.key]: action.value,
        },
      };

    case RETRIEVE_PLAYER:
      return {
        ...state,
        modalIsOpen: true,
        formData: {
          ...state.players.filter(player => player.id === action.id)[0],
        },
      };

    default:
      return state;
  }
};
