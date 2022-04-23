import React from "react";

import "../../css/cube.css";

const Cube = () => {
  function cubeFace(target) {
    const face = target.target.getAttribute("data-face");
    const cube = document.getElementById("cube");
    cube.classList.remove();
    cube.classList.add(face);
  }
  return (
    <div>
      <div className="page">
        <section className="container">
          <div id="cube">
            <figure className="front">1</figure>
            <figure className="back">2</figure>
            <figure className="right">3</figure>
            <figure className="left">4</figure>
            <figure className="top">5</figure>
            <figure className="bottom">6</figure>
          </div>
        </section>

        <nav className="navigation">
          <ul>
            <li>
              <a href="#" data-face="show-front" onClick={cubeFace}>
                Face 1
              </a>
            </li>
            <li>
              <a href="#" data-face="show-back" onClick={cubeFace}>
                Face 2
              </a>
            </li>
            <li>
              <a href="#" data-face="show-right" onClick={cubeFace}>
                Face 3
              </a>
            </li>
            <li>
              <a href="#" data-face="show-left" onClick={cubeFace}>
                Face 4
              </a>
            </li>
            <li>
              <a href="#" data-face="show-top" onClick={cubeFace}>
                Face 5
              </a>
            </li>
            <li>
              <a href="#" data-face="show-bottom" onClick={cubeFace}>
                Face 6
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Cube;
