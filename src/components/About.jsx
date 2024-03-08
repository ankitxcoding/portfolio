import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";
import { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";

const About = () => {
  const [github, setGithub] = useState();

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
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={avatar_url} alt="profilePicture" className="w-80 rounded-full border-2 border-white"/>
        <p className="m-1 p-1 text-white font-semibold text-2xl w-3/4">
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
