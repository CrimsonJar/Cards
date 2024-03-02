import React from "react";
import "./App.css";

import Cards from "./Components/cards";
import pic1 from "./Components/IMG/photo_2024-03-01_09-01-21.jpg";

function App() {
  return (
    <div className='App'>
      <Cards>
        <img src={pic1} className='card-img-top' alt='...' />
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </Cards>
      <Cards>
        <h5 className='card-title'>Card title 2</h5>
        <p className='card-text'>
          Some other example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go nowhere
        </a>
      </Cards>
    </div>
  );
}

export default App;
