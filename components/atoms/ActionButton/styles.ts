import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";

export const ButtonWrapper = styled(TouchableOpacity)`
	width: 95%;
	height: 54px;
	border-radius: 28px;
	background:${({ color }) => color};
	align-content: center;
	justify-content: center;
	align-items: center;
`;
export const ButtonText = styled(Text)`
	color: ${({ textColor }) => textColor};
	font-size: 24px;
	font-weight: 600;
`;
