import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";

const Projects = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="m-1 p-1 text-white font-bold text-8xl">Projects</h1>
        <FollowLinks />
        <Navigation />
      </div>
    </>
  );
};
export default Projects;
