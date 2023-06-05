import styled from "@emotion/styled";

const CardContainer = styled.article`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3``;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardFavButton = styled.button`
  color: #ffb805;
  padding: 12px;
  border-radius: 50%;

  &:hover {
    background-color: #F5EDE5;
  }
`;
export { CardContainer, CardTitle, CardHeader, CardFavButton };
