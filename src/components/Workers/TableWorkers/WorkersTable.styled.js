import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  margin-top: 20px;
  background-color: #b0e0e6;
  border-radius: 2px;
  box-shadow: 0 0 10px #a9a9a9;
`;

export const Thead = styled.thead`
  height: 60px;
  font-size: 20px;
  border: none;
  background-color: #40e0d0;
`;

export const Tr = styled.tr`
  font-size: 20px;
  text-align: center;

  &:nth-child(even) {
    background-color: #87cefa;
  }
`;
export const Tfoot = styled.tfoot`
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background-color: #7b68ee;
  color: #fff;
`;

export const Td = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 3px;
  right: 8px;
  background-color: #afeeee;
  border-radius: 4px;
  border: none;
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #e0ffff;
  }
`;
