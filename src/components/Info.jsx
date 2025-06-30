import "../css/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkedAlt,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faPinterest,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/Logo-White.png";
import logo2 from "../images/newLogoWhite.png";

const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="details">
                    <div className="logo">
                        <img src={logo2} alt="logo image" />
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium quis sequi magnam accusamus mollitia neque ex ipsum
                        non asperiores pariatur modi deleniti eos
                    </div>
                </div>
                <div className="contact-info-links">
                    <h3 className="headline">contact information</h3>
                    <span className="short-line"></span>
                    <ul>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </div>
                            <p className="text-start">2767 sunrise street, jhones ave 102, new york, USA</p>
                        </li>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <a href="tel:++258-456-8790">+258-456-8790</a>
                        </li>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <a href="tel:++258-456-8790">+258-456-8790</a>
                        </li>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <a href="mailto:info@marble.com">info@marble.com</a>
                        </li>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <a href="mailto:info@marble.com">info@marble.com</a>
                        </li>
                        <li className="social-links">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Info;
