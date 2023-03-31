import React from "react";
import { linksData } from "../data/links.data";
import NavbarItem from "./navbar-item";

const NavbarItems = () => {
  return (
    <div className="ml-12 flex">
      {linksData.map(({ title, subtitles }, i) => (
        <NavbarItem title={title} subtitles={subtitles} key={i} />
      ))}
    </div>
  );
};

export default NavbarItems;
