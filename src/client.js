import React from "react";
import { render } from "react-dom";

fetch("/api")
  .then((res) => res.json())
  .then((movies) => (
    <div>
      <h1>star wars movies</h1>
      <ul>
        {movies.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  ))
  .then((jsx) => {
    render(jsx, document.getElementById("root"));
  });
