import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAccountByUsername, getItemById } from "../mongo/Mongo-Functions";
import ItemComponent from "./ItemComponent";
import "../styles/category.css";
import instagramLogo from "/general-images/socials/Instagram_logo.png";
import facebookLogo from "/general-images/socials/Facebook_logo.png";
import twitterLogo from "/general-images/socials/Twitter_logo.png";

const SellerPage = () => {
  const { username } = useParams();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentItems, setCurrentItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);

  const fetchItems = async (itemIds) => {
    return Promise.all(itemIds.map((id) => getItemById(id)));
  };

  useEffect(() => {
    getAccountByUsername(username)
      .then(async (fetchedAccount) => {
        if (fetchedAccount) {
          setAccount(fetchedAccount);

          // Now that account is set, fetch items
          if (
            fetchedAccount.currentListing_ids &&
            fetchedAccount.pastListing_ids
          ) {
            const fetchedCurrentItems = await fetchItems(
              fetchedAccount.currentListing_ids
            );
            const fetchedSoldItems = await fetchItems(
              fetchedAccount.pastListing_ids
            );
            setCurrentItems(fetchedCurrentItems);
            setSoldItems(fetchedSoldItems);
          } else {
            throw new Error("account's items not found");
          }
        } else {
          throw new Error("account account not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching account's items:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username, account]);

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="category-page-container" style={{ paddingTop: "20px" }}>
      <Link
          to="#"
          className="back-link"
          onClick={() => window.history.back()}
        >
          &lt; Back
        </Link>
      <h1 style={{marginTop: "30px", marginLeft: "8.5rem"}}>{username}'s Shop</h1>

      {account && (
        <div className="account-info">
          <div className="profile-container">
          <p style={{fontSize: "20px", marginTop: "25px"}}>
            <img
              className="profile-photo"
              src={"../../data/photos/" + account.profilePhotoFilename}
              alt={account.fullname}
              style={{marginBottom: "-12px"}}
            />
            {account.fullname}</p>
          </div>
          <div>
            <p>Contact me at:
              💌&nbsp;
              <a href={`mailto:${account.contactInformation.email}`}>
                {account.contactInformation.email}
              </a>
              &nbsp; · &nbsp;
              {account.contactInformation["phone number"] && (
                <>
                  📞&nbsp;
                  <a href={`tel:${account.contactInformation["phone number"]}`}>
                    {account.contactInformation["phone number"]}
                  </a>
                  &nbsp; · &nbsp;
                </>
              )}
              {account.contactInformation.instagram && (
                <>
                  <img
                    src={instagramLogo}
                    alt={"Instagram logo"}
                    style={{
                      width: "23px",
                      height: "23px",
                      marginBottom: "-6px",
                    }} // Adjust the width and height as needed
                  />
                  &nbsp;
                  <a
                    href={`https://www.instagram.com/${account.contactInformation.instagram}`}
                  >
                    @{account.contactInformation.instagram}
                  </a>
                </>
              )}
              {account.contactInformation.facebook && (
                <>
                  <img
                    src={facebookLogo}
                    alt={"Facebook logo"}
                    style={{
                      width: "23px",
                      height: "23px",
                      marginBottom: "-6px",
                    }} // Adjust the width and height as needed
                  />
                  &nbsp;
                  <a href={`tel:${account.contactInformation.facebook}`}>
                    @{account.contactInformation.facebook}
                  </a>
                  &nbsp; · &nbsp;
                </>
              )}
              {account.contactInformation.twitter && (
                <>
                  <img
                    src={twitterLogo}
                    alt={"Twitter logo"}
                    style={{
                      width: "23px",
                      height: "20px",
                      marginBottom: "-7px",
                    }} // Adjust the width and height as needed
                  />
                  &nbsp;
                  <a href={`tel:${account.contactInformation.twitter}`}>
                    @{account.contactInformation.twitter}
                  </a>
                  &nbsp; · &nbsp;
                </>
              )}
            </p>
          </div>
          <hr style={{ margin: '30px 0 25px 6rem', borderColor: 'gray', borderWidth: '2px', width: '80%' }} />
          <div>
            <p>{account.bio}</p>
          </div>
        </div>
      )}
      <div className="account-items-list">
      {currentItems.length > 0 && (
        <>
          <h2>Current Listings</h2>
          <div className="items-grid" style={{marginLeft: "7rem", marginRight: "7rem"}}>
            {currentItems.map((item) => (
              <ItemComponent key={item._id} item={item} />
            ))}
          </div>
        </>
      )}

      {soldItems.length > 0 && (
        <>
          <h2>Sold Items</h2>
          <div className="items-grid" style={{marginLeft: "7rem", marginRight: "7rem"}}>
            {soldItems.map((item) => (
              <ItemComponent key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default SellerPage;
