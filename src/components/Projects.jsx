import ParticlesBackground from "./ParticlesBackground";
import Navigation from "./Navigation";
import FollowLinks from "./FollowLinks";
import { Link } from "react-router-dom";
import { ECOMMERCE_URL, FOODZ_URL, OTTSTREAMIFY_URL } from "../utils/constants";

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
          href={OTTSTREAMIFY_URL}
          target="_blank"
          className="m-4 text-white text-3xl font-semibold hover:text-amber-500"
        >
          <i className="fa-solid fa-link text-xl"></i> OttStreamify
        </a>
        <iframe
          src={OTTSTREAMIFY_URL}
          title="OttStreamify"
          className="w-4/5 m-4 h-[40rem] rounded-md shadow-md shadow-gray-300"
        ></iframe>
        <a
          href={FOODZ_URL}
          target="_blank"
          className="m-4 text-white text-3xl font-semibold hover:text-green-500"
        >
          <i className="fa-solid fa-link text-xl"></i> Foodz
        </a>
        <iframe
          src={FOODZ_URL}
          title="foodz"
          className="w-4/5 m-4 h-[40rem] rounded-md shadow-md shadow-gray-300"
        ></iframe>
        <a
          href={ECOMMERCE_URL}
          target="_blank"
          className="m-4 text-white text-3xl font-semibold hover:text-yellow-500"
        >
          <i className="fa-solid fa-link text-xl"></i> eCommerce
        </a>
        <iframe
          src={ECOMMERCE_URL}
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
