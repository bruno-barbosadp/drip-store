import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Categorias from "../pages/Categorias";
import MeusPedidos from "../pages/MeusPedidos";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

const Paths = () => {
    return (
        <>
           <BrowserRouter>
                <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />  {/* Home na raiz */}
                    <Route path="/produtos" element={<Produtos/>} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/meuspedidos" element={<MeusPedidos />} /> 
                                     
                </Route>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>} />
                </Routes>
           </BrowserRouter>
        </>
    );
}

export default Paths;