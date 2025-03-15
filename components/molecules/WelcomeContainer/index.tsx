import React from "react";
import { Translate } from "@/components/atoms/Translate";
import { AppLogo } from "@/components/atoms/AppLogo";
import {
	WelcomeText,
	WelcomeWrapper,
} from "@/components/molecules/WelcomeContainer/styles";

export const WelcomeContainer: React.FC = () => (
	<WelcomeWrapper>
		<WelcomeText>{Translate({ key: "auth.welcome" })}</WelcomeText>
		<AppLogo />
	</WelcomeWrapper>
);
