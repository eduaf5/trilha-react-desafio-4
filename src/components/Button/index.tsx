import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ title, children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {title}
      {children}
    </ButtonContainer>
  );
};

export default Button;