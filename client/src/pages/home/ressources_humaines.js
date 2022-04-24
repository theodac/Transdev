import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import "../../styles/pages/ressources_humaines.scss";
import Sidebar from "../../components/Sidebar";


const RessourcesHumaine = () => {


 return (
  <>
   <Sidebar />

   <div id="ressources_humaines">
    <div className="wrap_single">
     <div className="cude_2d_1"></div>
     <div className="cude_2d_2">
      <div className="arrow_top"></div>
      <p className="achat">Achat</p>
      <h2>Statistique 1</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cude_2d_3"></div>
     <div className="cude_2d_4">
      <div className="arrow_left"></div>
      <p className="technique">Technique</p>
      <h2>Statistique 2</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <div className="text_damier"><p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur
       adipising elit. </p>
       <button className="btn-voir">en voir plus...</button>
      </div>
     </div>
     <div className="cude_2d_5">
      <h2>Date : </h2>
      <input type="date" id="start" name="trip-start" />
     </div>
     <div className="cude_2d_6">
      <div className="arrow_right"></div>
      <p className="exploitation">Exploitation</p>
      <h2>Statistique 3</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cude_2d_7"></div>
     <div className="cude_2d_8">
      <div className="arrow_down"></div>
      <p className="environnement">Environnement</p>
      <h2>Statistique 4</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cude_2d_9"></div>


    </div>
   </div>
  </>
 );
};

export default RessourcesHumaine;