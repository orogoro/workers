import { useMemo } from 'react';
import { Form, Label, Input, Select, InputRange } from './WorkersFilter.styled';

const DEBOUNCE_DELAY = 300;

export default function WorkersFilter({
  contacts,
  value,
  onChange,
  salaryStart,
  salaryEnd,
}) {
  const allCategories = contacts.map(category => category.department);
  const uniqueCategories = allCategories.filter(
    (contact, index, array) => array.indexOf(contact) === index
  );

  const [min, max] = useMemo(
    () => [
      Math.min(...contacts.map(list => list.amount)),
      Math.max(...contacts.map(list => list.amount)),
    ],
    [contacts]
  );

  // const start = Math.min(...contacts.map(list => list.amount));
  // const end = Math.max(...contacts.map(list => list.amount));

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input type="text" name="name" value={value} onChange={onChange} />
      </Label>

      <Label>
        Find contacts by category
        <Select id="category" name="category" onChange={onChange}>
          <option>all</option>
          {uniqueCategories.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </Select>
      </Label>

      <Label>
        Start salary: {salaryStart}
        <InputRange
          type="range"
          name="rate-start"
          onChange={onChange}
          value={salaryStart}
          min={min}
          max={max}
          step="100"
        />
      </Label>
      <Label>
        End salary: {salaryEnd}
        <InputRange
          type="range"
          name="rate-end"
          onChange={onChange}
          value={salaryEnd}
          min={min}
          max={max}
          step="100"
        />
      </Label>
    </Form>
  );
}
