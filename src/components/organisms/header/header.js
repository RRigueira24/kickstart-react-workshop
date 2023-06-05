import { MainNav } from "@components/molecules";

import { HeaderContainer } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header">
        <span className="header__logo">Kickstart a React Project</span>
        <MainNav />
      </div>
    </HeaderContainer>
  );
};

export default Header;
