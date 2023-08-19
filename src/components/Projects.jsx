import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {data} from "../timeLineElements"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,data,href}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
      <a target="_blank" href={href}> <p className="text-2xl font-playfair">{title}</p></a>
        <a target="_blank" href={href}><p className="mt-7">
          {data}
        </p></a>
      </div>
     <a target="_blank" href={href}> <img height="400px" width="400px" src={`assets/${projectTitle}.jpeg`} alt={projectTitle}  /></a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        "I have created several projects in frontend development using HTML, CSS, JavaScript, and React, 
        showcasing my ability to design and develop engaging and responsive web applications.
        In addition, I am currently learning and enhancing my skills in full-stack development, including the MERN stack.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-white text-black
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" data={data[0].desc1} href="https://dhruv18ranjan.github.io/Portfolio/" />
          <Project title="Project 2" data={data[1].desc2} href="https://youthoob-d.vercel.app/"/>

          {/* ROW 2 */}
          <Project title="Project 3" data={data[2].desc3} href="https://sigmakart-app.onrender.com/" />
          <Project title="Project 4" data={data[3].desc4} href="https://todo-react-dhruv.vercel.app/"/>
          <Project title="Project 5" data={data[4].desc5} href="https://dhruv18ranjan.github.io/KBC-quiz-app-react/" />

          {/* ROW 3 */}
          <Project title="Project 6" data={data[5].desc6} href="https://tic-tac-toe-dhruv.vercel.app/"/>
          <Project title="Project 7" data={data[6].desc7} href="https://tindog-two-lyart.vercel.app/"/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;