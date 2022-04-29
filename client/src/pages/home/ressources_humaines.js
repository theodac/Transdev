import React, {useEffect, useState} from "react";
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
     <div className="cude_2d_1"></div>
     <div className="cude_2d_2">
      <div className="arrow_top"></div>
      <p className="achat">Achat</p>
      <h2>Taux absentéisme</h2>
      <p>{ressourcesHumaineData.tauxAbsenteisme} %</p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cude_2d_3"></div>
     <div className="cude_2d_4">
      <div className="arrow_left"></div>
      <p className="technique">Technique</p>
      <h2>Taux de grève</h2>
      <div className="text_damier"><p>{ressourcesHumaineData.tauxGreve} %</p>
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
      <h2>Taux turnover</h2>
      <p>{ressourcesHumaineData.tauxTurnOver} %</p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cude_2d_7"></div>
     <div className="cude_2d_8">
      <div className="arrow_down"></div>
      <p className="environnement">Environnement</p>
      <h2>Taux recrutement</h2>
      <p>{ressourcesHumaineData.tauxRecrutement} %</p>
      <button className="btn-voir">en voir plus...</button>
     </div>
     <div className="cude_2d_9"></div>


    </div>
   </div>}
  </>
 );
};

export default RessourcesHumaine;