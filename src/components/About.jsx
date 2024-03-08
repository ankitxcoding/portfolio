import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";

const About = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-screen">
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
