import { SocialMediaIcons } from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-46 bg-blue w-[100%] pt-8 lg:w-[100%] sm:w-[100%] ss:w-[100%] md:w-[100%] xs:w-[100%]">
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