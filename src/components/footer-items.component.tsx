import React from "react";
import { linksData } from "../data/links.data";
import FooterItem from "./footer-item.component";

const FooterItems = () => {
  return (
    <>
      {linksData.map(({ title, subtitles }) => (
        <FooterItem title={title} subtitles={subtitles} />
      ))}
    </>
  );
};

export default FooterItems;
