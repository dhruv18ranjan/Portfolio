import { motion} from 'framer-motion'
import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import LineGradient from './LineGradient'
import me3 from "../assets/me3.png"
import Skills from './Skills'

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <>
    <section id='skills' className='pt-10 pb-24'>
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
            <motion.div  className='md:w-1/3 '
                initial="hidden" whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{hidden:{opacity:0 , x:-50},
                            visible:{opacity:1, x:0}
                        }}>
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    MY <span className='text-blue'>SKILLS</span>
                </p>
                <LineGradient width='w-1/3' />
                <p className='mt-10 mb-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Asperiores animi enim ex, porro ab repellat autem illum reiciendis laudantium magni.</p>
            </motion.div>

            <div className='mt-16 md:mt-0'>
                {isAboveMediumScreens ? (
                   <div
                        className=""
                    >
                        <img src={me3} alt="profile" className='z-10 h-[500px] relative right-[220px] bottom-[70px]' />
                    </div>
                ):(
                    <div className='flex justify-center'>
                    <img src={me3} alt="profile" className='z-10 h-[400px]' />
                    </div>
                )}
            </div>
        </div>

        {/* skills */}
        <div className='md:flex flex justify-center items-center  mt-4 gap-32'>
        <div>

                <Skills />
        </div>
        </div>
        
    </section>
    
    </>
  )
}

export default MySkills