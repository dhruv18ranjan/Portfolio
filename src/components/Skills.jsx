import React from "react";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import redux from "../assets/redux.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import LineGradient from "./LineGradient";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-violet-400",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "bootstrap",
      style: "shadow-violet-400",
    },
   
  ];

  return (
    <div
      name="skills"
      className="w-full h-full"
    >
      <div className=" mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <div className="xs:flex justify-center">
          <p className="text-4xl xs:text-4xl font-bold  p-2 inline">
          These are the technologies I've worked with
          </p>
          </div>
          <br /> <br />
          <LineGradient />
          <p className="py-6"></p>
        </div>

        <div className="w-full grid  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
          
          <motion.div  className={`shadow-md hover:scale-105 duration-500 py-2 m-2 rounded-lg ${style}`}
          key={id}
                initial="hidden" whileInView="visible"
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.5}}
                variants={{hidden:{opacity:0 , x:-50},
                visible:{opacity:1, x:0}
              }}>      

              <img src={src} alt="" className="w-20 mx-auto" />

              <p className="mt-4">{title}</p>
                        </motion.div>
              
              
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;