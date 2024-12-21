import { useRef, useEffect } from "react";
import { PROFILE } from "../../david-stones-assets-main/constants";
import Abhishek from "../../david-stones-assets-main/public/Abhishek.jpg";
import { RiArrowRightUpLine } from "@remixicon/react";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const image = heroRef.current.querySelector("img");
    image.classList.add("animate-bounce");
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero flex flex-col md:flex-row items-center justify-between p-4 md:p-8"
      id="hero"
    >
      <div className="text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold">{PROFILE.name}</h1>
        <h2 className="text-2xl md:text-3xl text-gray-700">{PROFILE.role}</h2>
        <p className="mt-4 text-lg md:text-xl">{PROFILE.subheading}</p>
        <a
          href="/Abhishek_Resume Aug 2024"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
        >
          <span>Download Resume</span>
          <RiArrowRightUpLine className="ml-2" />
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={Abhishek}
          alt="abhi profile pic"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full animate-bounce-on-hover"
        />
      </div>
    </section>
  );
};

export default Hero;
