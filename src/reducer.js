import md5 from 'md5';
import { DELETE, ADD_PLAYER, OPEN_MODAL, CLOSE_MODAL, UPDATE_PLAYER_INFO } from './const';

const initialState = {
  players: [],
  modalIsOpen: false,
  playerToAdd: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      // create a unique id for our players - this would normally be done with a DB ID
      const id = md5(Date.now());
      return {
        ...state,
        modalIsOpen: false,
        players: [...state.players, { ...state.playerToAdd, id }],
        playerToAdd: {},
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

    case UPDATE_PLAYER_INFO:
      return {
        ...state,
        playerToAdd: {
          ...state.playerToAdd,
          [action.key]: action.value,
        },
      };
    default:
      return state;
  }
};
