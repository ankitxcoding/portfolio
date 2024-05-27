import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center select-none">
        <Link to="/" className="m-5 absolute left-0 top-0">
          <i className="fa-solid fa-house text-white text-4xl hover:scale-125"></i>
        </Link>
        <h1 className="m-1 p-1 text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
          Projects
        </h1>
        <a
          href="https://foodz-nine.vercel.app/"
          className="m-4 text-white text-3xl font-semibold hover:text-green-500"
        >
          <i className="fa-solid fa-link text-xl"></i> Foodz
        </a>
        <iframe
          src="https://foodz-nine.vercel.app/"
          title="foodz"
          className="w-4/5 m-4 h-[40rem] rounded-md shadow-md shadow-gray-300"
        ></iframe>
        <a
          href="https://movieznseriez.vercel.app/"
          className="m-4 text-white text-3xl font-semibold hover:text-amber-500"
        >
          <i className="fa-solid fa-link text-xl"></i> MoviezNSeriez
        </a>
        <iframe
          src="https://movieznseriez.vercel.app/"
          title="MoviesAndTVShows"
          className="w-4/5 m-4 h-[40rem] rounded-md shadow-md shadow-gray-300"
        ></iframe>
        <a
          href="https://ankitxcoding.github.io/eCommerce/"
          className="m-4 text-white text-3xl font-semibold hover:text-yellow-500"
        >
          <i className="fa-solid fa-link text-xl"></i> eCommerce
        </a>
        <iframe
          src="https://ankitxcoding.github.io/eCommerce/"
          title="eCommerce"
          className="w-4/5 m-4 h-[40rem] rounded-md shadow-md shadow-gray-300"
        ></iframe>
        <FollowLinks />
        <Navigation />
      </div>
    </>
  );
};
export default Projects;
