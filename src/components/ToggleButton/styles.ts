import { Pressable, View } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isPositive?: boolean;
  selected?: boolean | null;
};

export const ToggleButton = styled(Pressable)<Props>`
  ${({ theme, selected, isPositive }) => css`
    background-color: ${selected
      ? isPositive
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
    border-width: 1px;
    border-color: ${selected
      ? isPositive
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_6};
    padding: 10px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 47%;
    flex-direction: row;
  `}
`;

export const ColorPoint = styled(View)<Props>`
  ${({ theme, isPositive }) => css`
    background-color: ${isPositive
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    width: 8px;
    height: 8px;
    border-radius: 5px;
    margin-right: 10px;
  `}
`;

export const ToggleButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.FONT_SIZES.MD};
  `}
`;
