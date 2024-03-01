"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

// Holds all individual project info.
const projectsData = [
  {
    id: 1,
    title: "Random Quote Generator",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/crooks-s/a_random_quote_generator-v1",
    liveUrl: "https://crooks-s.github.io/a_random_quote_generator-v1/",
  },
  {
    id: 2,
    title: "Data Pagination and Filtering",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/crooks-s/data-pagination-and-filtering-v1",
    liveUrl: "https://crooks-s.github.io/data-pagination-and-filtering-v1/",
  },
  {
    id: 3,
    title: "Interactive Form",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    gitUrl: 'https://github.com/crooks-s/interactive-form-v3',
    liveUrl: 'https://crooks-s.github.io/interactive-form-v3/'
  },
  {
    id: 4,
    title: "Phrase Hunter Game",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/crooks-s/oop_game-v2",
    liveUrl: "https://crooks-s.github.io/oop_game-v2/",
  },
  {
    id: 5,
    title: "User Files - Fetch API & Modal",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/crooks-s/student-files/",
    liveUrl: "https://crooks-s.github.io/student-files/",
  },
  {
    id: 6,
    title: "Original Portfolio Site",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    gitUrl: "https://github.com/crooks-s/static_node_and_express_site-v1",
    liveUrl: "https://crooksog.up.railway.app/",
  },
  {
    id: 7,
    title: "React Gallery Application",
    description: "Project 7 description",
    image: "/images/projects/7.png",
    gitUrl: "https://github.com/crooks-s/react_gallery_app-v1",
    liveUrl: null,
  },
  {
    id: 8,
    title: "SQL Library Manager",
    description: "Project 8 description",
    image: "/images/projects/8.png",
    gitUrl: "https://github.com/crooks-s/sql_library_manager-v1",
    liveUrl: "https://lib-mgr.up.railway.app",
  },
  {
    id: 9,
    title: "Full Stack Application - School Database",
    description: "Project 9 & 10 description",
    image: "/images/projects/10.png",
    gitUrl: "https://github.com/crooks-s/full-stack-app-with-react-and-a-rest-api-v1",
    liveUrl: "https://fullstackapp.up.railway.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-3 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* iterate through projects to render each project card */}
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
          />
        )
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
