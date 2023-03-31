import React from "react";
import Button from "./button.component";

const Vision = () => {
  return (
    <div className="bg-[#00000B] mt-20">
      <div className="font-bold text-small text-[#888] m-auto max-w-desktop text-center">
        EXPLORE MASSA'S WAY
      </div>
      <div className="m-auto flex max-w-desktop flex-col px-5 tablet:px-[22px] desktop:px-11 items-center mt-12">
        <span className="h-[100px] w-[1px] bg-gradient-to-b from-black to-[#019AE9]"></span>
        <div className="rounded-full bg-gradient-to-r from-[#019AE9] to-[#00DFD8] w-10 h-10 flex justify-center items-center mb-6">
          <span className="font-bold">1</span>
        </div>
        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#019AE9] to-[#00DFD8] text-3xl mb-36">
          Vision
        </h3>
        <div className="grid w-full grid-cols-4 gap-4 tablet:grid-cols-8 tablet:gap-5 desktop:grid-cols-12 desktop:gap-8 mb-28">
          <div className="order-1 col-span-full flex flex-col items-center justify-center text-center desktop:col-span-6 desktop:items-start desktop:px-8 desktop:text-left desktop:order-1">
            <p className="relative font-bold text-2xl text-white">
              Be decentralization warriors
            </p>
            <div className="mt-6">
              <p className="relative font-light text-base leading-8 text-[#888] ">
                Masscots and Masstronauts are here to make that Massa stands for
                Mass Adoption, and they will make it happen.
              </p>
            </div>
          </div>
          <img
            className="order-2 col-span-full m-auto rounded-2xl desktop:col-span-6 desktop:order-2 desktop:h-96 desktop:w-[496px]"
            src="/assets/images/decentralization-warrior.jpeg"
          />
        </div>
        <div className="grid w-full grid-cols-4 gap-4 tablet:grid-cols-8 tablet:gap-5 desktop:grid-cols-12 desktop:gap-8 mb-28">
          <div className="order-2 col-span-full flex flex-col items-center justify-center text-center desktop:col-span-6 desktop:items-start desktop:px-8 desktop:text-left desktop:order-2">
            <p className="relative font-bold text-2xl text-white">
              Share love and build with love
            </p>
            <div className="mt-6">
              <p className="relative font-light text-base leading-8 text-[#888]">
                That’s one of the core principles of Masscots and Masstronauts.
                They are here to make Massa a better place for everyone.
              </p>
            </div>
          </div>
          <img
            className="order-1 col-span-full m-auto rounded-2xl desktop:col-span-6 desktop:order-1 desktop:h-96 desktop:w-[496px]"
            src="/assets/images/build-with-love.webp"
          />
        </div>
        <div className="grid w-full grid-cols-4 gap-4 tablet:grid-cols-8 tablet:gap-5 desktop:grid-cols-12 desktop:gap-8 mb-28">
          <div className="order-1 col-span-full flex flex-col items-center justify-center text-center desktop:col-span-6 desktop:items-start desktop:px-8 desktop:text-left desktop:order-1">
            <p className="relative font-bold text-2xl text-white">
              Take-off Mission
            </p>
            <div className="mt-6">
              <p className="relative font-light text-base leading-8 text-[#888]">
                Help to bring new perspectives for the ecosystem, projects to
                reach the community, developers to try out their apps and
                communicate. Time to get your boosters ready
              </p>
            </div>
          </div>
          <img
            className="order-2 col-span-full m-auto rounded-2xl desktop:col-span-6 desktop:order-2 desktop:h-96 desktop:w-[496px]"
            src="/assets/images/jet-engine.jpg"
          />
        </div>
        <div className="flex flex-col justify-start items-center w-full">
          <span className="h-[100px] w-[1px] bg-gradient-to-b from-black to-[#9A1FB8]"></span>
          <div className="flex flex-col justify-start items-center w-full mb-4">
            <div className="rounded-full bg-gradient-to-r from-[#9A1FB8] to-[#FF0080] w-10 h-10 flex justify-center items-center mb-6">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9A1FB8] to-[#FF0080] text-3xl">
              Guidelines
            </h3>
          </div>
          <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#ffffffbf] font-bold text-[60px] tracking-tight mb-6">
            Spread our vision
          </h4>
          <p className="text-[#888] text-center leading-8 w-full max-w-[740px] mt-0 mx-auto mb-24">
            Massa Ambassadorship Program intends to spread awareness about the
            Massa Blockchain, its Team’s vision, and decentralization. The
            Mission of Masstronauts (Core Ambassadors) & Masscots (Community
            Ambassadors) is to reach those goals - with a qualitative approach
            more than a quantitative one, however to allow as many people as
            possible to participate, a new episode starting from 0 will allow
            new Masscots to onboard and try their luck at a later date!
            <a
              href="https://massa.net/ambassadorship"
              className="text-[#DE1D8D] cursor-pointer hover:text-white duration-200 block"
            >
              {" "}
              Check our guidelines here
            </a>
          </p>
        </div>
        {/* <span className="w-[11px] h-[11px] rounded-full border-2 border-[#444] mb-1"></span>
        <div className="w-0 border-l-[1px] border-dashed border-[#444] h-[209px]"></div> */}
        <span className="h-[100px] w-[1px] bg-gradient-to-b from-black to-[#F9CB28]"></span>
        <div className="flex flex-col justify-start items-center w-full mb-4">
          <div className="rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] w-10 h-10 flex justify-center items-center mb-6">
            <span className="font-bold">3</span>
          </div>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] text-3xl mb-4">
            Apply
          </h3>
          <div className="flex">
            <div className="flex flex-col items-center mr-20">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#ffffffbf] font-bold text-[60px] tracking-tight mb-6">
                Be a Masscot
              </h4>
              <p className="text-[#888] text-center leading-8 w-full max-w-[740px] mt-0 mx-auto">
                Every time we can, we onboard 10 to 20 Masscots. Those spots
                will be filled by those who participated in the community,
                created content (articles, tutorials…), participated to our
                Crew3 Quests, and Massadopted. Do you fit this description?
                Apply for the next cohort!! And this is now.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#ffffffbf] font-bold text-[60px] tracking-tight mb-6">
                Be a Masstronaut
              </h4>
              <p className="text-[#888] text-center leading-8 w-full max-w-[740px] mt-0 mx-auto">
                Masstronauts are outstanding Massatizen. They are not many, but
                they are here to support the community any way they can. You
                currently count around 20 of them. From time to time a spot
                might open. Masscots get priority to fill it.
              </p>
            </div>
          </div>
          <div className="flex justify-around w-full mt-8">
            <Button
              url={"#"}
              text={"Closed (for now)"}
              disabled={"pointer-events-none"}
            />
            <Button
              url={"#"}
              text={"Closed (for now)"}
              disabled={"pointer-events-none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
