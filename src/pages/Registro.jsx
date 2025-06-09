import logoHeader from '../assets/logo-header.svg'
import './Registro.css'
import logoFooter from '../assets/logo-footer.svg'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Registro = () => {

    const navigate = useNavigate();

    const handleRegistro = (e) => {
        e.preventDefault();
        // Aqui poderia incluir lógica de cadastro real
        navigate('/'); // ou outra página
    };

    return (
        <div>
            <div id='headerLogin'>
                <img id='logoLogin' src={logoHeader} alt="" />
            </div>
            <main id='mainRegistro'>
                <div id='formContainer'>
                  <h3 className='text-4xl' id='tituloRegistro'>Criar conta</h3>
                  <form id='formRegistro'>
                    <h5>Informações Pessoais</h5>
                    <hr id='linhaForm'/>
                    <label className='block font-bold text-sm  pt-3' htmlFor="Nome Completo">Nome Completo *</label>
                    <div>
                        <InputText
                            type='text'
                            placeholder='Insira seu nome'
                            className='w-full'
                            id='Nome Completo'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                    </div>
                    <label className='block font-bold text-sm  pt-3' htmlFor="CPF">CPF *</label>
                    <div>
                        <InputText
                            type='text'
                            placeholder='Insira seu CPF'
                            className='w-full'
                            id='CPF'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                    </div>
                    <label className='block font-bold text-sm  pt-3' htmlFor="email">E-mail *</label>
                    <div id='inputAltura'>
                        <InputText
                            type='text'
                            placeholder='Insira seu email'
                            className='w-full'
                            id='email'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                    </div>
                    <label className='block font-bold text-sm  pt-3' htmlFor="Celular">Celular *</label>
                    <div id='inputAltura'>
                        <InputText
                            type='text'
                            placeholder='Insira seu celular'
                            className='w-full'
                            id='Celular'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                    </div>
                  </form>
                   <form id='formRegistro'>
                        <h5>Informações de Entrega</h5>
                        <hr id='linhaForm'/>
                        <label className='block font-bold text-sm pt-3' htmlFor="endereco">Endereço *</label>
                        <div>
                        <InputText
                            type='text'
                            placeholder='Insira seu endereço'
                            className='w-full'
                            id='endereco'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                        </div>
                        <label className='block font-bold text-sm pt-3' htmlFor="bairro">Bairro *</label>
                        <div>
                        <InputText
                            type='text'
                            placeholder='Insira seu bairro'
                            className='w-full'
                            id='bairro'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                        </div>
                        <label className='block font-bold text-sm pt-3' htmlFor="cidade">Cidade *</label>
                        <div>
                        <InputText
                            type='text'
                            placeholder='Insira sua cidade'
                            className='w-full'
                            id='cidade'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                        </div>
                        <label className='block font-bold text-sm pt-3' htmlFor="cep">CEP *</label>
                        <div>
                            <InputText
                            type='text'
                            placeholder='Insira seu CEP'
                            className='w-full'
                            id='CEP'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                        </div>
                        <label className='block font-bold text-sm pt-3' htmlFor="complemento">Complemento *</label>
                        <div>
                            <InputText
                            type='text'
                            placeholder='Insira seu complemento'
                            className='w-full'
                            id='Complemento'
                            style={{ height: '48px', fontSize: '16px', padding: '10px 12px', backgroundColor: '#F5F5F5' }}
                            required
                        />
                        </div>
                    </form>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                    <div >
                         <input type="checkbox" id="inputConfirmar" required />
                    </div>                 
                    <label htmlFor="termos" style={{ fontSize: '14px' }}>
                        Quero receber por email ofertas e novidades das lojas da Digital Store. A sequência de envios <br /> pode variar de acordo com a interação do cliente.
                    </label>
                    </div>
                    <Button 
                        label="Criar conta" 
                        type='button'
                        className='w-full'
                        style={{ height: '43px', fontSize: '16px'}}
                        id="button-registro"
                        onClick={handleRegistro}
                    />
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
 
export default Registro;