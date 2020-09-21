const Card = ({ img, name, overview, release_date }) => {
  return (
    <div className="card">
      <img src={`http://image.tmdb.org/t/p/w185${img}`} alt="" />
      <div className="overlay">
        <small className="date">{release_date}</small>
        <br />
        <small>{overview}</small>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
