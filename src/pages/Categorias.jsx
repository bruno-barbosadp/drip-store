import { useNavigate } from "react-router-dom";
import "./Categorias.css"

const Categorias = () => {

    const navigate = useNavigate();

    const handleCategory = (e) => {
        e.preventDefault();
        // Aqui poderia incluir lógica de cadastro real
        navigate('/'); // ou outra página
    };

    return (
        <div className="container-category">
            <h1>Ops, produto não encontrado!</h1>
            <button onClick={handleCategory} className="btn-category">Voltar</button>
        </div>
    );
}
 
export default Categorias;