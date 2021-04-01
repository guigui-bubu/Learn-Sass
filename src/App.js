import React from "react";
import "./App.css";

function App() {
  return (
    <body>
    <div className="card">
      <div className="card__image"> </div>
      <div className="card__content">
      <h2 className="card__title">Hello</h2>
      <p className="card__description">Comment se passe ta journée, super il fait trop beau, on profite bien du soleil</p>
      </div>
    </div>
    <div className="card card--dark">
      <div className="card__image"> </div>
      <div className="card__content">
      <h2 className="card__title">Hello</h2>
      <p className="card__description">Comment se passe ta journée, super il fait trop beau, on profite bien du soleil</p>
      </div>
    </div>
    </body>
    
    
  );
}

export default App;