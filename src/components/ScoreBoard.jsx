import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import { PlayersTable, DeleteButton, Button, MainWrapper, ScoreBoardHeader, GoldText, WhiteText, EditButton } from './styles';

const ScoreBoard = ({ players, onDelete, openModal, retrievePlayer }) => (
  <MainWrapper>
    <ScoreBoardHeader>
      <GoldText>PGA</GoldText>
      <WhiteText>PGA CHAMPIONSHIP</WhiteText>
      <GoldText>PGA</GoldText>
    </ScoreBoardHeader>
    <PlayersTable>
      <thead>
        <tr>
          <td>LEADERS</td>
          <td>TOTAL</td>
          <td>PAR 72</td>
          <td>DELETE ?</td>
          <td>EDIT ?</td>
        </tr>
      </thead>
      <tbody>
        {map(players, ({ firstName, lastName, id, score }) =>
        (<tr key={id}>
          <td>{lastName}, {firstName}</td>
          <td>{score - 72 === 0 ? 'E' : score - 72}</td>
          <td>{score}</td>
          <td>
            <DeleteButton onClick={() => onDelete(id)} />
          </td>
          <td>
            <EditButton onClick={() => retrievePlayer(id)} />
          </td>
        </tr>),
      )}
      </tbody>
    </PlayersTable>
    <Button onClick={() => openModal()}>Add Player</Button>
  </MainWrapper>
);

ScoreBoard.propTypes = {
  players: PropTypes.instanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  retrievePlayer: PropTypes.func.isRequired,
};

export default ScoreBoard;
