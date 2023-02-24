import { SocialMediaIcons } from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-46 bg-blue w-[100%] flex xs:w-[98.9vw] ">
      <div className="w-full sm:w-full xs:w-full mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-between  md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            DHRUV RANJAN
          </p>
          <p className="font-playfair text-md text-white">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;