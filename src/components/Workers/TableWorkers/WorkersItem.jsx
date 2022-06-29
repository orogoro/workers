import { ButtonClose, Td } from './WorkersTable.styled';
import PropTypes from 'prop-types';

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

WorkersItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
