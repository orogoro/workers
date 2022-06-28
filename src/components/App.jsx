import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import WorkersForm from './Workers/WorkersForm/WorkersForm';
import TableWorkers from './Workers/TableWorkers/TableWorkers';
import Filter from './Workers/Filter/Filter';

const contacts = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    department: 'IT',
    amount: 3000,
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    department: 'IT',
    amount: 3000.5,
  },
  {
    id: '3',
    firstName: 'Bob',
    lastName: 'Colman',
    department: 'Sales',
    amount: 9000,
  },
  {
    id: '4',
    firstName: 'Barbara',
    lastName: "O'Connor",
    department: 'Sales',
    amount: 4000,
  },
  {
    id: '5',
    firstName: 'Adam',
    lastName: 'Murphy',
    department: 'Administration',
    amount: 2000,
  },
];

export const App = () => {
  const [lists, setLists] = useState(
    JSON.parse(window.localStorage.getItem('lists')) ?? contacts
  );
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('all');
  const [salaryStart, setSalaryStart] = useState('500');
  const [salaryEnd, setSalaryEnd] = useState('20000');

  useEffect(() => {
    window.localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const addWorkers = ({ firstName, lastName, department, amount }) => {
    const findFirstName = lists.map(list => list.firstName).includes(firstName);
    const findLastName = lists.map(list => list.lastName).includes(lastName);

    if (findFirstName && findLastName) {
      alert(`${firstName} ${lastName} is already in list`);
      return;
    }

    const contact = {
      id: nanoid(),
      firstName,
      lastName,
      department,
      amount,
    };

    setLists(state => [...state, contact]);
  };

  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    if (Number(filterValue)) {
      if (Number(filterValue) < 10) {
        return;
      }
      setSalaryStart(filterValue);
      return;
    }

    setFilter(filterValue);
  };

  const changeCategory = e => {
    const filterValue = e.currentTarget.value;

    if (Number(filterValue)) {
      setSalaryEnd(filterValue);
      return;
    }

    setCategory(filterValue);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (normalizedFilter !== '') {
      return lists.filter(list =>
        list.firstName.toLowerCase().includes(normalizedFilter)
      );
    }

    if (category !== 'all') {
      return lists.filter(item => item.department === category);
    }

    if (salaryStart >= '100' || salaryEnd <= '20000') {
      return lists.filter(
        item => salaryStart <= item.amount && item.amount <= salaryEnd
      );
    }

    return lists;
  };

  return (
    <div className="container">
      <WorkersForm onSubmit={addWorkers} />
      <Filter
        contacts={lists}
        value={filter}
        onChange={changeFilter}
        handleChange={changeCategory}
        salaryStart={salaryStart}
        salaryEnd={salaryEnd}
        category={category}
      />
      <TableWorkers contacts={getVisibleContacts()} />
    </div>
  );
};
