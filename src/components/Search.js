import { useState, useEffect } from "react";
import { filteredRestaurants } from "../utils/helpers";
import { Link } from "react-router-dom";

const Search = ({ restaurants, actualData, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleOnsubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (searchText === "") {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      const data = filteredRestaurants(searchText, actualData);
      setSuggestions(data);
    }, 200);

    return () => {
      return clearTimeout(timer);
    };
  }, [searchText]);

  const handleOnchange = (e) => {
    setSearchText(e.target.value);
  };
  const handelOnBlur = () => {
    const timer = setTimeout(() => {
      setSuggestions([]);
      clearTimeout(timer);
    }, 300);
  };
  return (
    <div className="bg-search-bg bg-gray-900 mb-5">
      <div className="w-full m-0 md:w-4/5 md:m-auto py-3 flex h-64 justify-evenly items-center flex-col md:flex-row">
        <h1 className="w-full pl-3 font-bold text-5xl text-white">
          Find restaurants near you..
        </h1>

        <form
          className=" md:text-right w-full  py-2 text-xl relative"
          onSubmit={handleOnsubmit}
        >
          <input
            type="text"
            className="p-2 border-2 md:w-full w-4/5  mx-2 md:mx-0  outline-none  md:border-r-0 "
            placeholder="Search restaurants.."
            autoFocus={true}
            onChange={handleOnchange}
            onBlur={handelOnBlur}
            value={searchText}
          />
          <div className=" bg-white absolute md:w-full w-4/5 mx-2 md:mx-0 ">
            {suggestions &&
              suggestions.map((suggestion) => {
                return (
                  <button
                    key={suggestion?.data?.id}
                    className="w-full text-start p-2 hover:bg-gray-300"
                  >
                    <Link to={"/restaurant/" + suggestion?.info.id}>
                      <p>{suggestion?.info.name}</p>
                    </Link>
                  </button>
                );
              })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
