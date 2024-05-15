"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

// Holds all individual project info.
const projectsData = [
  {
    id: 2,
    title: "Data Pagination and Filtering",
    description: "This application presents a list of students in a hard-coded data file. A pagination feature and a 'real-time' search function is added to the application.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/crooks-s/data-pagination-and-filtering-v1",
    liveUrl: "https://crooks-s.github.io/data-pagination-and-filtering-v1/",
  },
  {
    id: 3,
    title: "Interactive Form",
    description: "This is a web form that provides real-time, input feedback to the user for each form field. Some form fields are disabled on certain selections to prevent the user from submitting conflicting data.",
    image: "/images/projects/3.png",
    gitUrl: 'https://github.com/crooks-s/interactive-form-v3',
    liveUrl: 'https://crooks-s.github.io/interactive-form-v3/'
  },
  {
    id: 4,
    title: "Phrase Hunter Game",
    description: "This is a game called 'Phrase Hunter' that provides the player with a hidden phrase. The player must choose letters in order to correctly guess the phrase. The player may use the on-display keys or physical keyboard.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/crooks-s/oop_game-v2",
    liveUrl: "https://crooks-s.github.io/oop_game-v2/",
  },
  {
    id: 5,
    title: "User Files - Fetch API & Modal",
    description: "This application retrieves 12 random users from the 'randomuser.me' API and displays a modal when a user card is clicked.",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/crooks-s/student-files/",
    liveUrl: "https://crooks-s.github.io/student-files/",
  },
  {
    id: 6,
    title: "Original Portfolio Site",
    description: "This is my original portfolio site that was created with Express.js, Node.js, and Pug.",
    image: "/images/projects/6.png",
    gitUrl: "https://github.com/crooks-s/static_node_and_express_site-v1",
    liveUrl: "https://crooksog.up.railway.app/",
  },
  {
    id: 7,
    title: "React Gallery Application",
    description: "This SPA uses the Flickr API to generate photos of pre-selected serach tags. The user may also search for a specific tag using the search field. *NOTE: I am not hosting a live version due to an issue with the API key on deployment.",
    image: "/images/projects/7.png",
    gitUrl: "https://github.com/crooks-s/react_gallery_app-v1",
    liveUrl: null,
  },
  {
    id: 8,
    title: "SQL Library Manager",
    description: "This application presents a library database in which users may perform CRUD operations. This application was made with Express, SQL, and Pug.",
    image: "/images/projects/8.png",
    gitUrl: "https://github.com/crooks-s/sql_library_manager-v1",
    liveUrl: "https://lib-mgr.up.railway.app",
  },
  {
    id: 9,
    title: "Full Stack Application - School Database",
    description: "This full stack application combines projects 9 and 10. Project 9 is the back-end API made with Express and SQL. Project 10 is the front-end made with React.js.",
    image: "/images/projects/10.png",
    gitUrl: "https://github.com/crooks-s/full-stack-app-with-react-and-a-rest-api-v1",
    liveUrl: "https://fullstackapp.up.railway.app/",
  },
  {
    id: 10,
    title: "Malt-Coin",
    description: "This is a mock cryptocurrency, malt-coin, that also has a blockchain and smart contract. It implements Firebase authentication and Firestore for user data storage, along with JWTs for authorization.",
    image: "/images/projects/11.png",
    gitUrl: "https://github.com/crooks-s/malt-coin",
    liveUrl: "https://malt-coin.up.railway.app/",
  },
];

const ProjectsSection = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-3 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* iterate through projects to render each project card */}
        {reversedProjectsData.map((project) => (
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
