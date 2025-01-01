import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Nome"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
            margin="normal"
          />
          <Field
            name="email"
            as={TextField}
            label="E-mail"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
