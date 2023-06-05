import { TextContainer } from "./text.styles";

const Text = (props) => {
  return (
    <TextContainer>
      <p>
        {props.type}: {JSON.stringify(props.data, null, 2)}
      </p>
    </TextContainer>
  );
};

export default Text;
