import React from "react";
import placeholderImg from "../images/placeholderImage.png";

const People = (props) => {
  // const [people, setPeople] = useState([]);

  return (
    <>
      {props.people.map((person) => (
        <div className="container d-inline-flex col-6 my-5">
          <section className="card-deck row-2 my-5" key={person.id} />
          <div className="card-body">
            <div className="card">
              <img
                src={placeholderImg}
                alt="movie-banner"
                className="img-fluid"
              />
              <div className="content card-text">
                <div className="fs-3 mb-1">Name: {person.name}</div>
                <div className="fs-4 mb-1">Age: {person.age}</div>
                <div className="fs-6  mb-1">
                  Hair Color: {person.hair_color}
                </div>
                <div className="fs-6">
                  <span className="mb-2 card-text">Eye Color: </span>
                  {person.eye_color}
                </div>
                <div className="my-4">
                  <div className="badge bg-dark fs-6 text-info">
                    Gender: {person.gender}
                  </div>
                  <a className="m-3 text-dark card-text" href={person.url}>
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

export default People;
