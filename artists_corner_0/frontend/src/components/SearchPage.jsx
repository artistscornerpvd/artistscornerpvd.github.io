import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  searchItems,
  sortPriceLowToHigh,
  sortPriceHighToLow,
  sortMostToLeastRecent,
  sortLeastToMostRecent,
} from "../mongo/Mongo-Functions";
import ItemComponent from "./ItemComponent";
import "../styles/category.css";

const SearchPage = ({
  searchString,
  setSearchString,
  ifClicked,
  setIfClicked,
}) => {
  const [categories, setCategories] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const [allSearchMasterItems, setAllSearchMasterItems] = useState([]);
  const [allSearchSoldItems, setAllSearchSoldItems] = useState([]);
  const [masterItemList, setMasterItemList] = useState([]);
  const [soldItemList, setSoldItemList] = useState([]);
  const [unsortedMasterItems, setUnsortedMasterItems] = useState([]);
  const [unsortedSoldItems, setUnsortedSoldItems] = useState([]);
  const [selectedSort, setSelectedSort] = useState("reset");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // Extract everything after "keywords="
  const keywordsParam = searchParams.get("keywords");

  const fetchItems = async () => {
    try {
      const [masterItems, soldItems] = await searchItems(keywordsParam);
      const combinedItems = [...masterItems, ...soldItems];

      setAllSearchMasterItems(masterItems);
      setAllSearchSoldItems(soldItems);
      setUnsortedMasterItems(masterItems);
      setUnsortedSoldItems(soldItems);
      setMasterItemList(masterItems);
      setSoldItemList(soldItems);

      const categoriesSet = new Set(combinedItems.map((item) => item.category));
      setCategories(categoriesSet);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // Reset filter and sort options when a new search is initiated
    if (ifClicked && location.search && keywordsParam) {
      fetchItems();
      setSelectedCategory(""); // Reset selected category
      setSelectedSort("reset"); // Reset selected sort
    }

    if (ifClicked) {
      setSearchString("");
      setIfClicked(false);
    }
  }, [location, keywordsParam, searchString, ifClicked]);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);

    let categoryMasterItems, categorySoldItems;

    if (category && category !== "reset") {
      categoryMasterItems = allSearchMasterItems.filter(
        (item) => category === item.category
      );
      categorySoldItems = allSearchSoldItems.filter(
        (item) => category === item.category
      );
    } else {
      categoryMasterItems = allSearchMasterItems;
      categorySoldItems = allSearchSoldItems;
    }

    // Set the selected sort to "reset" when a new category is clicked
    setSelectedSort("reset");

    const sortedItems = sortItemsByOption(
      selectedSort,
      categoryMasterItems,
      categorySoldItems
    );

    setUnsortedMasterItems(categoryMasterItems);
    setUnsortedSoldItems(categorySoldItems);
    setMasterItemList(sortedItems[0]);
    setSoldItemList(sortedItems[1]);
  };

  // Use useEffect to handle state updates after they are completed
  useEffect(() => {
    const sortedItems = sortItemsByOption(
      selectedSort,
      unsortedMasterItems,
      unsortedSoldItems
    );

    setMasterItemList(sortedItems[0]);
    setSoldItemList(sortedItems[1]);
  }, [selectedSort, unsortedMasterItems, unsortedSoldItems]);

  const handleSort = async (sort) => {
    setSelectedSort(sort); // Update selectedSort state

    if (sort !== "reset") {
      const sortedItems = sortItemsByOption(sort, masterItemList, soldItemList);
      setMasterItemList(sortedItems[0]);
      setSoldItemList(sortedItems[1]);
    } else {
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
        return [unsortedMasterItems, unsortedSoldItems];
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
    <div>
      <div className="category-page-container">
        <h1>Search</h1>
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
            {[...categories].map((cat) => (
              <button
                key={cat}
                aria-label={cat}
                title={cat}
                className={`tag ${selectedCategory === cat ? "selected" : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
            {selectedCategory && (
              <button
                className="reset-filter"
                onClick={() => handleCategoryClick("reset")}
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
    </div>
  );
};

export default SearchPage;
