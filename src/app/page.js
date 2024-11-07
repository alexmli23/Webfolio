"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apply blur when scrolling past the initial viewport
      if (window.scrollY > window.innerHeight / 2) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Video */}
      <div className="relative min-h-screen">
        <video
          className={`fixed inset-0 w-full h-full object-cover transition-all duration-500 ${blur ? 'blur-md' : 'blur-none'}`}
          src="/Assets/BackgroundLooop.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Conditional Overlay Text */}
        {blur && (
          <div className="absolute left-0 w-full h-full flex place-items-end justify-center z-10">
            <div className="text-white text-6xl md:text-8xl font-bold text-center">
              Hi, my name is Alexander Li
            </div>
          </div>
        )}
      </div>

      {/* Scrollable Content (Visible After Scrolling) */}
      <div className="relative z-10 p-8 text-white bg-transparent">
        <h2 className="text-3xl font-semibold text-center mb-8">Welcome to My Page</h2>
        <p className="text-lg text-center mb-4">
          Here’s some additional content to scroll down to! You can add more information here about your projects, 
          bio, or anything you want. This allows the page to become scrollable.
        </p>
        <p className="text-lg text-center">
          Add more content as needed to see the scrolling effect over the fixed video background.
        </p>
      </div>
    </div>
  );
}



