import React from "react";
import Button from "./button.component";

const Ambassador = () => {
  return (
    <div className="bg-home h-screen bg-cover bg-center desktop:bg-[size:100%_100%] 2xl:h-screen pt-24">
      <div className="m-auto flex h-full max-w-desktop flex-col px-5 tablet:px-[22px] desktop:px-11 items-stretch justify-start ">
        <div className="flex h-0 flex-1 flex-col text-center tablet:mt-10 tablet:px-8">
          <h1 className="relative text-3xl tablet:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#ffffffbf] ">
            <span className="font-black">Become an ambassador</span>
          </h1>
          <div className="mt-28 flex h-0 flex-1 flex-col items-start">
            <img
              className="mx-auto max-h-[400px] object-contain desktop:h-4/5"
              src="/assets/images/massambassador_logo.webp"
              alt="massa_logo"
            />
            <p className="relative font-medium text-lg text-[white] mt-28 leading-8">
              Join Massa's Ambassadorship program to help us spread blockchain
              technology while staying true to our values of decentralization.
              Join Crew3, complete quests, or write articles with Massadopted
              for a chance to be noticed and be a part of the movement.
            </p>
            <div className="flex justify-center w-full mt-28">
              <div className="flex justify-evenly w-2/3">
                <Button
                  url={"https://massalabs.crew3.xyz/"}
                  text={"Write articles"}
                />
                <Button
                  url={"https://massadopted.com/"}
                  text={"Start quests"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
