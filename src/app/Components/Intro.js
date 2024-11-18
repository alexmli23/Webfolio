"use client";
import React, { useState, useEffect, useMemo } from 'react';


const Intro= () => {
  const traits = useMemo(() =>[
    { text: "Alex Li", color: "#FFFFFF" },
    { text: "Software Engineer", color: "#20C997" },
    { text: "Swimmer", color: "#6CC0BA" },
    { text: "Avid Reader", color:"#bc6a3c"},
    { text: "Niki&apos;s Biggest Fan", color:"#ADD8E6"},
    { text: "Watching Arcane :(", color:"#7F00FF"}
  ], [])

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [traitIndex, setTraitIndex] = useState(0);

  useEffect(() => {
    if (charIndex < traits[traitIndex].text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + traits[traitIndex].text[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        const nextIndex = (traitIndex + 1) % traits.length;
        setTraitIndex(nextIndex);
        setDisplayedText("");
        setCharIndex(0);
      }, 5000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, traitIndex, traits]);

  const isWithArticle = traits[traitIndex].text === "Software Engineer" || traits[traitIndex].text === "Swimmer" || traits[traitIndex].text === "Avid Reader"

  return (
    <div style={{ backgroundColor: "#2C2C2C", height: "100vh", transition: "background-color 1s ease" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl py-2">
          <span className="bg-white text-black px-2 rounded-sm">Hi!</span> I&apos;m{isWithArticle && " a"}
        </h1>
        <h1 className="text-9xl" style={{ color: traits[traitIndex].color }}>
          {displayedText}
        </h1>
      </div>
      <div className="absolute bottom-4 left-4 px-36 py-16">
        <h1 className="text-4xl">
          <span className="bg-white text-black px-2 rounded-sm">Computer Science</span>
          <span> Student @</span>
        </h1>
        <h1 className="text-4xl">University of Wisconsin - Madison</h1>
      </div>
    </div>
  );
};

export default Intro;
