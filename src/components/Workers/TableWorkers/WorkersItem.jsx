import { ButtonClose, Td } from './WorkersTable.styled';

export default function WorkersItem({
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
