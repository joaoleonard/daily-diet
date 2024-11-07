import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  goodHealth: boolean;
};

type ColoredProps = {
    green?: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, goodHealth }) =>
    goodHealth ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View<Props>`
  background-color: ${({ theme, goodHealth }) =>
    goodHealth ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeaderBackButton = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const HeaderBackButtonIcon = styled(ArrowLeft).attrs<Props>(({ theme, goodHealth }) => ({
    size: 24,
    color: goodHealth ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))``;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XXL};
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.SM};
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.LG};
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 30px;
  `}
`;

export const GrayCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CardValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XL};
    font-family: ${theme.FONTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const CardLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.MD};
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    text-align: center;
  `}
`;

export const TwoCardsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const ColoredCard = styled.View<ColoredProps>`
    background-color: ${({ theme, green }) =>
    green ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    width: 48%;
`;