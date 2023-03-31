import React, { FC } from "react";
import { Props } from "./footer-item.component";

const NavbarItem: FC<Props> = ({ title, subtitles }) => {
  return (
    <div className="group relative flex items-center">
      <div className="mx-6 cursor-pointer rounded-lg px-2 py-1 group-hover:bg-white group-hover:bg-opacity-[0.24]">
        <p className="relative font-medium text-base text-white">{title}</p>
      </div>
      <div className="absolute top-full hidden min-w-full rounded-b-lg bg-white bg-opacity-[0.08] before:absolute before:-z-10 before:h-full before:w-full before:backdrop-blur-[14px] group-hover:block">
        <div className="flex space-x-6">
          <div className="flex flex-col space-y-3 p-8">
            {subtitles.map(({ subtitle, url }) => (
              <a href={url}>
                <p className="relative font-bold text-base text-white">
                  <span className="cursor-pointer whitespace-nowrap hover:text-secondary-100">
                    {subtitle}
                  </span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItem;
