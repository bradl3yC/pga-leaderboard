import React, {} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import get from 'lodash/get';
import { modalStyles, Button, Form, Input, ModalWrapper, ModalHeader } from './styles';

const NewPlayerModal = ({ modalIsOpen, closeModal, handleSubmit, updateFormData, formData }) => (
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
        <Input value={get(formData, 'firstName', '')} required placeholder="First Name" name="firstName" type="text" onChange={event => updateFormData('firstName', event.target.value)} />
        <Input value={get(formData, 'lastName', '')} required placeholder="Last Name" name="lasttName" type="text" onChange={event => updateFormData('lastName', event.target.value)} />
        <Input value={get(formData, 'score', 0)} required placeholder="Score" name="score" type="number" onChange={event => updateFormData('score', event.target.value)} />
        <Button type="submit">Submit</Button>
      </Form>
    </ModalWrapper>
  </Modal>
);

export default NewPlayerModal;

NewPlayerModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateFormData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.instanceOf(Object).isRequired,
};
