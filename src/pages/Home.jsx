import './Home.css'
import mainHome from '../assets/main-home.png'
import Carrossel from './Carrossel';
import Collection from './Collection';
import ProductsHome from './ProductsHome';
import OfertaHome from './OfertaHome';



const Home = () => {
    
    return (
        
        <>
            <Carrossel/>
            <Collection/>
            <ProductsHome/>
            <OfertaHome/>
        </>
        
        
    );
}

export default Home;