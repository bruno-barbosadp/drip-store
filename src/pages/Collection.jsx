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
                    <button className="desconto-btn">30% OFF</button>
                </div>
                ))}
            </div>
            <div id="collection-container2">
                <h4 className="title-collection-container2">Coleções em destaque</h4>
            </div>
            <div id="collection-items">
  <div class="btn-wrapper">
    <button id="btn-1" class="btn-category">
      <img src="https://cdn-icons-png.flaticon.com/512/2290/2290517.png" alt="" />
    </button>
    <span id="btn-label">Camisetas</span>
  </div>

  <div class="btn-wrapper">
    <button id="btn-2" class="btn-category">
      <img src="https://cdn-icons-png.flaticon.com/512/750/750453.png" alt="" />
    </button>
    <span id="btn-label">Calças</span>
  </div>

  <div class="btn-wrapper">
    <button id="btn-3" class="btn-category">
      <img src="https://cdn-icons-png.flaticon.com/512/2362/2362495.png" alt="" />
    </button>
    <span id="btn-label">Bonés</span>
  </div>

  <div class="btn-wrapper">
    <button id="btn-4" class="btn-category">
      <img src="https://cdn-icons-png.flaticon.com/512/1083/1083461.png" alt="" />
    </button>
    <span id="btn-label">Headphones</span>
  </div>

  <div class="btn-wrapper">
    <button id="btn-5" class="btn-category">
      <img src="https://cdn-icons-png.flaticon.com/512/2043/2043907.png" alt="" />
    </button>
    <span id="btn-label">Tênis</span>
  </div>
</div>

        </div>

    );
}
 
export default Collection;