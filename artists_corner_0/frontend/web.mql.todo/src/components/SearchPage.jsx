import { useState, useEffect } from "react";
import {
  searchItems,
  sortPriceLowToHighHelper,
  sortByPriceHighToLowHelper,
  sortMostToLeastRecentHelper,
  sortLeastToMostRecentHelper,
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

  const [allSearchItems, setAllSearchItems] = useState([]);
  const [unsortedItems, setUnsortedItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedSort, setSelectedSort] = useState("reset");

  const fetchItems = async () => {
    try {
      const [masterItems, soldItems] = await searchItems(searchString);
      const combinedItems = [...masterItems, ...soldItems];

      setAllSearchItems(combinedItems);
      setUnsortedItems(combinedItems);
      setCurrentItems(combinedItems);

      const categoriesSet = new Set(combinedItems.map((item) => item.category));
      setCategories(categoriesSet);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  useEffect(() => {
    fetchItems();
    if (ifClicked) {
      setSearchString("")
      setIfClicked(false);
    }
  }, [searchString, ifClicked]);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    if (category && category !== "reset") {
      const categoryItems = allSearchItems.filter(
        (item) => category === item.category
      );

      setUnsortedItems(categoryItems);
      setCurrentItems(categoryItems);
    } else {
      setUnsortedItems(allSearchItems);
      setCurrentItems(allSearchItems);
    }
  };

  const handleSort = async (sort) => {
    setSelectedSort(sort); // Update selectedSort state

    if (sort !== "reset") {
      sortItemsByOption(sort);
    } else {
      setCurrentItems(unsortedItems);
    }
  };

  const sortItemsByOption = (sort) => {
    let combinedItems = [];

    switch (sort) {
      case "lowToHigh":
        combinedItems = sortPriceLowToHighHelper(currentItems);
        break;

      case "highToLow":
        combinedItems = sortByPriceHighToLowHelper(currentItems);
        break;

      case "mostRecent":
        combinedItems = sortMostToLeastRecentHelper(currentItems);
        break;

      case "leastRecent":
        combinedItems = sortLeastToMostRecentHelper(currentItems);
        break;

      default:
        return unsortedItems;
    }

    setCurrentItems(combinedItems);
    return combinedItems;
  };

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
            {currentItems.map((item) => (
              <ItemComponent key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
