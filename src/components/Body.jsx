import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";

function Body() {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-screen select-none text-center">
        <h1 className="m-1 p-1 text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
          ANKIT VISHWAKARMA
        </h1>
        <h2 className="m-1 p-1 text-white font-semibold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
          Bachelor of Technology in Computer Science & Engineering
        </h2>
        <FollowLinks />
        <Navigation className="mt-6" />
      </div>
    </>
  );
}

export default Body;
