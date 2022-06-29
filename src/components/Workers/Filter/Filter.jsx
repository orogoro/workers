import { Form, Label, Input, Select, InputRange } from './Filter.styled';

export default function Filter({
  contacts,
  value,
  onChange,
  salaryStart,
  salaryEnd,
  category,
}) {
  const allCategories = contacts.map(category => category.department);
  const uniqueCategories = allCategories.filter(
    (contact, index, array) => array.indexOf(contact) === index
  );

  const start = Math.min(...contacts.map(list => list.amount));
  const end = Math.max(...contacts.map(list => list.amount));

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
          min={start}
          max={end}
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
          min={start}
          max={end}
          step="100"
        />
      </Label>
    </Form>
  );
}
