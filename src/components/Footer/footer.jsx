import { faTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="border-0 border-t border-solid py-4">
            <div className="text-center">
                <span className="text-xs text-emerald-900">Made with React and Tailwind</span>
            </div>
            <div className="text-center">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/jaywhocodes">
                <FontAwesomeIcon color="blue" size="1x" icon={faTwitter} className="mr-2" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jaysonleodones/">
                <FontAwesomeIcon color="blue" size="1x" icon={faLinkedinIn} className="mr-2" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://github.com/jaysonleo">
                <FontAwesomeIcon color="blue" size="1x" icon={faGithub} className="mr-2" />
            </a>
            </div>
        
        </div>
    )
}
