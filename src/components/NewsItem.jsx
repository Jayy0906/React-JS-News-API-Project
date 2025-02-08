import defaultImg from "../assets/3.jpg";

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card p-3 my-3 mx-3" style={{ maxWidth: "340px" }}>
      <img
        src={src ? src : defaultImg}
        className="card-img-top"
        alt="News Thumbnail"
        style={{
          borderRadius: "8px",
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 55) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 80) + "..."
            : "No description available."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
