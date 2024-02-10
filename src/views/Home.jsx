import React, { useContext } from "react";
import heroBg from "../assets/prakash.png";

import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

export const openResumeInNewTab = () => {
  window.open(
    "https://drive.google.com/file/d/11nDJDTJh3iKfJCjpqrRy9EgQ-Sd9lxYW/view?usp=sharing",
    "_blank"
  );
};
export const downloadResume = () => {
  fetch(
    "https://drive.google.com/file/d/11nDJDTJh3iKfJCjpqrRy9EgQ-Sd9lxYW/view?usp=sharing"
  )
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
};
const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            {/* first haeding */}
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Prakash Gupta
              </motion.span>

              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Back-End- Developer",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </span>
            </h1>
            {/* second haeding */}
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Front-End / Full-Stack Developer. I am currently working at
              Next.js Framework as a Front-End Developer
            </p>
            {/* home contact */}
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  key={el.id}
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                  target="_blank"
                >
                  <img alt="" src={el.url} />
                  <p className="text-md mt-2 hover:hidden">{el.name}</p>
                </a>
              ))}
            </div>

            {/* adding Resume */}
            {/* <div
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start "
              style={{ flexDirection: "column" }}
            >
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  href="https://drive.google.com/file/d/1sOSYYoCwxRxujFiBtHfV3k0WQqzweObS/view?usp=sharing"
                  target="_blank"
                >
                  View Resume
                </a>
              </div>
              <div className="mt-3 sm:mt-4 lg:mt-10 cursor-pointer w-1/2">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  href={pdf}
                  download
                >
                  Download Resume
                </a>
              </div>
            </div> */}
            <button onClick={openResumeInNewTab}>
              <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                onClick={downloadResume}
              >
                Resume
              </button>
            </button>
            {/* adding Resume ending line*/}
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt="avatar"
            className="md:w-2/8 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
