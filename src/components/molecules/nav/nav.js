import Link from "next/link";

import { NavContainer } from "./nav.styles";

const Nav = (props) => {
  const { data } = props;

  return (
    <NavContainer>
      <ul className="nav">
        {data.map((item, index) => {
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

export default Nav;
