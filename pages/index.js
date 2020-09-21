import { useState, useEffect } from "react";
//components import
import Card from "../components/card";
import Cover from "../components/cover";
import Search from "../components/search";

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [cover, setCover] = useState("");
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e81f6a0e15796f373528fd8ff8ea7da1&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((result) => setTopRated(result.results));

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e81f6a0e15796f373528fd8ff8ea7da1&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((result) => setMostPopular(result.results));

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=e81f6a0e15796f373528fd8ff8ea7da1&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((result) => {
        setUpcoming(result.results);
        setCover({
          img: `http://image.tmdb.org/t/p/original${result.results[0].backdrop_path}`,
          title: result.results[0].title,
          year: result.results[0].release_date,
          popularity: result.results[0].popularity,
        });
      });
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src="/logo.svg" alt="" />
            <Search />
          </nav>
        </div>
      </header>
      <main>
        <Cover
          count={count}
          setCount={setCount}
          cover={cover}
          setCover={setCover}
          upcoming={upcoming}
        />
        <section className="grid">
          <div className="container">
            <div className="top-rated">
              <h1>Top Rated</h1>
              <div className="cards">
                {topRated.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      img={item.poster_path}
                      name={item.title}
                      overview={item.overview}
                      release_date={item.release_date}
                    />
                  );
                })}
              </div>
            </div>
            <div className="most-popular">
              <h1>Most Popular</h1>
              <div className="cards">
                {mostPopular.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      img={item.poster_path}
                      name={item.title}
                      overview={item.overview}
                      release_date={item.release_date}
                    />
                  );
                })}
              </div>
            </div>
            <div className="upcoming">
              <h1>Upcoming</h1>
              <div className="cards">
                {upcoming.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      img={item.poster_path}
                      name={item.title}
                      overview={item.overview}
                      release_date={item.release_date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
