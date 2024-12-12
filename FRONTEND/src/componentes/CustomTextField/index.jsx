
import { TextField } from "@mui/material";
import { Field } from "formik";

import { ThemeContext } from "../../App";
import { useContext } from "react";
import styled from "styled-components";

// Componente de campo personalizado para MUI TextField
export function CustomTextField ({ label, ...props }){

  const { theme } = useContext(ThemeContext); 

  return (
    <Field
      name={props.name}
      render={({ field, meta }) => (
        
          <TextField
            {...field}
            {...props}
            label={label}
            variant="outlined"  
            size="small"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            sx={{
                  "& .MuiOutlinedInput-root.Mui-completed": {
                      backgroundColor: 'white'
                  }
            }}
          />

        
      )}
    />
  );
};

const ContentText = styled.div`
  /*color: ${(props) => props.theme.text};*/
  color: #fff ;
  backgroundColor: #FF00FF ;
`;
  
