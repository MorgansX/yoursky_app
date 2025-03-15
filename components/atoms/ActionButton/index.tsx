import { Translate } from "@/components/atoms/Translate";
import React from "react";
import {
	ButtonText,
	ButtonWrapper,
} from "@/components/atoms/ActionButton/styles";

type ActionButton = {
	text: string;
	bgColor: string;
	textColor: string;
	onPress: (args?: any) => any;
};

export const ActionButton: React.FC<ActionButton> = ({
	text,
	bgColor,
	textColor,
	onPress,
}) => (
	<ButtonWrapper onPress={onPress} color={bgColor}>
		<ButtonText textColor={textColor}>{Translate({ key: text })}</ButtonText>
	</ButtonWrapper>
);
