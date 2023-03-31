import React from "react";
import FaqItem from "./faq-item.component";
import { faqData } from "../data/faq.data";

const Faq = () => {
  return (
    <div className="m-auto flex h-full max-w-desktop flex-col px-5 tablet:px-22px desktop:px-11 items-stretch justify-start mt-56 mb-56">
      <div className="text-center" id="faq">
        <p className="relative font-bold text-3xl tablet:text-4xl text-white">
          Frequently asked questions
        </p>
      </div>
      <div className="mt-6 space-y-2 tablet:mt-12">
        {faqData.map(({ question, answers }) => (
          <FaqItem question={question} answers={answers} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
