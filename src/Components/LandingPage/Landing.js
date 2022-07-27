import React, { useEffect, useState } from "react";
import EmptyView from "./common/EmptyView";
import FilterPanel from "./Home/FilterPanel";
import List from "./Home/List";
import SearchBar from "./Home/SearchBar";
import { dataList } from "./constants";
import "./styles.css";

const Landing = () => {
  const host = "http://localhost:5000";
  const businessesInitial = [];
  const [businesses, setBusinesses] = useState(businessesInitial);

  // Get all Businesses
  const getBusinesses = async () => {
    // API Call
    const response = await fetch(`${host}/api/business/getownbusinesses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    const businesses = JSON.parse(JSON.stringify(json));
    setBusinesses(businesses);
  };

  const [selectedRating, setSelectedRating] = useState(null);

  const [categories, setcategories] = useState([
    { id: 1, checked: false, label: "Restaurant" },
    { id: 2, checked: false, label: "AutoShop" },
    { id: 3, checked: false, label: "HomeService" },
  ]);

  const [list, setList] = useState(businesses);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const categoriesStateList = categories;
    const changeCheckedcategories = categoriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setcategories(changeCheckedcategories);
  };

  const applyFilters = () => {
    // let updatedList = dataList;
    let updatedList = businesses;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // category Filter
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoriesChecked.length) {
      console.log(categoriesChecked);
      console.log(updatedList);
      updatedList = updatedList.filter((item) =>
        categoriesChecked.includes(item.category.toLowerCase())
      );
      console.log(updatedList);
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.business_name
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    getBusinesses();
    applyFilters();
    console.log(list);
  }, [selectedRating, categories, searchInput]);

  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className="home_panelList-wrap">
        {/* Filter Panel */}
        <div className="home_panel-wrap">
          <FilterPanel
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            categories={categories}
            changeChecked={handleChangeChecked}
          />
        </div>
        {/* List & Empty View */}
        <div className="home_list-wrap">
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Landing;
