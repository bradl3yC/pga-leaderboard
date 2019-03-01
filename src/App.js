import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScoreBoard from './components/ScoreBoard';
import NewPlayerModal from './components/NewPlayerModal';
import './styles.css';

export default class App extends Component {
  render() {
    const {
      players,
      onDelete,
      addPlayer,
      openModal,
      modalIsOpen,
      closeModal,
      updateFormData,
      retrievePlayer,
      formData,
    } = this.props;

    const handleSubmit = (event) => {
      event.preventDefault();
      addPlayer();
    };

    return (
      <div>
        <ScoreBoard
          onDelete={onDelete}
          players={players}
          openModal={openModal}
          retrievePlayer={retrievePlayer}
        />
        <NewPlayerModal
          formData={formData}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          updateFormData={updateFormData}
        />
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.instanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  updateFormData: PropTypes.func.isRequired,
  retrievePlayer: PropTypes.func.isRequired,
  formData: PropTypes.instanceOf(Object).isRequired,
};
