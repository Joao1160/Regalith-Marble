import Logo from "../images/newLogo.png";
import "../css/aboutUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebookF,
    faTwitter,
    faPinterest,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function AboutUs() {
    return (
        <section className="about-us">
            <div className="section-heading">
                <h2>about us</h2>
                <span></span>
            </div>
            <div className="container">
                <div className="logo-image">
                    <img src={Logo} alt="Logo-image" />
                </div>
                <div className="about-datails">
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        nihil explicabo pariatur. Odio consequatur fuga laborum similique
                        vero at doloribus commodi voluptas libero et, maiores inventore
                        aliquid assumenda alias cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        nihil explicabo pariatur. Odio consequatur fuga laborum similique
                        vero at doloribus commodi voluptas libero et, maiores inventore
                        aliquid assumenda alias cupiditate!
                    </p>

                        <div className="social-links">
                            <a href="http://">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="http://">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="http://">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="http://">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                        </div>
                   
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
