import { useState } from "react";
import ResaultCard from "../components/resultCard";

const Search = () => {
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e81f6a0e15796f373528fd8ff8ea7da1&language=en-US&query=${e.target.value}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((result) => setSearch(result.results));
  };

  return (
    <div className="input">
      <i>
        {" "}
        <img src="/search.svg" alt="" />
      </i>
      <input type="text" placeholder="Find Movie..." onChange={handleSearch} />
      <div
        className="results"
        style={{
          width: "300px",
          maxHeight: "500px",
          backgroundColor: "#384763",
          position: "absolute",
          zIndex: "4",
          top: "38px",
          right: "0",
          overflow: "scroll",
          borderRadius: "10px",
          overflowX: "hidden",
        }}
      >
        {search
          ? search.map((item) => (
              <ResaultCard
                img={`http://image.tmdb.org/t/p/w185${item.poster_path}`}
                name={item.title}
                overview={item.overview}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Search;
