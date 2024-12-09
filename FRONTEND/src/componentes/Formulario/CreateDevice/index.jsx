import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Esquema de validação com Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: Yup.string()
    .email("Email inválido")
    .required("O email é obrigatório"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Confirmação de senha obrigatória"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "Você deve aceitar os termos e condições"),
  additionalInfo: Yup.string().when("wantAdditionalInfo", {
    is: true,
    then: Yup.string().required("Informação adicional é obrigatória"),
    otherwise: Yup.string().notRequired(),
  }),
});

// Componente do formulário
const CreateDeviceForm = () => {
  const initialValues = {
    name: "",
    IdDevice: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    wantAdditionalInfo: false,
    additionalInfo: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Valores do formulário enviados:", values);
      // Simular requisição assíncrona
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Formulário enviado com sucesso!");
      resetForm();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label>Nome:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Senha:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Confirme sua senha:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="agreeToTerms" />
              Aceito os termos e condições
            </label>
            <ErrorMessage name="agreeToTerms" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="wantAdditionalInfo" />
              Deseja fornecer informações adicionais?
            </label>
          </div>

          {values.wantAdditionalInfo && (
            <div>
              <label>Informação adicional:</label>
              <Field type="text" name="additionalInfo" />
              <ErrorMessage name="additionalInfo" component="div" style={{ color: "red" }} />
            </div>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateDeviceForm;
