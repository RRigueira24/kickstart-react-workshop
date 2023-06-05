import { Nav } from "@components/molecules";

import { HeaderContainer } from "./header.styles";

const MAIN_ROUTES = [
  { label: "Home", path: "/" },
  { label: "Episodes", path: "/episodes" },
];

const SECONDARY_ROUTES = [
  { label: "Favorites", path: "/favorites" },
  { label: "Watchlist", path: "/watchlist" },
];

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header">
        <div className="header__column">
          <span className="header__logo">Kickstart a React Project</span>
          <Nav data={MAIN_ROUTES} />
        </div>
        <div className="header__column">
          <Nav data={SECONDARY_ROUTES} />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
