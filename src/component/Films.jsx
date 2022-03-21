import React from "react";

const Films = (props) => {
  //   const [films, setFilms] = useState([]);

  //   useEffect(() => {
  //     fetch("https://ghibliapi.herokuapp.com/films")
  //       .then((res) => res.json())
  //       .then((res) => setFilms(res))
  //       .catch((error) => console.log(error));
  //   });

  return (
    <>
      {props.films.map((films) => (
        <div className="container d-inline-flex col-6 my-5">
          <section id="film" className="card-deck row-2 my-5" key={films.id} />
          <div className="card-body">
            <div className="card">
              <img src={films.movie_banner} alt="movie-banner" className="img-fluid" />
              <div className="content card-text">
              <div className="fs-3 mb-1"> <strong> Title: </strong> {films.title}</div>
              <div className="fs-4 mb-1"><strong> Original Title: </strong> {films.original_title}</div>
                <div className="fs-5 my-1"><strong> Director: </strong>{films.director}</div>
                <div className="fs-6">
                  <span className="fw-bold mb-2 card-text"> Synopsis: </span>
                  {films.description}
                </div>
                <div className="my-4">
                  <div className="badge bg-dark fs-6 text-info">
                    Film Rating: {films.rt_score}
                  </div>
                  <a className="m-3 text-dark card-text" href={films.url}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section />
        </div>
      ))}
    </>
  );
};

export default Films;
