import { PressableProps } from "react-native";
import { ColorPoint, ToggleButton, ToggleButtonText } from "./styles";

type Props = PressableProps & {
  text: string;
  isPositive?: boolean;
  selected?: boolean | null;
};

export default function ToogleButton({
  text,
  isPositive,
  selected,
  ...rest
}: Props) {
  return (
    <ToggleButton {...rest} selected={selected} isPositive={isPositive}>
      <ColorPoint isPositive={isPositive} />
      <ToggleButtonText>{text}</ToggleButtonText>
    </ToggleButton>
  );
}
