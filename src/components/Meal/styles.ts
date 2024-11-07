import { View } from "react-native";
import styled, { css } from "styled-components/native";

type StatusProps = {
  inDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 50px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 7px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divisor = styled.View`
  width: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  margin: 0 10px;
`;

export const MealHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM};
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.MD};
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
  padding: 0 10px;
`;

export const Status = styled(View)<StatusProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ inDiet, theme }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
