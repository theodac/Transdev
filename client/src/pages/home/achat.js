import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuro, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/pages/achat.scss";
import Sidebar from "../../components/Sidebar";

const Achat = () => {
  return (
    <>
      <Sidebar />

      <div id="achat">
        <div className="wrap_single">
          <div className="cude_2d_1"></div>
          <div className="cude_2d_2">
            <h2>commande passées</h2>
            <FontAwesomeIcon icon={faEuro} className="icon" />
            <p className="number">148 634</p>
            <button className="btn-voir">en voir plus...</button>
            <div className="arrow_top">
              <FontAwesomeIcon icon={faAnglesRight} className="icon" />
              <p className="commerciale">Achat</p>
            </div>
          </div>
          <div className="cude_2d_3"></div>
          <div className="cude_2d_4">
            <h2>Statistique 2</h2>
            <FontAwesomeIcon icon={faEuro} className="icon" />
            <div className="text_damier">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipising elit.
                consectetur adipising elit.{" "}
              </p>
              <button className="btn-voir">en voir plus...</button>
            </div>
            <div className="arrow_left">
              <FontAwesomeIcon icon={faAnglesRight} className="icon" />
              <p className="exploitation">Technique</p>
            </div>
          </div>
          <div className="cude_2d_5">
            <h2>Date : </h2>
            <input type="date" id="start" name="trip-start" />
          </div>
          <div className="cude_2d_6">
            <h2>Statistique 3</h2>
            <FontAwesomeIcon icon={faEuro} className="icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipising elit.
              consectetur adipising elit.{" "}
            </p>
            <button className="btn-voir">en voir plus...</button>
            <div className="arrow_right">
              <FontAwesomeIcon icon={faAnglesRight} className="icon" />
              <p className="exploitation">Exploitation</p>
            </div>
          </div>
          <div className="cude_2d_7"></div>
          <div className="cude_2d_8">
            <h2>Statistique 4</h2>
            <FontAwesomeIcon icon={faEuro} className="icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipising elit.
              consectetur adipising elit.{" "}
            </p>
            <button className="btn-voir">en voir plus...</button>
            <div className="arrow_down">
              <p className="ressources">Ressources humaines</p>
              <FontAwesomeIcon icon={faAnglesRight} className="icon" />
            </div>
          </div>
          <div className="cude_2d_9"></div>
        </div>
      </div>
    </>
  );
};

export default Achat;
