import { useEffect, useState, useMemo } from 'react';
import { nanoid } from 'nanoid';

import WorkersForm from './Workers/WorkersForm/WorkersForm';
import TableWorkers from './Workers/TableWorkers/TableWorkers';
import Filter from './Workers/Filter/Filter';

import { contacts } from 'config/data';

export const App = () => {
  const [lists, setLists] = useState(
    JSON.parse(window.localStorage.getItem('lists')) ?? contacts
  );
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('all');
  const [salaryStart, setSalaryStart] = useState(
    Math.min(...lists.map(list => list.amount))
  );
  const [salaryEnd, setSalaryEnd] = useState(
    Math.max(...lists.map(list => list.amount))
  );

  useEffect(() => {
    window.localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const addWorkers = ({ firstName, lastName, department, amount }) => {
    const isFirstNameExist = lists.some(item => item.firstName === firstName);
    const isLastNameExist = lists.some(item => item.lastName === lastName);

    if (isFirstNameExist && isLastNameExist) {
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

  const onChangeFilter = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setFilter(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'rate-start':
        setSalaryStart(value);
        break;

      case 'rate-end':
        setSalaryEnd(value);
        break;

      default:
        return;
    }
  };

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    let filteredList = [...lists];

    if (filter !== '') {
      filteredList = filteredList.filter(list =>
        list.firstName.toLowerCase().includes(normalizedFilter)
      );
    }

    if (category !== 'all') {
      filteredList = filteredList.filter(item => item.department === category);
    }

    if (salaryStart >= '100' || salaryEnd <= '20000') {
      filteredList = filteredList.filter(
        item => salaryStart <= item.amount && item.amount <= salaryEnd
      );
    }

    return filteredList;
  }, [filter, lists, category, salaryStart, salaryEnd]);

  const deleteContact = id => {
    setLists(state => state.filter(contact => contact.id !== id));
  };

  return (
    <div className="container">
      <WorkersForm onSubmit={addWorkers} />
      <Filter
        contacts={lists}
        value={filter}
        onChange={onChangeFilter}
        salaryStart={salaryStart}
        salaryEnd={salaryEnd}
        category={category}
      />

      <TableWorkers
        contacts={getVisibleContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
