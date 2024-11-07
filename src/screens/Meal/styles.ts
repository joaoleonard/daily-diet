import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type InDietStatusProps = {
  inDiet: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 30px 25px;
`;

export const Template = styled.View`
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: baseline;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XL};
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 8px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.MD};
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 16px;
  `}
`;

export const DateAndHourTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.BOLD};
    font-size: ${theme.FONT_SIZES.MD};
    margin-bottom: 5px;
  `}
`;

export const DateAndHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.FONT_SIZES.LG};
    margin-bottom: 16px;
  `}
`;

export const InDietContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 20px;
`;

export const InDietStatus = styled.View<InDietStatusProps>`
  ${({ theme, inDiet }) => css`
    background-color: ${inDiet
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    border-radius: 8px;
    width: 8px;
    height: 8px;
    margin-right: 8px;
  `}
`;

export const InDietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${theme.FONT_SIZES.MD};
  `}
`;
