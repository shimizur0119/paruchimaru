import React from "react"

const Search__item = ({
  img,
  co,
  authors,
  title,
  releaseDate,
  description,
  keyText,
}) => {
  return (
    <>
      <li className="search__item">
        <div className="search__item--img-container">
          <div className="search__item--img">
            <img src={img} alt="pic" height={316} width={211} />
          </div>
        </div>
        <div className="search__item--text-container">
          <div className="search__item--top">
            <div className="search__item--author-info">
              <div className="search__item--co">{co}</div>
              <div className="search__item--authors">
                {authors &&
                  authors.map((e, i) => (
                    <div
                      key={`search__item--author_${keyText}_${i}`}
                      className="search__item--author"
                    >
                      {e}
                    </div>
                  ))}
              </div>
            </div>
            <div className="search__item--title">{title}</div>
          </div>
          <div className="search__item--release-date">
            発売日: {releaseDate}
          </div>
          <div className="search__item--description">{description}</div>
        </div>
      </li>
    </>
  )
}

Search__item.defaultProps = {
  img: "https://via.placeholder.com/211x316",
  co: "no data...",
  authors: ["no data..."],
  title: "no data...",
  releaseDate: "no data...",
  description: "no data...",
  key: `Search__item_${Math.random()}`,
}

export default Search__item
