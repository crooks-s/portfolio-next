"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Holds content to display per different about-me tab
const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>ExpressJS, Pug</li>
        <li>SQL, mongoDB</li>
        <li>NodeJS</li>
        <li>Firebase, Supabase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Treehouse Full Stack JavaScript TechDegree</li>
        <li>University of Nevada, Las Vegas - BSN</li>
        <li>Other: <em>LeetCode, CodeCademy, freeCodeCamp.</em></li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Active contributor of Treehouse's public repositories; multiple, thorougly constructed PRs on GitHub.</li>
        <li>Code reviews and feedback for Treehouse students in Discord.</li>
        <li>ICU, CVICU RN - Leader, patient advocate, mentor.</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16">

        {/* IMAGE */}
        <Image src="/images/about-image.png" alt='picture of avatar holding a bird' width={400} height={400} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          {/* About me description/info */}
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I aim for excellence in software development by adhering to standards such as 'maintainable software', JSDocs, and conventional commits.<br /><br />
          My critical-care nursing skills seamlessly translate into software development, offering a blend of professionalism, attention to detail, and adaptability; all of which are essential to effective problem-solving and user-centered software development. I excel in multi-disciplinary teams, demonstrating strong leadership and exceptional communication abilities to facilitate team progress. <br /><br />
          I am always looking for change and enjoy challening myself to new experiences and skillsets. 
          </p>

          {/* TAB BUTTONS */}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>

          {/* Render content from selected TAB */}
          <div className="mt-5">
            {tabData.find((t) => t.id === tab).content}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
