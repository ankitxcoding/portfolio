import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isAbout = location.pathname === "/about";
  const isProjects = location.pathname === "/projects";

  return (
    <div className="m-1 p-1">
      <ul className="flex text-white font-semibold text-xl">
        {isProjects && (
          <li className="mx-2 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/">Home</Link>
          </li>
        )}
        {isProjects && <li className="text-white px-2">|</li>}
        {!isAbout && (
          <li className="mx-2 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/about">About Me</Link>
          </li>
        )}
        {!isAbout && !isProjects && (
          <li className="text-white px-2">|</li>
        )}
        {isAbout && (
          <li className="mx-2 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/">Home</Link>
          </li>
        )}
        {isAbout && <li className="text-white px-2">|</li>}
        {!isProjects && (
          <li className="mx-2 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/projects">Projects</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
