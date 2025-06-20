import "./produtos.css"
import React, { useState } from 'react';
import Select from 'react-select';
import productsHome from "../assets/products-home.png";
import { useLocation } from 'react-router-dom';

const Produtos = () => {

    const useQuery = () => new URLSearchParams(useLocation().search);

    const query = useQuery().get("q");

    return (
        <div id="ProdutoPage">
           
                <div className="container-headerproducts">
                    <div className="title-produtospage" style={{display: 'flex', gap: '8px'}}>
                        <h4>Resultados para "{query}"</h4>
                        <h5 style={{marginTop: '4px', color: '#474747'}}>- 389 produtos</h5>
                        </div>
                
                        <select name="" id="" style={{backgroundColor: 'white', padding: '10px',    marginTop: '-12px', border: 'solid  black 1px', borderRadius: '4px',  fontWeight: 'bold', color: '#474747', fontSize: '13px'}}>
                            <option value="">Ordenar por: mais relevantes</option>
                        </select>
                </div>
           
                <div className="container-produtosFiltrosImages">
                    <div className="container-filtrar">
                     <h4>Filtrar por</h4>
                     <p>_________________________________</p>
                     <h5 style={{marginTop: '12px'}}>Marca</h5>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Adidas</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Balenciaga</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">K-Swiss</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Nike</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Puma</label>
                     </div>

                     <h5 className="container-checkboxLabel" style={{marginTop: '12px'}}>Categoria</h5>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Esporte e lazer</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Casual</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Utilitário</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Corrida</label>
                     </div>
                     
                     <h5 className="container-checkboxLabel" style={{marginTop: '12px'}}>Gênero</h5>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Masculino</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Feminino</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="checkbox" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Unisex</label>
                     </div>

                     <h5 className="container-checkboxLabel" style={{marginTop: '12px'}}>Estado</h5>
                     <div className="container-checkboxLabel">
                        <input type="radio" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Novo</label>
                     </div>
                     <div className="container-checkboxLabel">
                        <input type="radio" name="" className="checkboxFiltro" />
                        <label htmlFor="" className="labelCheckboxFiltro">Usado</label>
                     </div>

                     
                </div>
                
                              
                                <div id="container-vertical">
                                    <section id="list-productsPage">
                
                                       <div id="container-list-1">
                                            <div id="list-pPage1">
                                                <button>30% OFF</button>
                                                <img src={productsHome} alt="" />              
                                            </div>
                                            <h6 id="title-list-1">Tênis</h6>
                                            <h3 id="name-product-1">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                       </div>
                
                                        <div id="container-list-2">
                                            <div id="list-pPage2">
                                                <button>30% OFF</button>
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-2">Tênis</h6>
                                            <h3 id="name-product-2">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                   
                                        <div id="container-list-3">
                                            <div id="list-pPage3">
                                               <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-3">Tênis</h6>
                                            <h3 id="name-product-3">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        
                                        <div id="container-list-4">
                                            <div id="list-pPage4">
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-4">Tênis</h6>
                                            <h3 id="name-product-4">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                
                                        <div id="container-list-5">
                                            <div id="list-pPage5">
                                                 <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-5">Tênis</h6>
                                            <h3 id="name-product-5">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                            
                                        <div id="container-list-6">
                                            <div id="list-pPage6">
                                                 <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-6">Tênis</h6>
                                            <h3 id="name-product-6">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                
                                        <div id="container-list-7">
                                            <div id="list-pPage7">
                                                 <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-7">Tênis</h6>
                                            <h3 id="name-product-pPage7">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                      
                                        <div id="container-list-8">
                                            <div id="list-pPage8" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>

                                        <div id="container-list-8">
                                            <div id="list-pPage9" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        
                                        <div id="container-list-8">
                                            <div id="list-pPage10" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        <div id="container-list-8">
                                            <div id="list-pPage10" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        <div id="container-list-8">
                                            <div id="list-pPage10" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        <div id="container-list-8">
                                            <div id="list-pPage8" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        <div id="container-list-8">
                                            <div id="list-pPage8" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        <div id="container-list-8" style={{marginBottom: '100px'}}>
                                            <div id="list-pPage8" >
                                                <img src={productsHome} alt="" />
                                            </div>
                                            <h6 id="title-list-8">Tênis</h6>
                                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                                        </div>
                                        
                                        
                                    
                                </section>
                                </div>
            </div>
        </div>
    );
}
 
export default Produtos;