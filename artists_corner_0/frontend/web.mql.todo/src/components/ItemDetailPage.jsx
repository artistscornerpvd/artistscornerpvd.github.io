import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemById, getAccountByUsername } from "../mongo/Mongo-Functions";
import { BSON } from "mongodb-stitch-browser-sdk";
import "../styles/items.css";
import instagramLogo from "../images/socials/Instagram_logo.png";
import facebookLogo from "../images/socials/Facebook_logo.png";
import twitterLogo from "../images/socials/Twitter_logo.png";


const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      } finally {
        setLoading(false);
      }
    };

    fetchItemAndSeller();
  }, [itemId]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : item.photoFilenames.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < item.photoFilenames.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (loading) {
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
          to="#"
          className="back-link"
          onClick={() => window.history.back()}
        >
          &lt; Back
        </Link>
        <section style={{ display: "flex", margin: "3rem 0 7rem 12rem" }}>
        {item.photoFilenames.length > 1 ? (
            <div className="slideshow-container">
              <button className="prev-btn" onClick={handlePrevImage}>
                &#10094;
              </button>
              <img
                className="card-image"
                src={item.photoFilenames[currentImageIndex]}
                alt={item.title}
              />
              <button className="next-btn" onClick={handleNextImage}>
                &#10095;
              </button>
            </div>
          ) : (
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
                src={"/data/photos/" + seller.profilePhotoFilename}
                alt={seller.username}
              />
              <Link to={`/user/${seller.username}`}>{seller.username}</Link>
            </div>

            <h2 style={{ margin: "0rem" }}>{item.title}</h2>
            <h3 style={{ margin: "0rem" }}>
              {" "}
              <div className="price-container">
                <p className="price">${item.price.toFixed(2)}</p>
                {item.ifSold && (
                  <div
                    className="ribbon"
                    style={{ height: "25px", marginLeft: "15px" }}
                  >
                    Sold
                  </div>
                )}
              </div>
            </h3>
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
                  <img
                    src={instagramLogo}
                    alt={"Instagram logo"}
                    style={{
                      width: "23px",
                      height: "23px",
                      marginBottom: "-6px",
                    }} // Adjust the width and height as needed
                  /> &nbsp;
                  <a
                    href={`https://www.instagram.com/${seller.contactInformation.instagram}`}
                  >
                    @{seller.contactInformation.instagram}
                  </a>
                </p>
              )}
              {seller.contactInformation.facebook && (
                <p>
                   <img
                    src={facebookLogo}
                    alt={"Facebook logo"}
                    style={{
                      width: "21px",
                      height: "21px",
                      marginBottom: "-5px",
                    }} // Adjust the width and height as needed
                  /> &nbsp;
                  <a
                    href={`https://www.facebook.com/${seller.contactInformation.facebook}`}
                  >
                    @{seller.contactInformation.facebook}
                  </a>
                </p>
              )}
              {seller.contactInformation.twitter && (
                <p>
                  <img
                    src={twitterLogo}
                    alt={"Twitter logo"}
                    style={{
                      width: "23px",
                      height: "20px",
                      marginBottom: "-7px",
                    }} // Adjust the width and height as needed
                  /> &nbsp;
                  <a
                    href={`https://www.twitter.com/${seller.contactInformation.twitter}`}
                  >
                    @{seller.contactInformation.twitter}
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
