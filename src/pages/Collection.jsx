import collection1 from "../assets/collection-1.png"
import collection2 from "../assets/collection-2.png"
import collection3 from "../assets/collection-3.png"
import "./Collection.css"

const Collection = () => {
    return (
        <div id="collection-container">
            <h4>Coleções em destaque</h4>
            <div className="collection-images">
                {[collection1, collection2, collection3].map((imgSrc, idx) => (
                <div key={idx} className="image-card">
                    <img src={imgSrc} alt={`Coleção ${idx + 1}`} />
                    <button className="buy-btn">Comprar</button>
                </div>
                ))}
            </div>
        </div>

    );
}
 
export default Collection;