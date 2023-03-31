import React, { FC, useState } from "react";

type FaqItemProps = {
  question: string;
  answers: string[];
};

const FaqItem: FC<FaqItemProps> = ({ question, answers }) => {
  const [isFaqItemOpened, setisFaqItemOpened] = useState(false);

  const handleItemClick = () => setisFaqItemOpened(!isFaqItemOpened);

  return (
    <div className="flex flex-col rounded-lg bg-[#141423] p-4 shadow-lg tablet:p-8">
      <div
        className="group flex cursor-pointer items-center"
        onClick={handleItemClick}
      >
        <div className="flex-1">
          <p className="relative font-bold text-xl text-white">
            <span className="group-hover:text-[#FF4D4D]">{question}</span>
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={"currentColor"}
          aria-hidden="true"
          className="ml-2 h-8 w-8 text-gray-50 transition-transform duration-1000 group-hover:text-[#FF4D4D]"
          style={
            isFaqItemOpened
              ? { transform: "rotate(405deg)" }
              : { transform: "rotate(0deg)" }
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div
        className="relative overflow-hidden  transition-all duration-300"
        style={
          isFaqItemOpened
            ? { maxHeight: "112px", opacity: "1" }
            : { maxHeight: "0px", opacity: "0" }
        }
      >
        <div className="mt-4 flex flex-col tablet:mt-8 text-[#888] leading-6">
          {answers.map((answer, i) => (
            <p key={i}>{answer}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
