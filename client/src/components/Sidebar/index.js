import "../../styles/components/sidebar.scss";
import React, { useState } from "react";

import Link from "../Link";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  const toggleSidebar = () => {
    setOpened(!opened);
  };

  const links = [
    {
      name: "Accueil",
      icon: "home",
      path: "/",
    },
    {
      name: "Achat",
      icon: "euro",
      path: "/achat",
    },
    {
      name: "Commercial",
      icon: "bar_chart",
      path: "/commerciale",
    },
    {
      name: "R. Humaines",
      icon: "group",
      path: "/ressources_humaines",
    },
    {
      name: "Technique",
      icon: "settings_suggest",
      path: "/technique",
    },
    {
      name: "Exploitation",
      icon: "local_activity",
      path: "/exploitation",
    },
    {
      name: "Environnement",
      icon: "eco",
      path: "/environnement",
    },
  ];

  return (
    <div
      className={`sidebar ${opened ? "opened" : ""}`}
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
    >
      {links.map(({ name, icon, path }, index) => (
        <Link key={index} to={path}>
          <i className="material-icons">{icon}</i>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;