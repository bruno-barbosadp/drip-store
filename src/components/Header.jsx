import React, { useState } from 'react';
import logoHeader from '../assets/logo-header.svg';
import './Header.css'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext'
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import miniCart from '../assets/mini-cart.svg'
import { useNavigate } from 'react-router-dom';
import mainHome from '../assets/main-home.png'

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

    return (
        <div id="header-wrapper" className='col-12 md:col-3'>
            <header id='header'>
                <div id="header-center">
                    <img src={logoHeader} alt="Logo Header" id="logo-header" />
                    <div id="search-container">
                        <IconField>
                            <InputIcon className="pi pi-search cursor-pointer" id="input-icon" />
                            <InputText
                                placeholder="Pesquisar produto..."
                                id="search-pesquisa"
                                type="text"
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
                                <hr id='linhaCart'/>
                                
                                    <img style={{height: '100px'}} src={mainHome} alt="" />
                               
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