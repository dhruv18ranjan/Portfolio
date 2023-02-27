import { SocialMediaIcons } from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-blue pt-10 relative top-20">
      <div className="w-10/12 mx-auto">
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