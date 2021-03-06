import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import "../../styles/pages/ressources_humaines.scss";
import Sidebar from "../../components/Sidebar";
import human_ressourcesAPI from "../../services/human_ressourcesAPI";


const RessourcesHumaine = () => {

 const [ressourcesHumaineData, setRessourcesHumaineData] = useState(null);

 useEffect(() => {
  human_ressourcesAPI().then((res) => {
   setRessourcesHumaineData(res);
   console.log(res);
  });
 }, []);

 return (
  <>
   <Sidebar />

   { ressourcesHumaineData && <div id="ressources_humaines">
    <div className="wrap_single">
     <div className="cube1"></div>
     <div className="cube2">
      <div className="arrow_top"></div>
      <p className="achat">Achat</p>
      <h2>Taux absentéisme</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>{ressourcesHumaineData.tauxAbsenteisme} %</p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cube3"></div>
     <div className="cube4">
      <div className="arrow_left"></div>
      <p className="technique">Technique</p>
      <h2>Taux de grève</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <div className="text_damier"><p>{ressourcesHumaineData.tauxGreve} %</p>
       <button className="btn-voir">en voir plus...</button>
      </div>
     </div>
     <div className="cube5">
      <h2>Date : </h2>
      <input type="date" id="start" name="trip-start" />
     </div>
     <div className="cube6">
      <div className="arrow_right"></div>
      <p className="exploitation">Exploitation</p>
      <h2>Taux turnover</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>{ressourcesHumaineData.tauxTurnOver} %</p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cube7"></div>
     <div className="cube8">
      <div className="arrow_down"></div>
      <p className="environnement">Environnement</p>
      <h2>Taux recrutement</h2>
      <FontAwesomeIcon icon={faGears} className="icon" />
      <p>{ressourcesHumaineData.tauxRecrutement} %</p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cube9"></div>


    </div>
   </div>}
  </>
 );
};

export default RessourcesHumaine;