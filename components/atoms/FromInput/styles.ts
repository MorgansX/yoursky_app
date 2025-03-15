import styled from "styled-components";
import { Text, TextInput, View } from "react-native";

export const Input = styled(TextInput).attrs({
	placeholderTextColor: "#c2c2c2",
	fontSize: 24,
})`
	flex: 1;
	color: #fff;
	font-weight: 600;
	padding-left: 5px;
`;

export const Label = styled(Text)`
	font-size: 16px;
	color: #fff;
	margin-bottom: 5px;
`;

export const InputContainer = styled(View)`
	width: 95%;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-color: #fff;
	padding-bottom: 5px;
`;

export const Spacer = styled(View)`
    width: 100%;
    padding-bottom: 35px;
`;
