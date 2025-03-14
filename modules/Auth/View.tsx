import { PageContainer } from "@/components/templates/PageContainer";
import { WelcomeContainer } from "@/components/molecules/WelcomeContainer";
import styled from "styled-components";
import { Text, TextInput, View } from "react-native";
import { Translate } from "@/components/atoms/Translate";
import AntDesign from '@expo/vector-icons/AntDesign';

const FormContainer = styled(View)`
	width: 90%;
	background: #006BFF;
	justify-content: center;
	align-self: center;
	flex: 1;
	border-radius: 8px;
	padding-left: 10px;
`;

const InputContainer = styled(View)`
	width: 95%;
	flex-direction: row;
	align-items: center;
	border-bottom-width: 2px;
	border-bottom-color: #fff;
	padding-bottom: 5px;
`;

const Input = styled(TextInput).attrs({
	placeholderTextColor: '#c2c2c2',
	fontSize: 24,
})`
	flex: 1;
	color: #fff;
	font-weight: 600;
	padding-left: 5px;
`;

const Label = styled(Text)`
	font-size: 16px;
	color: #fff;
	margin-bottom: 5px;
`;

export const AuthView = () => {
	return (
		<PageContainer>
			<WelcomeContainer />
			<FormContainer>
				<Label>{Translate({ key: 'auth.tag' })}</Label>
				<InputContainer>
					<AntDesign name="tagso" size={24} color="white" />
					<Input placeholder={'@tag.bsky.social'} />
				</InputContainer>
			</FormContainer>
		</PageContainer>
	);
};
