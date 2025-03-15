import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FormInput } from "@/components/atoms/FromInput";
import { bskyServise } from "@/api/agent";
import { useState } from "react";

const DEFAULT_VALUES_STATE = { identifier: "", password: "" };

const AUTH_ITEMS = [
	{
		label: "auth.tag",
		adornment: <AntDesign name="tagso" size={24} color="white" />,
		type: "email",
		placeholder: "@tag.bsky.social",
		isPassword: false,
		valueStateKey: "identifier",
	},
	{
		label: "auth.password",
		adornment: <MaterialIcons name="password" size={24} color="white" />,
		type: "password",
		placeholder: "password",
		isPassword: true,
		valueStateKey: "password",
	},
];
export const useAuthController = () => {
	const [values, setValues] = useState(DEFAULT_VALUES_STATE);
	const { login } = bskyServise;

	const handleInputChange = (key: string, inputFieldValue: string) => {
		setValues({ ...values, [key]: inputFieldValue });
	};

	const handleLogin = async () => {
		const { identifier, password } = values;
		try {
			const response = await login({ identifier, password });
			const {accessJwt, refreshJwt} = response;
		} catch (error) {
			console.log(error);
		}finally {
			setValues(DEFAULT_VALUES_STATE);
		}
	};

	const getInputFields = () =>
		AUTH_ITEMS.map((item) => (
			<FormInput
				value={values[item.valueStateKey]}
				valueStateKey={item.valueStateKey}
				key={item.label}
				labelTranslationKey={item.label}
				type={item.type}
				placeholder={item.placeholder}
				adornment={item.adornment}
				isPassword={item.isPassword}
				onChange={handleInputChange}
			/>
		));

	return {
		getInputFields,
		handleLogin,
	};
};
