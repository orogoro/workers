import { Form, Label, Input, Select, InputRange } from './Filter.styled';

export default function Filter({
  contacts,
  value,
  onChange,
  handleChange,
  salaryStart,
  salaryEnd,
  category,
}) {
  const allCategories = contacts.map(category => category.department);
  const uniqueCategories = allCategories.filter(
    (contact, index, array) => array.indexOf(contact) === index
  );

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>

      <Label>
        Find contacts by category
        <Select id="category" name="category" onChange={handleChange}>
          <option>all</option>
          {uniqueCategories.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </Select>
      </Label>
      {category !== 'all' ? (
        ''
      ) : (
        <div>
          <Label>
            Start salary: {salaryStart}
            <InputRange
              type="range"
              name="rate"
              onChange={onChange}
              value={salaryStart}
              min="500"
              max="20000"
              step="500"
            />
          </Label>
          <Label>
            End salary: {salaryEnd}
            <InputRange
              type="range"
              name="rate"
              onChange={handleChange}
              value={salaryEnd}
              min="500"
              max="20000"
              step="500"
            />
          </Label>
        </div>
      )}
    </Form>
  );
}
