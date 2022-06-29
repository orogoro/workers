import { ButtonClose, Td } from '../TableWorkers.styled';

export default function Painting({
  firstName,
  lastName,
  department,
  amount,
  onDeleteContact,
}) {
  return (
    <>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{department}</td>
      <Td>
        {amount} USA
        <ButtonClose onClick={onDeleteContact}>❌</ButtonClose>
      </Td>
    </>
  );
}
