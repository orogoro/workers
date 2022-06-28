import { ButtonClose, Td } from '../TableWorkers.styled';

export default function Painting({ firstName, lastName, department, amount }) {
  return (
    <>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{department}</td>
      <Td>
        {amount} USA
        <ButtonClose>a</ButtonClose>
      </Td>
    </>
  );
}
