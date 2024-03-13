"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const smallScreenVariant = {
  opacity: 1,
  scale: 1,
  placeSelf: "center",
};

const largeScreenVariant = {
  opacity: 1,
  scale: 1,
};

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isBrowser = useRef(typeof window !== 'undefined');

  useEffect(() => {
    if (isBrowser.current) {
      const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >

          {/* MAIN HEADING with animation */}
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold"
            style={{ lineHeight: 0.9 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#CAF0F8]">
              Hello, I&apos;m Sean.
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1200,
                "Full Stack Developer",
                1200,
                "Ambitious Learner",
                1200,
                "Driven Leader",
                1200,
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: '0.7em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>

          {/* SUMMARY */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl sm:mr-10 md:mr-5 lg:mr-0">
            2024 Graduate of <em>Treehouse Full Stack Java Script TechDegree</em> coding bootcamp. Leveraging my problem-solving and leadership skills as a BSN-RN, combined with my skills as a developer, I'm eager to collaborate with driven professionals to provide high-quality solutions and positive business outcomes.
          </p>

          {/* LINKS/BUTTONS */}
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#0e699a] to-[#2fabee] hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1XMacRLZMS5K51N5vwTLmOaMPaa-A1HPw/view"
              target="_blank"
              className="px-1 mr-4 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#4397c5] to-[#90E0EF] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View CV
              </span>
            </Link>
            <Link
              href="/#intro-video"
              className="px-6 mt-3 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#0e699a] to-[#2fabee] hover:bg-slate-200 text-white"
            >
              Intro Video
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isSmallScreen ? "smallScreen" : "largeScreen"}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            smallScreen: smallScreenVariant,
            largeScreen: largeScreenVariant
          }}
          className="col-span-4 mt-4 lg:mt-0"
        >
          {/* "Background" to Image */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            {/* IMAGE */}
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
