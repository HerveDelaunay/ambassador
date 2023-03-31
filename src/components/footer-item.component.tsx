import React, { FC } from "react";

export type Link = {
  subtitle: string;
  url: string;
};

export type Props = {
  title: string;
  subtitles: Link[];
};

const FooterItem: FC<Props> = ({ title, subtitles }) => {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="my-3">{title}</h2>
      <ul className="text-[#888]">
        {subtitles.map(({ subtitle, url }) => (
          <li className="py-2">
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
