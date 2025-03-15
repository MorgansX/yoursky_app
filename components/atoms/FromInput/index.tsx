import React, { useState } from "react";
import { Translate } from "@/components/atoms/Translate";
import { Label, Input, InputContainer, Spacer } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type FormInputType = {
	labelTranslationKey: string;
	adornment: React.ReactNode;
	type: string;
	placeholder: string;
	value: string;
	valueStateKey: string;
	onChange: (key: string, inputFieldValue: string) => void;
	isPassword?: boolean;
};

export const FormInput: React.FC<FormInputType> = ({
	labelTranslationKey,
	adornment,
	type,
	placeholder,
	isPassword,
	value,
	valueStateKey,
	onChange,
}) => {
	const [isShownPassword, setIsShownPassword] = useState(false);
	const onEyeIconPress = () => setIsShownPassword(!isShownPassword);

	return (
		<>
			<Label>{Translate({ key: labelTranslationKey })}</Label>
			<InputContainer>
				{adornment}
				<Input
					autocapitalize={false}
					value={value}
					onChangeText={(inputFieldValue) =>
						onChange(valueStateKey, inputFieldValue)
					}
					placeholder={placeholder}
					secureTextEntry={isPassword && !isShownPassword}
				/>
				{type === "password" &&
					(isShownPassword ? (
						<Feather
							name="eye"
							size={24}
							color="white"
							onPress={onEyeIconPress}
						/>
					) : (
						<Feather
							name="eye-off"
							size={24}
							color="white"
							onPress={onEyeIconPress}
						/>
					))}
			</InputContainer>
			<Spacer />
		</>
	);
};
