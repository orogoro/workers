import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  FormStyle,
  FieldStyle,
  LabelStyle,
  Button,
  P,
} from './WorkersForm.styled';

const inputNameId = nanoid();
const inputNumberId = nanoid();

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Is not in correct format')
    .required(),
  lastName: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Is not in correct format')
    .required(),
  department: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Is not in correct format')
    .required(),
  amount: yup.number().required().positive().integer(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={massege => <P>{massege}</P>} />;
};

export default function WorkersForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        department: '',
        amount: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyle>
        <LabelStyle htmlFor={inputNameId}>
          FirstName
          <FieldStyle type="text" name="firstName" id={inputNameId} />
          <FormError name="firstName" />
        </LabelStyle>
        <LabelStyle htmlFor={inputNameId}>
          LastName
          <FieldStyle type="text" name="lastName" id={inputNameId} />
          <FormError name="lastName" />
        </LabelStyle>
        <LabelStyle htmlFor={inputNameId}>
          Department
          <FieldStyle type="text" name="department" id={inputNameId} />
          <FormError name="department" />
        </LabelStyle>

        <LabelStyle htmlFor={inputNumberId}>
          Salary amount
          <FieldStyle type="number" name="amount" id={inputNumberId} />
          <FormError name="amount" />
        </LabelStyle>

        <Button type="submit">Add</Button>
      </FormStyle>
    </Formik>
  );
}

WorkersForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
