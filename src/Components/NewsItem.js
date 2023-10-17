import React from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge bg-secondary">{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              className="btn btn-sm btn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );

}

export default NewsItem;
