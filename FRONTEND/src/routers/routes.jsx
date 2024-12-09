import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Products } from "../pages/Products";
import {Diagramas} from "../pages/Diagramas";
import {Reportes} from "../pages/Reportes";

export function MyRoutes() 
{
  return (    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/diagramas" element={<Diagramas />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>   
  );
}