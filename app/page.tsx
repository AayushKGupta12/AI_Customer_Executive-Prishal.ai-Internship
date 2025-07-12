"use client";
export const runtime = "edge";
import { init } from "@fullstory/browser";
import { useEffect } from "react";
import { XIcon } from "./components/icons/XIcon";

import { LinkedInIcon } from "./components/icons/LinkedInIcon";
import ConversationAgent from "./components/ConversationAgent";

export default function Home() {
  useEffect(() => {
    init({ orgId: "5HWAN" });
  }, []);

  return (
    <>
      <div className="h-full overflow-hidden">

        {/* height 4rem */}
        <div className="bg-gradient-to-b from-black/50 to-black/10 backdrop-blur-[2px] h-[4rem] flex items-center">
  <header className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between pt-4 md:pt-0 gap-2">
    <div className="w-full sm:w-auto flex justify-center sm:justify-start">
      <a className="flex items-center" href="https://github.com/AayushKGupta12" target="_blank" rel="noopener noreferrer">
        <div className="text-2xl font-light gradient-shadow bg-gradient-to-r to-[#FFBF00]/50 from-[#149AFB]/80 rounded ml-0 sm:ml-3">
          <div className="text-xs md:inline-block bg-black text-white rounded m-px px-4 py-3 font-semibold">
            Aayush K. Gupta
          </div>
        </div>
      </a>
    </div>
    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end md:gap-6 text-sm">
      <span className="gradient-shadow bg-gradient-to-r to-[#FFBF00]/50 from-[#149AFB]/80 rounded w-full sm:w-auto text-center">
        <a
          href="https://github.com/AayushKGupta12/AI_Customer_Executive-Prishal.ai-Internship"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:inline-block bg-black text-white rounded m-px px-4 py-2 font-semibold block sm:inline-block"
        >
          Project Repo.
        </a>
      </span>
    </div>
  </header>
</div>


        {/* height 100% minus 10rem */}
        <main className="mx-auto max-w-7xl  px-4 md:px-6 lg:px-8 h-[calc(100%-10rem)]">
          <ConversationAgent />
        </main>

        {/* height 4rem */}
        <div className=" backdrop-blur-[2px] h-[4rem] flex items-center">
          <footer className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-center gap-4 md:text-xl font-inter text-[#8a8a8e]">
            <span className="text-base text-[#4e4e52]">My Profile : </span>
            <a
              href="#"
              onClick={(e) => {
                window.open(
                  "https://www.instagram.com/_aayush_gupta12/",
                  "",
                  "_blank, width=600, height=500, resizable=yes, scrollbars=yes"
                );

                return e.preventDefault();
              }}
              aria-label="share on twitter"
              target="_blank"
            >
              <XIcon className="mb-1" />
            </a>
            <a
              href=""
              onClick={(e) => {
                window.open(
                  "https://www.linkedin.com/in/aayush-kumar-gupta-2b7952219/",
                  "",
                  "_blank, width=600, height=500, resizable=yes, scrollbars=yes"
                );

                return e.preventDefault();
              }}
              aria-label="share on Linkedin"
            >
              <LinkedInIcon className="mb-1" />
            </a>
            
            <div className="border-l border-[#4e4e52] w-px h-7">&nbsp;</div>
            <a
              className="text-base font-semibold"
              href="mailto:aayushgupta120305@gmail.com"
              target="_blank"
            >
              contact us
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
