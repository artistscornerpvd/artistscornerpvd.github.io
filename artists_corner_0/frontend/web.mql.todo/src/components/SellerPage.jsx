import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getAccountByUsername,
  getItemById,
  getItemListById,
} from "../mongo/Mongo-Functions";
import ItemComponent from "./ItemComponent";
import "../styles/category.css";

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
          if (fetchedAccount.currentListing_ids && fetchedAccount.pastListing_ids) {
            const fetchedCurrentItems = await fetchItems(fetchedAccount.currentListing_ids);
            const fetchedSoldItems = await fetchItems(fetchedAccount.pastListing_ids);
            setCurrentItems(fetchedCurrentItems);
            setSoldItems(fetchedSoldItems);
          } else {
            throw new Error("Seller's items not found");
          }
        } else {
          throw new Error("Seller account not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching seller's items:", error);
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
    <div className="category-page-container">
      <h1>{username}'s Shop</h1>

      {account && (
        <div>
          <p>Hi, I'm {account.fullname} 👋.</p>
          <p>{account.bio}</p>
        </div>
      )}

      {currentItems.length > 0 && (
        <>
          <h2>Current Listings</h2>
          <div className="items-grid">
            {currentItems.map((item) => (
              <ItemComponent key={item._id} item={item} />
            ))}
          </div>
        </>
      )}

      {soldItems.length > 0 && (
        <>
          <h2>Sold Items</h2>
          <div className="items-grid">
            {soldItems.map((item) => (
              <ItemComponent key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SellerPage;
