import React, {} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { modalStyles, Button, Form, Input, ModalWrapper, ModalHeader } from './styles';

const NewPlayerModal = ({ modalIsOpen, closeModal, handleSubmit, updateAddPlayerInfo }) => (
  <Modal
    ariaHideApp={false}
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Add Player"
    style={modalStyles}
  >
    <ModalWrapper>
      <ModalHeader>ADD PLAYER</ModalHeader>
      <Form onSubmit={event => handleSubmit(event)}>
        <Input required placeholder="First Name" name="firstName" type="text" onChange={event => updateAddPlayerInfo('firstName', event.target.value)} />
        <Input required placeholder="Last Name" name="lasttName" type="text" onChange={event => updateAddPlayerInfo('lastName', event.target.value)} />
        <Input required placeholder="Score" name="score" type="number" onChange={event => updateAddPlayerInfo('score', event.target.value)} />
        <Button type="submit">Submit</Button>
      </Form>
    </ModalWrapper>
  </Modal>
);

export default NewPlayerModal;

NewPlayerModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateAddPlayerInfo: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
