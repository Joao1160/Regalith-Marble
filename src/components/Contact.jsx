import "../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="contact-us">
            <div className="container">
                <div className="contact-details">
                    <div className="phone">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <h3 className="label">Have a Question? Call Us Now</h3>
                        <ul className="phone-detail">
                            <li>
                                <span>Phone 1:</span>
                                <a href="tel:+0123456789">+0123456789</a>
                            </li>
                            <li>
                                <span>Phone 2:</span>
                                <a href="tel:+0123456789">+0123456789</a>
                            </li>
                        </ul>
                    </div>
                    <div className="email">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <h3 className="label">Need Support? Drop Us an Email</h3>
                        <ul className="email-detail">
                            <li>
                                <a href="mailto:info@gemstonemarble.com">info@gemstonemarble.com</a>
                            </li>
                            <li>
                                <a href="mailto:abdo@gemstonemarble.com">abdo@gemstonemarble.com</a>
                            </li>
                            <li>
                                <a href="mailto:hotline@gemstonemarble.com">hotline@gemstonemarble.com</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
