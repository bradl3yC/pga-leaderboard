import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';
import App from './App';
import { onDelete, addPlayer, openModal, closeModal, updateAddPlayerInfo } from './actions';

const mapStateToProps = state => ({
  players: orderBy(state.scoreBoard.players, ['score', 'lastName'], ['desc', 'asc']),
  modalIsOpen: state.scoreBoard.modalIsOpen,
  playerToAdd: state.scoreBoard.playerToAdd,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(onDelete(id)),
  addPlayer: player => dispatch(addPlayer(player)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  updateAddPlayerInfo: (key, value) => dispatch(updateAddPlayerInfo(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
