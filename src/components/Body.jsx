import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";

function Body() {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="m-1 p-1 text-white font-bold text-8xl">
          ANKIT VISHWAKARMA
        </h1>
        <h2 className="m-1 p-1 text-white font-semibold text-3xl">
          Bachelor of Technology in Computer Science & Engineering
        </h2>
        <FollowLinks />
        <Navigation />
      </div>
    </>
  );
}
export default Body;
