import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 2;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    padding: 24px;

    &__column {
      display: flex;
    }

    &__logo {
      margin-right: 24px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

export { HeaderContainer };
