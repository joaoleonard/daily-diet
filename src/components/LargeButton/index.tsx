import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, Icon } from "./styles";

type LargeButtonProps = TouchableOpacityProps & {
  buttonText: string;
  showPlusIcon?: boolean;
};

export default function LargeButton({
  buttonText,
  showPlusIcon,
  disabled,
  ...rest
}: LargeButtonProps) {
  return (
    <Container {...rest} disabled={disabled}>
      {showPlusIcon && <Icon />}
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  );
}
