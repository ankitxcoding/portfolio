import { EMAIL_ID, GITHUB_URL, LINKEDIN_URL } from "../utils/constants";
import myResume from "../assets/myResume.pdf";

const FollowLinks = () => {
  return (
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
        href={myResume}
        target="_blank"
        className="fa-regular fa-file-pdf mx-2 text-white text-4xl border-2 border-white px-[10px] py-2 rounded-full hover:text-green-700 hover:bg-white"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
};
export default FollowLinks;
