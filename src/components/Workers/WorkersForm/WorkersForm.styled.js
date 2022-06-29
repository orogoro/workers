import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
`;
export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const FieldStyle = styled(Field)`
  padding: 5px;
  width: 250px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  outline: none;
`;

export const P = styled.p`
  color: red;
  margin: 0;
`;

export const Button = styled.button`
  margin-left: 10px;
  width: 100px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background-color: #4169e1;
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #0000ff;
  }
`;
