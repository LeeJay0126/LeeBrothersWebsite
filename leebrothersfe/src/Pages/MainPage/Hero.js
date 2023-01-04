import './Hero.css';

import { IoLogoReact, IoLogoNodejs, IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

const Hero = () => {

    return (
        <div className='heroWrapper'>
            <div className="heroSection">
                <div>
                    <h1 className='heroHeading'>
                        LeeBrothers Website
                    </h1>
                    <h2 className='heroHeading2'>
                        Check out our projects and resume all in one
                    </h2>
                    <div className='heroButtonContainer'>
                        <button className='heroButton'> Learn More </button>
                        <p className='heroButtonSymbol'>&rarr;</p>
                    </div>
                </div>
                <div className='iconSideNav'>
                    <IoLogoReact className='heroIcons' />
                    <IoLogoNodejs className='heroIcons' />
                    <IoLogoJavascript className='heroIcons' />
                    <SiMongodb className='heroIcons' />
                    <AiFillHtml5 className='heroIcons' />
                </div>
            </div>
            <h3 className='heroTextCenter'>
                Jay Lee | Asen Lee
            </h3>
        </div>
    );
};

export default Hero;