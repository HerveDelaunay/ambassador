import React from "react";
import { linksData } from "../data/links.data";
import NavbarItem from "./navbar-item";

const NavbarItems = () => {
  return (
    <div className="ml-12 flex">
      {linksData.map(({ title, subtitles }) => (
        <NavbarItem title={title} subtitles={subtitles} />
      ))}
    </div>
  );
};

export default NavbarItems;
