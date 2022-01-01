import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.scss";

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div className="w-full h-screen bg-emerald-900 flex justify-center items-center">
          <div className="text-center text-white">
                <h1 className="typewriter font-bold text-8xl mb-4">
                Hi, I'm Jayson!
                </h1>
            <h2 className="text-green-400 font-bold text-3xl mb-12">Full Stack Developer</h2>
            <div className="separator mb-12"></div>
            <div className="social-icons">
              <a target="_blank" href="https://www.twitter.com/jaywhocodes"> <FontAwesomeIcon size="2x" icon={faTwitter}/></a>
              <a target="_blank" href="https://www.linkedin.com/in/jaysonleodones/"> <FontAwesomeIcon size="2x" icon={faLinkedinIn} /></a>
              
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
