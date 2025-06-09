import logoHeader from '../assets/logo-header.svg'
import logoFooter from '../assets/logo-footer.svg'
import './Cadastro.css'
import imagemCadastro1 from '../assets/imagemCadastro1.png'
import imagemCadastro2 from '../assets/imagemCadastro2.png'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import gmail from '../assets/gmail.png'
import facebook from '../assets/facebook.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Cadastro = () => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: ''});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: ''};

    if (!email) {
      newErrors.email = 'Email é obrigatório.';
      valid = false;
    } else if (email.length < 12) {
      newErrors.email = 'Email deve ter pelo menos 12 caracteres.';
      valid = false;
    }

      setErrors(newErrors);

    if (valid) {
      
            navigate('/registro'); // ou outra página
        
        }
    }

    
    
    

    

    return (
        <div>
           <div id='headerCadastro'>
              <img id='logoCadastro' src={logoHeader} alt="" />
           </div>
         <main id='mainCadastro'>
            <div className='flex align-items-center justify-content-center'>
                <form id='formCadastro' className='px-5' onSubmit={handleSubmit}>
                <h3 className='text-4xl pt-5'>Crie sua conta</h3>
                <p className=' pt-3'>
                    Já possui uma conta? Entre <Link to="/login">aqui</Link>
                </p>
                <label className='block font-bold text-sm  pt-3' htmlFor="email">Email</label>
                <div id='inputAltura' className=' pt-3'>
                    <InputText
                        type='text'
                        placeholder='Insira seu email'
                        className='w-full'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                        required
                    />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                </div>
                <div className='pt-3 flex justify-content-center border-round-md'>
                    <Button 
                     label="Criar conta" 
                     type='submit'
                     className='w-full'
                     style={{ height: '43px', fontSize: '16px'}}
                     id="button-cadastro"
                     
                  />
                </div>
                <div id='login-com' className='flex pt-6 px-8 gap-5'>
                    <p className='text-center'>Ou faça login com</p>
                    <div id="icones-gmail-face">
                        <img id='gmail' src={gmail} alt="" />
                        <img id='facebook' src={facebook} alt="" />
                    </div>
                </div>
                </form>
            </div>

                <div id='posicaoImagem'>
                    <img id='imagemCadastro1' src={imagemCadastro1} alt="imagem 1" />
                    <img id='imagemCadastro2' src={imagemCadastro2} alt="imagem 2" />
                </div>
            </main>


           <footer id="footer">
                       {/* NOVO WRAPPER */}
                       <div className="footer-main">
                           <div className="footer-top">
                               <img src={logoFooter} alt="Logo Drip Store" className="footer-logo" />
                               <p className="footer-description">
                                   Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec luctus lorem <br /> ipsum, at ultricies sapien.
                               </p>
                               <div className="social-icons">
                                   <i className="pi pi-facebook" />
                                   <i className="pi pi-instagram" />
                                   <i className="pi pi-twitter" />
                               </div>
                           </div>
           
                           <div className="footer-links">
                               <div>
                                   <h4>Informações</h4>
                                   <ul>
                                       <li>Sobre Drip Store</li>
                                       <li>Segurança</li>
                                       <li>Wishlist</li>
                                       <li>Blog</li>
                                       <li>Trabalhe conosco</li>
                                       <li>Meus pedidos</li>
                                   </ul>
                               </div>
                               
                               <div>
                                   <h4>Categorias</h4>
                                   <ul>
                                       <li>Camisetas</li>
                                       <li>Calças</li>
                                       <li>Bonés</li>
                                       <li>Headphones</li>
                                       <li>Tênis</li>
                                   </ul>
                               </div>
           
                               <div>
                                   <h4>Contato</h4>
                                   <p style={{color: '#ccc'}}>
                                       Av. Santos Dumont, 1510 - 1° <br />
                                       andar - Aldeota, Fortaleza - <br />
                                       CE, 60150-161 <br /><br />
                                       (85) 3051-3411
                                   </p>
                               </div>
                           </div>
                       </div>
           
                       <div className="footer-bottom">
                           <p>@ 2022 Digital College</p>
                       </div>
                   </footer>
               
           
          
           
        </div>

        
    );
}
 
export default Cadastro;