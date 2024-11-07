import styled from "styled-components/native";
import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.9,
})`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => `
        font-size: ${theme.FONT_SIZES.LG};
        font-family: ${theme.FONTS.BOLD};
        color: ${theme.COLORS.GRAY_2};
    `}
`;

export const Icon = styled(Plus).attrs({
  size: 24,
  color: "#000",
})`
  margin-right: 10px;
`;
