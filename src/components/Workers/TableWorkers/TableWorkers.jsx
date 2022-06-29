import Painting from './Painting/Painting';

import { Table, Thead, Tr, Tfoot } from './TableWorkers.styled';

export default function TableWorkers({ contacts, onDeleteContact }) {
  // console.log(contacts);
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
            <Painting
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
