import React, { useEffect, useRef } from "react";
import { useTypewriter } from "./useTypewriter";
import HeroCircles from "./HeroCircles";

type Props = {};

export default function Hero({}: Props) {
  const txts = [
    "hi, I'm Anh Tran",
    "welcome to my space",
    "<made with many cups of coffee />",
  ];
  const { typed, text } = useTypewriter(txts);

  const pfpRef = useRef<HTMLImageElement>(null);

  function onLoadhero() {
    if (pfpRef.current == null) return;
    pfpRef.current.classList.add("load-pfp");
  }

  useEffect(() => {
    onLoadhero();
  }, []);

  return (
    <section
      id="hero"
      className="flex h-screen snap-center flex-col items-center justify-center space-y-8 overflow-hidden
      text-center"
    >
      {/* Profile */}
      <img
        ref={pfpRef}
        className="relative z-20 mx-auto h-36 w-36 rounded-full border-8 border-double border-gray-500
        object-cover"
        src="https://cdn.discordapp.com/attachments/697129633090371677/1118230003918839929/IMG_20230114_042647_304.jpg"
        alt=""
      />
      <div>
        <h2 className="pb-5 text-xs uppercase tracking-[10px] text-gray-400 md:text-base">
          — Software Engineer —
        </h2>

        <HeroCircles />

        {/* Typewriter effect */}
        <h1>
          <span className="cursor-blink text-3xl text-white" aria-label={text}>
            {typed}
          </span>
        </h1>

        {/* Section buttons */}
        <div className="relative flex flex-col pt-5 md:flex-row">
          <a href="#about">
            <button className="hero-button">// About</button>
          </a>
          <a href="#skills">
            <button className="hero-button">// Skills</button>
          </a>
          <a href="#experience">
            <button className="hero-button">// Experience</button>
          </a>
        </div>
      </div>
    </section>
  );
}
