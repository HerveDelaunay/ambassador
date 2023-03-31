import React from "react";
import { linksData } from "../data/links.data";
import FooterItem from "./footer-item.component";

const FooterItems = () => {
  return (
    <>
      {linksData.map(({ title, subtitles }, i) => (
        <FooterItem title={title} subtitles={subtitles} key={i} />
      ))}
    </>
  );
};

export default FooterItems;
