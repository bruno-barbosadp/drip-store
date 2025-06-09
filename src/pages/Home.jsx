import './Home.css'
import mainHome from '../assets/main-home.png'

const Home = () => {
    return (
        <div id='page-home'>
           <div id="slide-home">
              <img style={{width: '400px'}} src={mainHome} alt="" />
           </div>
        </div>
    );
}

export default Home;