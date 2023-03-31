import React from "react";
import FooterItems from "./footer-items.component";
import { ReactComponent as MediumIcon } from "../assets/medium.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as TelegramIcon } from "../assets/telegram.svg";
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";
import { ReactComponent as RedditIcon } from "../assets/reddit.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 border-t-[1px] border-[#333] h-[450px]">
      <div className="flex text-white w-[1200px] justify-between mx-auto text-[0.875rem]">
        <a href="https://massa.net/" className="w-[150px] h-[42px] pt-1">
          <img src="/assets/images/logo_massa.webp" alt="massa logo" />
        </a>
        <FooterItems />
      </div>
      <div className="flex justify-start items-center w-[1200px]">
        <span className="text-[#888] text-[14px] mr-44">
          Copyright &copy; Hervé Delaunay x Massa Labs, All rights reserved
        </span>
        <span className="flex items-center text-[#888]">
          <a href="https://massalabs.medium.com/" className="mr-[15px]">
            <MediumIcon />
          </a>
          <a href="https://github.com/massalabs/massa" className="mr-[15px]">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/massalabs" className="mr-[15px]">
            <TwitterIcon />
          </a>
          <a href="https://t.me/massanetwork" className="mr-[15px]">
            <TelegramIcon />
          </a>
          <a href="https://discord.gg/massa" className="mr-[15px]">
            <DiscordIcon />
          </a>
          <a href="https://www.reddit.com/r/massa" className="mr-[15px]">
            <RedditIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UChVfdvYpn0eFk4B-T7TGmOg"
            className="mr-[15px]"
          >
            <YoutubeIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/massa-labs/"
            className="mr-[15px]"
          >
            <LinkedinIcon />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
