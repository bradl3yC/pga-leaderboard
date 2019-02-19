import { ADD_PLAYER, DELETE, OPEN_MODAL, CLOSE_MODAL, UPDATE_PLAYER_INFO } from './const';

export const onDelete = id => ({
  type: DELETE,
  id,
});

export const addPlayer = player => ({
  type: ADD_PLAYER,
  player,
});

export const openModal = () => ({
  type: OPEN_MODAL,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

export const updateAddPlayerInfo = (key, value) => ({
  type: UPDATE_PLAYER_INFO,
  key,
  value,
})
