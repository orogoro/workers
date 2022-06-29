import WorkersItem from './WorkersItem';
import PropTypes from 'prop-types';

import { Table, Thead, Tr, Tfoot } from './WorkersTable.styled';

export default function WorkersTable({ contacts, onDeleteContact }) {
  const total = contacts.reduce((acc, item) => acc + item.amount, 0);
  return (
    <Table>
      <Thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Department</th>
          <th>Amount</th>
        </tr>
      </Thead>

      <tbody>
        {contacts.map(({ id, firstName, lastName, department, amount }) => (
          <Tr key={id}>
            <WorkersItem
              firstName={firstName}
              lastName={lastName}
              department={department}
              amount={amount}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </Tr>
        ))}
      </tbody>
      <Tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>Summary</td>
          <td>{total} USD</td>
        </tr>
      </Tfoot>
    </Table>
  );
}

WorkersTable.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
