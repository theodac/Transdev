import React from "react";
import "../../styles/pages/home.scss";
import BasicCard from "../../components/basicCard";
const HomePage = () => {
  function appear() {
    const sideBar = document.querySelector(".scrollBar");
    sideBar.classList.add("active");
  }
  function disappear() {
    const sideBar = document.querySelector(".scrollBar");
    sideBar.classList.remove("active");
  }

  return (
    <div className="wrap">
      <div className="left">
        <div className="top">
          <p className="parent" onMouseOver={appear} onMouseLeave={disappear}>
            home
            <BasicCard bgColor={"#333333"} />
          </p>
          <p onMouseOver={appear} onMouseLeave={disappear}>
            home2
            <BasicCard />
          </p>
          <p onMouseOver={appear} onMouseLeave={disappear}>
            home3
            <BasicCard />
          </p>
        </div>
        <div className="bottom"></div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default HomePage;
