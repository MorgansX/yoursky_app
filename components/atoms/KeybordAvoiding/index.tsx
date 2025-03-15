import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
} from "react-native";
import React, { PropsWithChildren } from "react";

interface KeyBoardWrapper extends PropsWithChildren {
	flexNumber?: number;
}

export const KeyboardWrapper: React.FC<KeyBoardWrapper> = ({
	children,
	flexNumber = 1,
}) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: flexNumber }}
		>
			{children}
		</KeyboardAvoidingView>
	</TouchableWithoutFeedback>
);
