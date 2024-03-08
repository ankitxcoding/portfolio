import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import { EMAIL_ID, GITHUB_URL, LINKEDIN_URL } from "./utils/constants";

function App() {
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
        <div className="m-1 p-1 ">
          <a
            href={GITHUB_URL}
            target="_blank"
            className="fa-brands fa-github mx-2 text-white text-4xl border-2 border-white px-[10.5px] py-2 rounded-full hover:text-black hover:bg-white"
            rel="noopener noreferrer"
          ></a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            className="fa-brands fa-linkedin-in mx-2 text-white text-4xl border-2 border-white px-[12px] py-2 rounded-full hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]"
            rel="noopener noreferrer"
          ></a>
          <a
            href={"mailto:" + EMAIL_ID}
            target="_blank"
            className="fa-solid fa-envelope mx-2 text-white text-4xl border-2 border-white px-[10px] py-2 rounded-full hover:text-[#E50914] hover:bg-white"
            rel="noopener noreferrer"
          ></a>
          <a
            href={"mailto:" + EMAIL_ID}
            target="_blank"
            className="fa-regular fa-file-pdf mx-2 text-white text-4xl border-2 border-white px-[10px] py-2 rounded-full hover:text-[#E50914] hover:bg-white"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className="m-1 p-1">
          <ul className="flex text-white text-xl">
            <li className="mx-2 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              About Me
            </li>
            <li className="text-white px-2">|</li>
            <li className="mx-2 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              Projects
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
