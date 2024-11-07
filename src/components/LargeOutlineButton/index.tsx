import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, Icon } from "./styles";

type LargeButtonProps = TouchableOpacityProps & {
  buttonText: string;
  showPlusIcon?: boolean;
};

export default function LargeOutlineButton({
  buttonText,
  showPlusIcon,
  ...rest
}: LargeButtonProps) {
  return (
    <Container {...rest}>
      {showPlusIcon && <Icon />}
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  );
}
