import React, { useState } from 'react';
import logoHeader from '../assets/logo-header.svg';
import './Header.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import miniCart from '../assets/mini-cart.svg'
import { useNavigate } from 'react-router-dom';
import mainHome from '../assets/main-home.png'
import productsHome from "../assets/products-home.png"

const Header = () => {  
    
    const [isCartOpen, setIsCartOpen] = useState(false);

    const navigate = useNavigate();

    const handleHeader = (e) => {
        e.preventDefault();
        // Aqui poderia incluir lógica de cadastro real
        navigate('/minhaconta'); // ou outra página
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const [searchTerm, setSearchTerm] = useState("");

const handleSearch = () => {
    const termoFormatado = searchTerm.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (termoFormatado === "tenis") {
        navigate(`/produtos?q=${encodeURIComponent(searchTerm)}`);
    } else {
        navigate("/notfound")
    }
};


const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
};


    return (
        <div id="header-wrapper" className='col-12 md:col-3'>
            <header id='header'>
                <div id="header-center">
                    <img src={logoHeader} alt="Logo Header" id="logo-header" />
                    <div id="search-container">
                        <IconField>
                            <InputIcon className="pi pi-search cursor-pointer" id="input-icon" onClick={handleSearch}/>
                            <InputText
                                placeholder="Pesquisar produto..."
                                id="search-pesquisa"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </IconField>
                    </div>
                </div>
                <div id='header-right'>
                    <NavLink to="/cadastro">Cadastre-se</NavLink>
                    <Button 
                        label="Entrar" 
                        id='button-header'
                        onClick={handleHeader}
                    />
                     <div className="cart-wrapper">
                        <img
                            src={miniCart}
                            alt="Carrinho"
                            id="mini-cart"
                            onClick={toggleCart}
                        />
                        {isCartOpen && (
                            <div className="mini-cart-dropdown">
                                <p className='block font-bold text-sm'>Meu Carrinho</p>
                                <p>___________________________________</p>
                                   
                                    <div style={{backgroundColor: 'rgb(215, 236, 240)', width: '82px', height: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', paddingBottom: '12px'}}>
                                        <img style={{height: '80px'}} src={mainHome} alt="" />
                                        
                                    </div>
                                    <div id='descripition-cart'>
                                         <h5 style={{fontSize: '16px'}}><b>Tênis Nike Revolution <br /> 6 Next Nature <br /> Masculino </b> </h5>
                                         
                                    </div>
                                    
                                    <div id='price-cart'>
                                         <h3>R$ 219,00</h3>
                                         <h5><s>R$ 249,00</s></h5>
                                    </div>

                                    <div style={{backgroundColor: 'rgb(215, 236, 240)', width: '82px', height: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', paddingBottom: '12px'}}>
                                        <img style={{height: '42px', width: '70px', marginTop: '8px'}} src={productsHome} alt="" />
                                        
                                    </div>
                                    <div id='descripition-cart'>
                                         <h5 style={{fontSize: '16px', marginRight: '76px'}}><b>K-Swiss V8<br /> Masculino </b> </h5>
                                         
                                    </div>
                                    
                                    <div id='price-cart'>
                                         <h3>R$ 99,90</h3>
                                         <h5><s>R$ 149,90</s></h5>
                                    </div>

                                    <p style={{marginTop: '10px'}}>___________________________________</p>

                                    <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                                        <h4><b style={{fontSize: '15px', marginTop: '8px'}}>Valor total</b></h4>
                                        <h3 style={{color: '#EE4266', fontSize: '19px'}}>R$ 318,90</h3>
                                    </div>

                                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '24px'}}>
                                        <Link style={{}}>Esvaziar</Link>
                                        <button id='btn-cart'>Ver Carrinho</button>
                                    </div>
                               
                            </div>
                            
                        )}
                    </div>
                   
                </div>
                
            </header>

             <nav id="nav-links">
                <ul>
                    <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/produtos" className={({ isActive }) => isActive ? 'active' : ''}>
                        Produtos
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/categorias" className={({ isActive }) => isActive ? 'active' : ''}>
                        Categorias
                    </NavLink>
                    </li>
                    <li> 
                    <NavLink to="/meuspedidos" className={({ isActive }) => isActive ? 'active' : ''}> 
                        Meus Pedidos 
                    </NavLink> 
                    </li> 
                </ul> 
            </nav> 

        </div>
        
    );
}
 
export default Header;