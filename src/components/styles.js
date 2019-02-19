import styled from 'styled-components';

export const PlayersTable = styled.table`
  width: 90vw;
  
  thead {
    1px solid #FFF;  
    font-size: 20px;
  }
  
  td {
    background-color: #FFF;
    height: 5vh;
    color: #000;
    text-align: center;
    vertical-align: middle;
  }
  
  tbody {
    font-size: 18px;
    &:nth-child(odd) {
      background-color: #EAF3F3
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #053a72;
  font-size: 24px;
  color: #FFF;
`;

export const DeleteButton = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Input = styled.input`
  height: 30px;
  width: 50%;
  margin: 15px 0;
`;

export const MainWrapper = styled.div`
  padding: 5%;
`;

export const ModalWrapper = styled.div`
`;

export const ScoreBoardHeader = styled.div`
  width: 90vw;
  height: 9vh;
  background-color: #053a72;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const GoldText = styled.span`
  color: #939600;
  font-size: 4vw;
`;

export const WhiteText = styled.span`
  color: #FFF;
  font-size: 5vw;
`;

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(22,127,146, .4)',
  },
  content: {
    width: '25%',
    height: '42%',
    left: '38%',
    top: '15%',
    padding: '0',
    'border-radius': '8px',
  },
};
