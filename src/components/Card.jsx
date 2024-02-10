import React from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  const { el } = props;
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-28"
      style={{ width: "300px", margin: "auto" }}
    >
      <a href={`${el.deployGitLink}`} target="_blank">
        <img
          class="rounded-t-lg w-full"
          src={`${el.imgUrl}`}
          alt={`${el.name}`}
          style={{ width: "250px", margin: "auto", marginTop: "10px" }}
        />
      </a>
      <div class="p-5">
        <a href="helo">
          <h5
            class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            style={{ textAlign: "center" }}
          >
            {`${el.name}`}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`${el.desc}`}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          TechStack-{`${el.techstack}`}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            // border: "1px solid red",
          }}
        >
          <a
            href={`${el.deployGitLink}`}
            target="_blank"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Deployed Link
          </a>
          <a
            href={`${el.gitLink}`}
            target="_blank"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Github Link
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
