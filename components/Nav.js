import Link from "next/link";
import navStyles from "../src/styles/Nav.module.css";
import logo from "../public/images/logo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.nav}>
        <ul>
          <li className="logo">
            <Image src={logo} alt="" />
          </li>

          <li>
            <div className={navStyles.searchbox}>
              <span>
                <FontAwesomeIcon
                  className={navStyles.searchicon}
                  icon={faSearch}
                />
              </span>
              <input type="text" placeholder={"search..."} />
            </div>
          </li>
          <li className="right">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
