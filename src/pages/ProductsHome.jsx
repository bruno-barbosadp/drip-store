import { Link } from "react-router-dom";
import "./ProductsHome.css"
import productsHome from "../assets/products-home.png"

const ProductsHome = () => {
    return (
        <div id="container-productshome">
           <div id="header-productshome">
                <h4 id="title-productshome">Produtos em alta</h4>
                <Link to={"/produtos"} id="link-productshome">Ver mais →</Link>
           </div>
              
                <div id="container-vertical">
                    <section id="list-products">

                       <div id="container-list-1">
                            <div id="list-1">
                                <button>30% OFF</button>
                                <img src={productsHome} alt="" />              
                            </div>
                            <h6 id="title-list-1">Tênis</h6>
                            <h3 id="name-product-1">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                       </div>

                        <div id="container-list-2">
                            <div id="list-2">
                                <button>30% OFF</button>
                                <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-2">Tênis</h6>
                            <h3 id="name-product-2">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>
                   
                        <div id="container-list-3">
                            <div id="list-3">
                               <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-3">Tênis</h6>
                            <h3 id="name-product-3">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>
                        
                        <div id="container-list-4">
                            <div id="list-4">
                                <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-4">Tênis</h6>
                            <h3 id="name-product-4">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>

                        <div id="container-list-5">
                            <div id="list-5">
                                 <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-5">Tênis</h6>
                            <h3 id="name-product-5">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>
                            
                        <div id="container-list-6">
                            <div id="list-6">
                                 <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-6">Tênis</h6>
                            <h3 id="name-product-6">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>

                        <div id="container-list-7">
                            <div id="list-7">
                                 <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-7">Tênis</h6>
                            <h3 id="name-product-7">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>
                      
                        <div id="container-list-8">
                            <div id="list-8" >
                                <img src={productsHome} alt="" />
                            </div>
                            <h6 id="title-list-8">Tênis</h6>
                            <h3 id="name-product-8">K-Swiss V8 - Masculino</h3>
                            <h3><s style={{color: '#8F8F8F'}}>$200</s>   <b>$100</b></h3>
                        </div>
                    
                </section>
                </div>
              
        </div>
    );
}
 
export default ProductsHome;