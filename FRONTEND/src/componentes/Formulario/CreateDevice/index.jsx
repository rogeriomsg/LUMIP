import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Box } from "@mui/material";
import { CustomTextField } from "../../CustomTextField";

import { ThemeContext } from "../../../App";
import { useContext } from "react";
import styled from "styled-components";

// Componente do formulário
const CreateDeviceForm = () => {

  const { theme } = useContext(ThemeContext);  

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Nome é obrigatório."),
    email: Yup.string().email("Email inválido.").required("Email é obrigatório."),
  });
  // Valores iniciais
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Valores do formulário enviados:", values);
      // Simular requisição assí­ncrona
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
      validationSchema={validationSchema}
      onSubmit={handleSubmit}        
    >
      {({ isSubmitting, values }) => (
        <Form>    
          <FormWrapper themeUse={theme}>
            
            <Box  mb={2} >
              <CustomTextField name="firstName" className="content-text" label="Nome" focused/>
            </Box>
            <Box mb={2}>
              <CustomTextField name="email" label="Email" size="small" />
            </Box>
            <Box mb={2}>
              <CustomTextField type="password" name="password" label="Senha" size="small" />
            </Box>          
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>              
          </FormWrapper>            
        </Form>
      )}
    </Formik>
  );
};


const FormWrapper = styled.div`
  /*margin: 10px 0;
  background-color: ${(props) => props.theme.bg1};
  border-radius: 16px;
  padding: 32px 32px;
  box-shadow: 8px 8px 16px rgba(0,0,0, 0.08);*/
`;



export default CreateDeviceForm;
