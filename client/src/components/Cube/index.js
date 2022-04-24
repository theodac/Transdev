import React from "react";
import * as annyang from "annyang";
import speechSynthesis from "speech-synthesis";
import { ReactComponent as Euro } from "../Icon/Icon_euro.svg";
import { ReactComponent as Stats } from "../Icon/Icon_ionic-ios-stats.svg";
import { ReactComponent as User } from "../Icon/Icon_awesome-user-alt.svg";
import { ReactComponent as Meca } from "../Icon/Icon_awesome-cogs.svg";
import { ReactComponent as Ticket } from "../Icon/Icon_awesome-ticket-alt.svg";
import { ReactComponent as Feuille } from "../Icon/Icon_awesome-leaf.svg";

import "../../css/cube.css";

const Cube = () => {
  function fade() {
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
      title[i].style.display = "flex";
    }
  }
  if (annyang) {
    // Let's define a command.
    annyang.setLanguage("fr");
    var commands = {
      "montre achat": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-front");
        fade();
        speechSynthesis("Voici le service achat", "fr-FR");
      },
      "montre commercial": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-back");
        fade();
        speechSynthesis("Voici le service commercial", "fr-FR");
      },
      "montre RH": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-right");
        fade();
        speechSynthesis("Voici le service resssources humaines", "fr-FR");
      },
      "montre meca": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-left");
        fade();
        speechSynthesis("Voici le service mecanique", "fr-FR");
      },
      "montre exploitation": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-top");
        fade();
        speechSynthesis("Voici le service exploitation", "fr-FR");
      },
      "montre environnement": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-bottom");
        fade();
        speechSynthesis("Voici le service environnement", "fr-FR");
      },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
  function cubeFace(target) {
    fade();
    const face = target.target.getAttribute("data-face");
    const cube = document.getElementById("cube");
    cube.className = "";
    cube.classList.add(face);
  }
  cubeFace;
  return (
    <div>
      <div className="page">
        <section className="container">
          <div id="cube">
            <figure className="front title">
              <Euro />
              <h1>Achat</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="back title">
              <Stats />
              <h1>Commercial</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="right title">
              <User />
              <h1>R H</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="left title">
              <Meca />
              <h1>Meca</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="top title">
              <Ticket />
              <h1>Exploitation</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="bottom title">
              <Feuille />
              <h1>Environement</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cube;
