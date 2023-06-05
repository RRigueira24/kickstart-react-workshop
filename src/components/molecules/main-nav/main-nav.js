import Link from "next/link";

import { NavContainer } from "./main-nav.styles";

const ROUTES = [
  { label: "Home", path: "/" },
  { label: "Favorites", path: "/favorites" },
];

const MainNav = () => {
  return (
    <NavContainer>
      <ul className="nav">
        {ROUTES.map((item, index) => {
          const { label, path } = item;
          return (
            <li key={index + path} className="nav__item">
              <Link href={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </NavContainer>
  );
};

export default MainNav;
