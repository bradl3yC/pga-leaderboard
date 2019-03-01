import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';
import App from './App';
import { onDelete, addPlayer, openModal, closeModal, updateFormData, retrievePlayer } from './actions';

const mapStateToProps = state => ({
  players: orderBy(state.scoreBoard.players, ['score', 'lastName'], ['desc', 'asc']),
  modalIsOpen: state.scoreBoard.modalIsOpen,
  formData: state.scoreBoard.formData,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(onDelete(id)),
  addPlayer: player => dispatch(addPlayer(player)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  updateFormData: (key, value) => dispatch(updateFormData(key, value)),
  retrievePlayer: id => dispatch(retrievePlayer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
