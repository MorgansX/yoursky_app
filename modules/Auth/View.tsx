import { PageContainer } from "@/components/templates/PageContainer";
import { WelcomeContainer } from "@/components/molecules/WelcomeContainer";
import styled from "styled-components";
import { View, Dimensions } from "react-native";
import { ActionButton } from "@/components/atoms/ActionButton";
import { KeyboardWrapper } from "@/components/atoms/KeybordAvoiding";
import { useAuthController } from "@/modules/Auth/useAuthController";

const FormContainer = styled(View)`
	width: 90%;
	justify-content: center;
	align-self: center;
	height: 80%;
	border-radius: 8px;
	padding-left: 10px;
`;

const SubmitContainer = styled(View)`
	position: absolute;
	bottom:${({ screenHeight }) => (screenHeight < 700 ? 20 : 50)}px;
	width: 100%;
	align-items: center;
`;

export const AuthView = () => {
	const { height: screenHeight } = Dimensions.get("screen");
	const { getInputFields, handleLogin } = useAuthController();
	return (
		<KeyboardWrapper>
			<PageContainer>
				<WelcomeContainer />
				<FormContainer>
					{getInputFields()}
					<SubmitContainer screenHeight={screenHeight}>
						<ActionButton
							text={"auth.login"}
							bgColor={"#fc3"}
							textColor={"#fff"}
							onPress={handleLogin}
						/>
					</SubmitContainer>
				</FormContainer>
			</PageContainer>
		</KeyboardWrapper>
	);
};
