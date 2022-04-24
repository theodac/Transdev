import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import "../../styles/pages/technique.scss";
import Sidebar from "../../components/Sidebar";


const Technique = () => {


 return (
  <>
   <Sidebar />

   <div id="technique">
    <div className="wrap_single">
     <div className="cube1"></div>
     <div className="cube2">
      <div className="arrow_top"></div>
      <p className="commerciale">Commerciale</p>
      <h2>Statistique 1</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cube3"></div>
     <div className="cube4">
      <div className="arrow_left"></div>
      <p className="environnement">Environnement</p>
      <h2>Statistique 2</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <div className="text_damier"><p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur
       adipising elit. </p>
       <button className="btn-voir">en voir plus...</button>
      </div>
     </div>
     <div className="cube5">
      <h2>Date : </h2>
      <input type="date" id="start" name="trip-start" />
     </div>
     <div className="cube6">
      <div className="arrow_right"></div>
      <p className="achat">Achat</p>
      <h2>Statistique 3</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cube7"></div>
     <div className="cube8">
      <div className="arrow_down"></div>
      <p className="ressources">Ressources humaines</p>
      <h2>Statistique 4</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cube9"></div>


    </div>
   </div>
  </>
 );
};

export default Technique;