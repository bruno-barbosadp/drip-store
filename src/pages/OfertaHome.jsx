import "./OfertaHome.css";
import ofertaHome from "../assets/oferta-products-home.png";
import { Link } from "react-router-dom";

const OfertaHome = () => {

  return (
    <div id="container-ofertahome">
      <div id="esfera-oferta">
        <img src={ofertaHome} alt="Oferta" />
      </div>
      <div id="container-descripition">
         <p id="paragraph-title">Oferta especial</p> 
         <h1 id="title-oferta-product">Air Jordan edição de <br /> colecionador</h1>
         <p id="text-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. At <br />  tempore, ipsam incidunt dolorem quae iste distinctio nihil  <br /> sit, reiciendis adipisci, cumque tempora! Unde debitis, quos  <br /> numquam adipisci ad quod dolor.</p>
         <Link to={"/produtos"}><button>Ver Oferta</button></Link>
         
      </div>
    </div>
  );
};

export default OfertaHome;
