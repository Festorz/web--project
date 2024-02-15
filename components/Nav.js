import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.svg";
import navStyles from "../src/styles/Nav.module.css";

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
            <Link href="/">Welcome</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
