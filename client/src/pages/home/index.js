import React from "react";
import "../../styles/pages/home.scss";

// import BasicCard from "../../components/basicCard";

const HomePage = () => {
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
    <div className="wrap">
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

      <div id="main" onMouseEnter={toggleSidebar} onMouseLeave={sidebarLeave}>
        <div className="rightBar">
          <a href="">Home</a>
          <a href="">Achat</a>
          <a href="">Commerciale</a>
          <a href="">R.humaine</a>
          <a href="">Technique</a>
          <a href="">Exploitation</a>
          <a href="">Environement</a>
        </div>
      </div>

      <div className="right">
        <div className="card green" id="CardGreen">
          <img src="/img/euros.svg"></img>
          <h2>ACHAT</h2>
          <p>
            Estimation de la variation des recettes par comparaison à 2020 :{" "}
            <br></br>
            soit environ +3.7 M en cumulé à fin août
          </p>
        </div>
        <div className="card yellow" id="CardYellow">
          <img src="/img/Icon_ionic-ios-stats.svg"></img>
          <h2>COMMERCIALE</h2>
          <p>
            Estimation de la variation des recettes par comparaison à 2019 :
            <span> environ -3.7 M en cumulé à fin août</span>
          </p>
        </div>
        <div className="card purple" id="CardPurple">
          <img src="/img/Icon_awesome-user-alt.svg"></img>
          <h2>
            RESSOURCES <br></br> HUMAINES
          </h2>
          <p>
            Etre en conformité avec la réglementation : <br></br>
            <span> une priorité pour 88 % des décideurs SIRH et RH </span>
          </p>
        </div>
        <div className="card orange" id="CardOrange">
          <img src="/img/Icon_awesome-cogs.svg"></img>
          <h2>TECHNIQUE</h2>
          <p>
            Voyages lignes régulières <br></br>
            <span>en 2021 : 26 821 899</span>
          </p>
        </div>
        <div className="card blue" id="CardBleu">
          <img src="/img/Icon_awesome-ticket-alt.svg"></img>
          <h2>EXPLOITATION</h2>
          <p>
            TCAR - Kilomètres métro haut le pied en 2021 : <br></br>48 170
          </p>
        </div>
        <div className="card greenLight" id="CardGreenLight">
          <img src="/img/Icon_awesome-leaf.svg"></img>
          <h2>ENVIRONNEMENT</h2>
          <p>
            Navette fluviale à énergie électro-solaire Nb de passagers en
            janvier 2021 : 6 563
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
