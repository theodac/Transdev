import React from "react";
import * as annyang from "annyang";
import speechSynthesis from "speech-synthesis";
import { ReactComponent as Euro } from "../icon/Icon_euro.svg";
import { ReactComponent as Stats } from "../icon/Icon_ionic-ios-stats.svg";
import { ReactComponent as User } from "../icon/Icon_awesome-user-alt.svg";
import { ReactComponent as Meca } from "../icon/Icon_awesome-cogs.svg";
import { ReactComponent as Ticket } from "../icon/Icon_awesome-ticket-alt.svg";
import { ReactComponent as Feuille } from "../icon/Icon_awesome-leaf.svg";
import { ReactComponent as Chat } from "../icon/Icon_chat.svg";

import "../../css/cube.css";

const Cube = () => {
  function fade() {
    const Damier = document.getElementsByClassName("details");
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
      title[i].style.display = "flex";
      Damier[i].style.display = "none";
    }
    setTimeout(details, 2000);
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
        speechSynthesis("Salut a tous", "fr-FR");
      },
      "montre commercial": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-back");
        fade();
        speechSynthesis("Salut a tous", "fr-FR");
      },
      "montre RH": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-right");
        fade();
        speechSynthesis("Salut a tous", "fr-FR");
      },
      "montre meca": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-left");
        fade();
        speechSynthesis("Salut a tous", "fr-FR");
      },
      "montre exploitation": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-top");
        fade();
        speechSynthesis("Salut a tous", "fr-FR");
      },
      "montre environnement": function () {
        const cube = document.getElementById("cube");
        cube.className = "";
        cube.classList.add("show-bottom");
        fade();
        speechSynthesis("Salut a tous", "fr-FR");
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
  setTimeout(details, 2000);
  function details() {
    const Damier = document.getElementsByClassName("details");
    const title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
      title[i].style.display = "none";
      Damier[i].style.display = "flex";
    }
  }
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
            <figure className="front details">
              <div className="cart cube1"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube3"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube5"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube7"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube9"></div>
            </figure>
            <figure className="back title">
              <Stats />
              <h1>Commercial</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="back details">
              <div className="cart cube10"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube11"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube12"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube13"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube14"></div>
            </figure>
            <figure className="right title">
              <User />
              <h1>R H</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="right details">
              <div className="cart cube15"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube16"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube17"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube18"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube19"></div>
            </figure>
            <figure className="left title">
              <Meca />
              <h1>Meca</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="left details">
              <div className="cart cube20"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube21"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube22"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube23"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube24"></div>
            </figure>
            <figure className="top title">
              <Ticket />
              <h1>Exploitation</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="top details">
              <div className="cart cube25"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube26"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube27"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube28"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube29"></div>
            </figure>
            <figure className="bottom title">
              <Feuille />
              <h1>Environement</h1>
              <p>
                Estimation de la variation des recettes par comparaison à 2020 :
                soit environ <span>+3.7 M en cumulé à fin août</span>
              </p>
            </figure>
            <figure className="bottom details">
              <div className="cart cube30"></div>
              <div className="cart cube2">
                <h2>commande passées</h2>
                <div className="number">148 634</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube31"></div>
              <div className="cart cube4">
                <h2>Statistiques 2</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube32"></div>
              <div className="cart cube6">
                <h2>Statistiques 3</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube33"></div>
              <div className="cart cube8">
                <h2>Statistiques 4</h2>
                <div className="number">Lorem ipsum dolor sit amet,</div>
                <button className="btn-voir">en voir plus...</button>
              </div>
              <div className="cart cube34"></div>
            </figure>
          </div>
        </section>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a id="init" href="#" data-face="show-front" onClick={cubeFace}>
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
      <a href="#" id="speaker">
        <img src="/img/Icon_speak.png" alt="audio" />
      </a>
      <a href="#">
        <Chat />
      </a>
    </div>
  );
};

export default Cube;
