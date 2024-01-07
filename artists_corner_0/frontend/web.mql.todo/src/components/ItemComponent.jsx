import "../styles/items.css";
import { Link } from "react-router-dom";

const ItemComponent = ({ item }) => {
  const mainImageSrc =
    item.photoFilenames.length > 0 ? item.photoFilenames[0] : null;

  return (
    <div
      className="item-card"
      style={{
        backgroundColor: item.ifSold ? "rgb(224, 224, 224)" : "white",
      }}
    >
      <Link to={`/item/${item._id}`}>
        {mainImageSrc && <img src={mainImageSrc} alt={item.title} />}
        <p>
          <b>{item.title}</b>
        </p>
        <div className="price-container">
          <p className="price">${item.price}</p>
          {item.ifSold && <div className="ribbon">Sold</div>}
        </div>
      </Link>
      <p>
        by <Link to={`/user/${item.seller}`}>{item.seller}</Link>
      </p>
    </div>
  );
};

export default ItemComponent;
