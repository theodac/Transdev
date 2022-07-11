import React from "react";
import "../../styles/pages/single.scss";

const Single = () => {

    function toggleSidebar() {
        document.getElementById("mySidebar").classList.add("openSide");
        document.getElementById("mySidebar").classList.add("open");
        document.getElementById("main").style.marginLeft = "86px";
      }
    
      function sidebarLeave() {
        document.getElementById("mySidebar").classList.remove("openSide");
        document.getElementById("mySidebar").classList.remove("open");
        document.getElementById("mySidebar").style.width = "86px";
        document.getElementById("mySidebar").style.backgroundColor = "white";
        document.getElementById("main").style.marginLeft = "-86px";
      }
    
      function hoverCard(a) {
        let aLink = document.getElementById(a);
        document.getElementById(a).classList.add("activeCard");
        if (aLink == "link_achat") {
          document.getElementById("mySidebar").classList.add("sidebar_bg_vert");
        }
    
        const expr = a;
        document.getElementById("main").style.background = "none";
    
        console.log(a + expr);
        switch (expr) {
          case "CardGreen":
            // document.getElementById("main").style.backgroundColor = "lime";
            document.getElementById("main").style.transition += ".5s";
            document.getElementById("main").style.background =
              "linear-gradient(rgba(61, 212, 71, 0.18) 0%, rgba(242, 246, 247, 0.15) 100%)";
            document.getElementById("main").style.border += "1px solid #f2f6f7";
            document.getElementById("main").style.opacity += "0.73";
            break;
          case "CardYellow":
            console.log("je suis jaune");
            document.getElementById("main").style.background =
              "linear-gradient(rgba(229, 175, 47, 0.18) 0%, rgba(242, 246, 247, 0.15) 100%)";
    
            document.getElementById("main").style.transition += ".5s";
            break;
          case "CardPurple":
            console.log("je suis violent");
            document.getElementById("main").style.background =
              "linear-gradient(rgba(199, 122, 140, 0.18) 0%, rgba(242, 246, 247, 0.15) 100%)";
            document.getElementById("main").style.transition += ".5s";
            break;
          case "CardOrange":
            console.log("je suis orange");
            document.getElementById("main").style.background =
              "linear-gradient(rgba(247, 209, 136, 0.18) 0%, rgba(242, 246, 247, 0.15) 100%)";
            document.getElementById("main").style.transition += ".5s";
            break;
          case "CardBleu":
            console.log("je suis bleu");
            document.getElementById("main").style.background =
              "linear-gradient(rgba(121, 176, 224, 0.18) 0%, rgba(242, 246, 247, 0.15) 100%)";
            document.getElementById("main").style.transition += ".5s";
            break;
          case "CardGreenLight":
            console.log("je suis bleu");
            document.getElementById("main").style.background =
              "linear-gradient(rgba(212, 228, 150, 0.18) 0%, rgba(242, 246, 247, 0.15) 100%)";
            document.getElementById("main").style.transition += ".5s";
            break;
          default:
            document.getElementById("main").style.background = "#FFFFFFFF";
        }
      }
    
      function leaveCard(a) {
        document.getElementById("mySidebar").classList.remove("sidebar_bg_vert");
        document.getElementById(a).classList.remove("activeCard");
        document.getElementById("mySidebar").style.backgroundColor = "white";
      }
    

    return (

        <>
                  <div
        id="mySidebar"
        className="sidebar"
        onMouseEnter={toggleSidebar}
        onMouseLeave={sidebarLeave}
      >
        <div className="iconLeft">
          <a
            href=""
            onMouseEnter={() => hoverCard("")}
            onMouseLeave={() => leaveCard("")}
          >
            <i className="material-icons">home</i>
          </a>
          <a
            href="/single"
            id="link_achat"
            onMouseEnter={() => hoverCard("CardGreen")}
            onMouseLeave={() => leaveCard("CardGreen")}
          >
            <i className="material-icons vert">euro</i>
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardYellow")}
            onMouseLeave={() => leaveCard("CardYellow")}
          >
            <i className="material-icons jaune">bar_chart</i>
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardPurple")}
            onMouseLeave={() => leaveCard("CardPurple")}
          >
            <i className="material-icons rose">group</i>
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardOrange")}
            onMouseLeave={() => leaveCard("CardOrange")}
          >
            <i className="material-icons orange">settings_suggest</i>
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardBleu")}
            onMouseLeave={() => leaveCard("CardBleu")}
          >
            <i className="material-icons bleu">local_activity</i>
          </a>
          <a
            href="#"
            onMouseEnter={() => hoverCard("CardGreenLight")}
            onMouseLeave={() => leaveCard("CardGreenLight")}
          >
            <i className="material-icons vert">eco</i>
          </a>
        </div>
      </div>
            <div id="single">
            <div className="wrap_single" >
                <div className="cube1"></div>
                <div className="cube2">
                    <div className="arrow_top"></div>
                    <p className="commerciale">Commerciale</p>
                    <h2>commande passées</h2>
                    <p className="number">148 634</p>
                    <button className="btn-voir">en voir plus...</button>
                </div>
                <div className="cube3"></div>
                <div className="cube4">
                    <div className="arrow_left"></div>
                    <p className="technique">Technique</p>
                    <h2>Statistiques 2</h2>
                    <div className="text_damier"><p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur
                        adipising elit. </p>
                        <button className="btn-voir">en voir plus...</button>
                    </div>
                </div>
                <div className="cube5">
                    <h2>Date : </h2>
                    <input type="date" id="start" name="trip-start"/>
                </div>
                <div className="cube6">
                    <div className="arrow_right"></div>
                    <p className="exploitation">Exploitation</p>
                    <h2>Statistiques 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
                    <button className="btn-voir">en voir plus...</button>
                </div>
                <div className="cube7"></div>
                <div className="cube8">
                    <div className="arrow_down"></div>
                    <p className="ressources">Ressources humaines</p>
                    <h2>Statistiques 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit. consectetur adipising elit. </p>
                    <button className="btn-voir">en voir plus...</button>
                </div>
                <div className="cube9"></div>


            </div>
        </div>
        </>

    );
};

export default Single;