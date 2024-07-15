import gsap, { Power4, ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity ,ease: "linear", duration: 5 }}
          className='text-[19vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-light uppercase pt-1 pr-10 -mb-[1vw]'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity ,ease: "linear", duration: 5}}
          className='text-[19vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-light uppercase pt-1 pr-10 -mb-[1vw]'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;