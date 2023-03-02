import React from 'react'

import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";


export const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-10'>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/dhruv-ranjan-892a8b181/"
            target="_blank"
            rel='noreferrer'
        >
            <img src={linkedin} alt="linkedin-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/DhruvRanjan7"
            target="_blank"
            rel='noreferrer'
        >
            <img src={twitter} alt="twitter-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com"
            target="_blank"
            rel='noreferrer'
        >
            <img src={facebook} alt="facebook-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/dhruvvranjan/?hl=en"
            target="_blank"
            rel='noreferrer'
        >
            <img src={instagram} alt="instagram-link" />
        </a>
    </div>
  )
}
