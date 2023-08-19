import {timelineElements} from "../timeLineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import {motion} from  "framer-motion"
import "react-vertical-timeline-component/style.min.css";
import "./Education.css"
import LineGradient from "./LineGradient";


 const Education = () => {
    let schoolIconStyles={background:"white"}
  return (
    <section id="education" className="pt-24 mb-6">

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
        <div >
          <p className="font-playfair font-semibold text-4xl">
          <span className="text-blue text-4xl">EDU</span>CATION
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        
      </motion.div>
        <br /><br /><br />
        <VerticalTimeline>
            {
                timelineElements.map(element=>{
                
                    return (
                        <VerticalTimelineElement key={element.key} 
                        date={element.date} 
                        dateClassName="date"
                        iconStyle={schoolIconStyles}
                        icon={<SchoolIcon />
                        
                    }
                        >             
                        <h3 className="vertical-timeline-element-title text-black font-bold ">{element.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle text-black font-extralight">{element.location}</h5>
                        <p id="description" className="text-black font-light">{element.description}</p>
                       
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </section>
  )
}

export default Education;
