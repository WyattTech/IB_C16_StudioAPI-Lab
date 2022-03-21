import React from "react";
import logo from "../images/logo.png";
import "../component/styles.css";

const Header = (props) => {
  // let [films, setFilms] = useState([]);
  // let [people, updatePeople] = useState([]);

  // useEffect(() => {
  //   fetch("https://ghibliapi.herokuapp.com/films")
  //     .then((res) => res.json())
  //     .then((films) => setFilms(films));
  // }, []);

  // useEffect(() => {
  //   fetch("https://ghibliapi.herokuapp.com/people")
  //     .then((res) => res.json())
  //     .then((people) => updatePeople(people));
  // }, []);

  return (
    <header className="container">
      <section className="image container-fluid d-flex justify-content-center logo">
        <img
          src={logo}
          alt="studio-logo"
          width={1200}
          height={280}
          className=" position-"
        />
      </section>
      <section>
        <h1 className="text-center mb-2">The WiKi</h1>
      </section>
      {/* <nav className="d-flex align-items-center justify-content-center my-5 gap-5  ">
        <button type="button" className="  m-3 btn btn-outline-dark w-25">
          The Movies
        </button>
        <button type="button" className="btn btn-outline-dark w-25">
          The Characters
        </button>
      </nav> */}

      <nav className="d-flex align-items-center justify-content-center my-2 gap-5  ">
        <button
          type="button"
          className="m-2 btn btn-outline-dark w-25"
          onClick={props.filmLoads}
        >
          The Movies
        </button>
        <button
          type="button"
          className="btn btn-outline-dark w-25"
          onClick={props.peopleLoads}
        >
          The Characters
        </button>
      </nav>

      <section className="card my-5" style={{ background: "#c0181885" }}>
        <div className="card-body my-2 gap-5">
          <h5 className="card-title fs-3">About</h5>
          <p className="card-text m-2 p-1">
            Studio Ghibli acclaimed Japanese animation film studio that was
            founded in 1985 by animators and directors Miyazaki Hayao and
            Takahata Isao and producer Suzuki Toshio. Studio Ghibli is known for
            the high quality of its filmmaking and its artistry. Its feature
            films won both critical and popular praise and influenced other
            animation studios. The headquarters are in Tokyo.
          </p>
          <p className="m-2 p-1">
            This Studio Ghibli WiKi was created using the Studio Ghibli API to
            pull in data about the films and characters and React. Please enjoy
            exploring these beloved features.
          </p>

          <a
            href="https:/www.britannica.com/topic/Studio-Ghibli"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline-dark"
          >
            Read More
          </a>
          <a
            href="https://ghibliapi.herokuapp.com/#"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline-dark mx-3"
          >
            Studio Ghibli API
          </a>
        </div>
      </section>
      {/* <section id="film" className="row mb-4" key={films.id}>
        {films.map((films) => (
          <div className="col-4 flex mb-2">
            <div className="cards">
              <img src={films.image} alt="movie-banner" className="img-fluid" />
              <div className="content">
                <div className="fs-5 mb-1">Director: {films.director}</div>
                <div className="fs-6">
                  <span className="fw-bold mb-2">Synopsis: </span>
                  {films.description}
                </div>
                <div className="fs6">{films.locations}</div>
                <div className="my-4">
                  <div className="badge bg-dark fs-6 text-info">
                    Film Rating: {films.rt_score}
                  </div>
                 <a className="m-3 text-dark" href={films.url}>Learn More</a> 
                </div>
              </div>
            </div>
          </div>
        ))}
      </section> */}
    </header>
  );
};
export default Header;
