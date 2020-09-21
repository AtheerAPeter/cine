const ResultCard = ({ img, name, overview }) => {
  return (
    <>
      <div
        className="result-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            height: "120px",
            objectFit: "cover",
            borderRadius: "10px",
            marginRight: "10px",
          }}
        />
        <p style={{ fontWeight: "400", fontSize: "0.9rem" }}>{name}</p>
      </div>
      <div
        style={{
          overflow: "hidden",
          borderBottom: "2px solid rgba(0,0,0,.2)",
          paddingBottom: "10px",
        }}
        className="overview-search"
      >
        <p style={{ fontWeight: "200", fontSize: "0.8rem" }}>{overview}</p>
      </div>
    </>
  );
};

export default ResultCard;
