import React, { FC } from "react";
import { Link } from "../data/links.data";

const FooterItem: FC<Link> = ({ title, subtitles }) => {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="my-3">{title}</h2>
      <ul className="text-[#888]">
        {subtitles.map(({ subtitle, url }, i) => (
          <li className="py-2" key={i}>
            <a
              href={url}
              className="cursor-pointer hover:text-white duration-100"
            >
              {subtitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
