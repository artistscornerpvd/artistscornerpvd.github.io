import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getItemsByCategory,
  sortPriceLowToHigh,
  sortPriceHighToLow,
  sortMostToLeastRecent,
  sortLeastToMostRecent,
  getItemsByCategoryAndSubcategory,
} from "../mongo/Mongo-Functions";
import ItemComponent from "./ItemComponent";
import "../styles/category.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [masterItemList, setMasterItemList] = useState([]);
  const [soldItemList, setSoldItemList] = useState([]);
  const [unsortedMasterItems, setUnsortedMasterItems] = useState([]);
  const [unsortedSoldItems, setUnsortedSoldItems] = useState([]);
  const [subcategories, setSubcategories] = useState(new Set());
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("reset");
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const [masterItems, soldItems] = await getItemsByCategory(categoryName);
      setUnsortedMasterItems(masterItems);
      setUnsortedSoldItems(soldItems);
      setMasterItemList(masterItems);
      setSoldItemList(soldItems);
      const combinedItems = [...masterItems, ...soldItems];

      const subcategoriesSet = new Set(
        combinedItems.map((item) => item.subcategory)
      );

      setSubcategories(subcategoriesSet);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [categoryName]);

  const handleSubcategoryClick = async (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedSort("reset"); // Reset the sorting when a new subcategory is clicked

    if (subcategory) {
      const [masterItems, soldItems] = await getItemsByCategoryAndSubcategory(
        categoryName,
        subcategory
      );

      // Apply sorting based on the selected sort option
      const sortedItems = sortItemsByOption(
        selectedSort,
        masterItems,
        soldItems
      );

      setMasterItemList(sortedItems[0]);
      setSoldItemList(sortedItems[1]);
    } else {
      // Reset to all items in the category
      fetchItems();
    }
  };

  const handleSort = async (selectedValue) => {
    setSelectedSort(selectedValue);

    if (selectedValue !== "reset") {
      // Apply sorting to the current items in state
      const sortedItems = sortItemsByOption(
        selectedValue,
        masterItemList,
        soldItemList
      );

      setMasterItemList(sortedItems[0]);
      setSoldItemList(sortedItems[1]);
    } else {
      // Reset to the unsorted items
      setMasterItemList(unsortedMasterItems);
      setSoldItemList(unsortedSoldItems);
    }
  };

  const sortItemsByOption = (sort, masterItems, soldItems) => {
    let combinedItems = [];

    switch (sort) {
      case "lowToHigh":
        combinedItems = sortPriceLowToHigh([masterItems, soldItems]);
        break;

      case "highToLow":
        combinedItems = sortPriceHighToLow([masterItems, soldItems]);
        break;

      case "mostRecent":
        combinedItems = sortMostToLeastRecent([masterItems, soldItems]);
        break;

      case "leastRecent":
        combinedItems = sortLeastToMostRecent([masterItems, soldItems]);
        break;

      default:
        return [masterItems, soldItems];
    }

    return combinedItems;
  };

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="category-page-container">
      <h1>{categoryName}</h1>

      <div className="sort-dropdown">
        {/* Include style for select to manuall change backgroun-color based on selected sort 
        (gray when reset and blue for rest) */}
        <select
          value={selectedSort}
          onChange={(e) => handleSort(e.target.value)}
          style={{
            backgroundColor:
              selectedSort === "reset"
                ? "rgb(238, 238, 238)"
                : "rgb(223, 227, 255)",
          }}
        >
          <option value="reset">Reset Sort</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
          <option value="mostRecent">Most Recent</option>
          <option value="leastRecent">Least Recent</option>
        </select>
      </div>
      <div className="subcategory-items-container">
        <div data-testid="subcategory-tags" className="subcategory-tags">
          {[...subcategories].map((subcat) => (
            <button
              key={subcat}
              aria-label={subcat}
              title={subcat}
              className={`tag ${
                selectedSubcategory === subcat ? "selected" : ""
              }`}
              onClick={() => handleSubcategoryClick(subcat)}
            >
              {subcat}
            </button>
          ))}
          {selectedSubcategory && (
            <button
              className="reset-filter"
              onClick={() => handleSubcategoryClick("")}
            >
              reset filter
            </button>
          )}
        </div>
        <div className="items-grid">
          {[...masterItemList, ...soldItemList].map((item) => (
            <ItemComponent key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
