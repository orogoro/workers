import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #000;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 5px;
  width: 250px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  outline: none;
`;
export const InputRange = styled.input`
  width: 250px;
  border: 1px solid #2a2a2a;
  border-radius: 3px;
  outline: none;
`;

export const Select = styled.select`
  text-align: center;
  padding: 5px;
  width: 150px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  outline: none;
`;
