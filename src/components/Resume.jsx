import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";
export default function Resume() {
  return (
    <>
      <div class="flex justify-center">
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <h2 className={`${styles.sectionHeadText}`}>My Resume.</h2>
        </motion.div>
      </div>
      <div class="flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Want to learn more about my qualifications and experience? Check out
          my resume!
        </motion.p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            background: "#1d1836",
            marginTop: "2rem",
          }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1HsjgtTi66Pz2LBW_e3yd2PEWpv9AKiBp/view?usp=sharing",
              "_blank"
            )
          }
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
      <button class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"></button>
    </>
  );
}
