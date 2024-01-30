import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  margin: 0 auto;

  span {
    display: inline-block;
    width: 63px;
    text-align: right;
    margin-right: 13px;
  }

  input{
    outline-color: #3f6e93;
  }

  button {
    height: 20px;
    width: 140px;
    cursor: pointer;
    background-color: #3f6e93;
    color: white;
    border: none;
    border-radius: 5px;
  }
`;
