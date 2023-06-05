import Header from "../header/header";

import { MainContainer } from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
