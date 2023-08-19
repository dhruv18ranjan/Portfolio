import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import me from "../assets/me.png"
import { motion } from 'framer-motion';


import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SocialMediaIcons } from './SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id='home' className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>
            {/* image */}
            <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
                {isAboveMediumScreens ? (
                    <div className='relative z-0 ml-20'
                    >
                        <img src={me} alt="profile" className='relative bottom-20 right-16 h-[600px] z-10 w-full max-w-[400px] md:max-w-[600px] ' />
                    </div>
                ) : (
                    <div>
                        <img src={me} alt="profile" className='z-10 w-full max-w-[400px] md:max-w-[600px] ' />
                    </div>
                )}
            </div>
            {/* main */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                {/* heading */}
                <motion.div initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Dhruv {""}
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue relative inline-block">
                            <span class="relative text-white">Ranjan</span>
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-md text-center  md:text-start ">
                        Currently pursuing my B.Tech in IT from GL Bajaj Institute of Technology and management, with a focus on frontend development. Proficient in 
                        HTML, CSS, JavaScript , React and many more, and currently learning the MERN stack. Seeking opportunities to 
                        further develop my skills in web development and contribute to building innovative and impactful projects
                    </p>
                </motion.div>
                {/* call to actions */}
                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <AnchorLink
                        onClick={() => setSelectedPage("contact")}
                        className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-semibold
                         hover:bg-blue hover:text-white transition duration-500"
                        href='#contact'
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        onClick={() => setSelectedPage("contact")}
                        className=" rounded-r-sm bg-blue py-0.5 pr-0.5 "
                    >
                        <div className='bg-deep-blue hover:text-blue transition duration-500 
                        flex items-center h-full w-full justify-center font-playfair px-10 cursor-pointer'>

                            Let's Talk !
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>



            </div>

        </section>
    )
}

export default Landing;