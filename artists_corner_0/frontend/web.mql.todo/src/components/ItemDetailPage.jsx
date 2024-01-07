import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemById, getAccountByUsername } from "../mongo/Mongo-Functions";
import { BSON } from "mongodb-stitch-browser-sdk";
import "../styles/items.css";
//import Account from "../models/account";

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchItemAndSeller = async () => {
      try {
        const fetchedItem = await getItemById(new BSON.ObjectId(itemId));
        if (fetchedItem) {
          setItem(fetchedItem);
          const fetchedSeller = await getAccountByUsername(fetchedItem.seller);
          setSeller(fetchedSeller);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemAndSeller();
  }, [itemId]);

  if (!item || !seller) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="content animated" style={{ paddingTop: "20px" }}>
        <Link
          to={`/category/${
            item.category.charAt(0).toUpperCase() + item.category.slice(1)
          }`}
          className="back-link"
        >
          {/* Add back arrow or text, customize as needed */}
          &lt; Back
        </Link>
        <section style={{ display: "flex", margin: "3rem 0 7rem 12rem" }}>
          {item.photoFilenames.length > 0 && (
            <img
              className="card-image"
              src={item.photoFilenames[0]}
              alt={item.title}
            />
          )}

          <div
            className="about"
            style={{
              maxWidth: "26rem",
              backgroundColor: "#f8f8f8",
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <div className="profile-container">
              <img
                className="profile-photo"
                src={"../../data/photos/" + seller.profilePhotoFilename}
                alt={seller.fullname}
              />
              <a href={`/user/${seller.username}`}>{seller.fullname}</a>
            </div>

            <h2 style={{ margin: "0rem" }}>{item.title}</h2>
            <h3 style={{ margin: "0rem" }}>${item.price}</h3>
            <p style={{ marginBottom: "0.8rem" }}>{item.description}</p>
            <hr />

            <div>
              <p>
                <b>Contact</b>
              </p>
              <p>
                💌 &nbsp;
                <a href={`mailto:${seller.contactInformation.email}`}>
                  {seller.contactInformation.email}
                </a>
              </p>
              {seller.contactInformation["phone number"] && (
                <p>
                  📞 &nbsp;
                  <a href={`tel:${seller.contactInformation["phone number"]}`}>
                    {seller.contactInformation["phone number"]}
                  </a>
                </p>
              )}
              {seller.contactInformation.instagram && (
                <p>
                  IG: &nbsp;
                  <a
                    href={`https://www.instagram.com/${seller.contactInformation.instagram}`}
                  >
                    @{seller.contactInformation.instagram}
                  </a>
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetailPage;
