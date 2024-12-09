import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageHome , PageProducts, PageDiagramas, PageDevices, PageReportes}  from "../pages"

export function MyRoutes() 
{
  return (    
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/devices" element={<PageDevices />} />
        <Route path="/productos" element={<PageProducts />} />
        <Route path="/diagramas" element={<PageDiagramas />} />
        <Route path="/reportes" element={<PageReportes />} />
      </Routes>   
  );
}