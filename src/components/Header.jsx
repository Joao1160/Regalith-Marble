import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo2 from "../images/NewLogo1.png";
import "../css/style.css";
import "../css/details.css";
import "../css/normalize.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const headerRef = useRef();
  const contactHeaderRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;

      // Hide first nav
      if (contactHeaderRef.current) {
        if (isScrolled) {
          contactHeaderRef.current.classList.add("hide-contact-header");
        } else {
          contactHeaderRef.current.classList.remove("hide-contact-header");
        }
      }

      // Shrink second nav
      if (headerRef.current) {
        if (isScrolled) {
          headerRef.current.classList.add("shrink-header");
        } else {
          headerRef.current.classList.remove("shrink-header");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header ref={contactHeaderRef} className="contact-header">
        <div className="container">
          <nav className="nav-links">
            <li className="will-disappear">Got a question? Let's talk!</li>
            <li className="will-disappear">
              <FontAwesomeIcon className="nav-links-icon" icon={faPhone} />
              <a href="tel:+0123456789">+0123456789</a>
            </li>
            <li className="will-disappear">
              <FontAwesomeIcon className="nav-links-icon" icon={faEnvelope} />
              <a href="mailto:info@gemstonemarble.com">info@gemstonemarble.com</a>
            </li>
            <li>
              <FontAwesomeIcon className="nav-links-icon" icon={faClock} />
              <span>Sat - Thu : 8am - 7pm </span>
            </li>
            <li className="social-links">
              <a href="http://">
                <FontAwesomeIcon className="nav-links-icon" icon={faFacebookF} />
              </a>
              <a href="http://">
                <FontAwesomeIcon className="nav-links-icon" icon={faInstagram} />
              </a>
              <a href="http://">
                <FontAwesomeIcon className="nav-links-icon" icon={faPinterest} />
              </a>
            </li>
          </nav>
        </div>
      </header>

      <header ref={headerRef} className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <img src={logo2} alt="logo image" />
            </div>
            <div className="nav-links">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <a href="/Regalith-Marble/catalog.pdf" download className="catalog-button">catalog</a>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
