import styled from "styled-components";
import CreateDeviceForm from "../componentes/Formulario/CreateDevice";


export function PageDevices() 
{
  return (
    <Container>
      <h1>Dispositivos</h1>
      <CreateDeviceForm />
    </Container>
  );
}


const Container = styled.div`
    height:100vh;
    margin: 20px 32px;
`;