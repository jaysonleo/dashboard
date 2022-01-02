import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.scss";
import React from 'react'


// componentDidMount() {
    
// }

const Hero = () => {
  return (
    <>
      <div className="hero-bg w-full h-screen bg-center bg-no-repeat bg-cover">
        <div className="w-full h-screen flex justify-center items-center px-8">
          <div className="text-white">
          <h2 className="text-white-400 font-bold text-3xl mb-12 xl:flex flex-wrap lg:text-center">Hello There, I am</h2>
                <h1 className="font-bold text-8xl mb-4 xl:flex flex-wrap lg:text-center">
                Jayson Leodones,
                </h1>
            <h2 className="text-green-400 font-bold text-3xl mb-12 xl:flex flex-wrap lg:text-center">Full Stack Developer.</h2>
            <h2 className="text-green-400 font-bold text-3xl mb-12 xl:flex flex-wrap lg:text-center">I am from the Philippines, and I have been
              blessed to work with international companies throughout my career.</h2>

            <div className="separator mb-12 w-full"></div>
            <div className="social-icons flex space-x-8 xl:items-left justify-left lg:justify-center items-center">
              <a target="_blank" href="https://www.twitter.com/jaywhocodes"> <FontAwesomeIcon size="2x" icon={faTwitter}/></a>
              <a target="_blank" href="https://www.linkedin.com/in/jaysonleodones/"> <FontAwesomeIcon size="2x" icon={faLinkedinIn} /></a>
              
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Hero;
