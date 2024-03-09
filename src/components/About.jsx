import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";
import { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";
import { Link } from "react-router-dom";

const About = () => {
  const [github, setGithub] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GITHUB_API);
    const json = await data.json();
    setGithub(json);
  };

  const { avatar_url } = github;

  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-screen select-none">
        <Link to="/" className="m-5 absolute left-0 top-0">
          <i className="fa-solid fa-house text-white text-4xl hover:scale-125"></i>
        </Link>
        <img
          src={avatar_url}
          alt="profilePicture"
          className="w-60 rounded-full border-2 border-white sm:w-60 md:w-72 lg:w-80 xl:w-80"
        />
        <p className="m-1 p-1 text-white font-semibold text-base text-justify w-3/4 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          Hello, I&apos;m Ankit Vishwakarma, a student of Bachelor of Technology
          in Computer Science and Engineering at Veer Bahadur Singh Purvanchal
          University in Jaunpur, Uttar Pradesh. I will be graduating in 2024.
        </p>
        <FollowLinks />
        <Navigation />
      </div>
    </>
  );
};
export default About;
