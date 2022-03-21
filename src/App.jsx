import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header";

import People from "./component/People";
import Films from "./component/Films";
import React, { useState } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const [ people, setPeople] = useState([]);
  const [filmsLoaded, setFilmsLoaded] = useState(false);
  const [peopleLoaded, setPeopleLoaded] = useState(false);

  const filmLoads = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((res) => {
        setFilms(res);
        setFilmsLoaded(true);
        setPeopleLoaded(false);
      })
      .catch((error) => console.log(error));
  };

  const peopleLoads = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((res) => {
        setPeople(res);
        setPeopleLoaded(false);
        setFilmsLoaded(true);
      })
      .catch((error) => console.log(error));
  };

  if (filmsLoaded === true) {
    return (
      <>
        <Header filmLoads={filmLoads} peopleLoads={peopleLoads} />
        <Films films={films} />
        <People people={people} />
      </>
      //   <div>
      //     <button
      //       type="button"
      //       className="m-3 btn btn-outline-dark w-25"
      //       onClick={filmLoads}
      //     >
      //       The Movies
      //     </button>
      //     <button
      //       type="button"
      //       className="btn btn-outline-dark w-25"
      //       onClick={peopleLoads}
      //     >
      //       The Characters
      //     </button>
      //   </div>
    );
  } else if (peopleLoaded === true) {
    return (
      <>
        <Header filmLoads={filmLoads} peopleLoads={peopleLoads} />
      </>
    );
  } else {
    return <Header filmLoads={filmLoads} peopleLoads={peopleLoads} />;
  }
};

export default App;
