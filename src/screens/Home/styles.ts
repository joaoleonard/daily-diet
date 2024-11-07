import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #fff;
    padding: 0 25px;
`;

export const SmallRegularText = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZES.MD};
        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
    align-self: flex-start;
    margin-top: 40px;
`;

export const SectionHeaderText = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZES.MD};
        font-family: ${theme.FONTS.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
    align-self: flex-start;
    margin-top: 30px;
`;

 