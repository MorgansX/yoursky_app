import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./translates/en.json";
import uk from "./translates/uk.json";

const resources = {
	en: {
		translation: en,
	},
	uk: {
		translation: uk,
	},
};

const initI18n = async () => {
	let savedLanguage = await AsyncStorage.getItem("language");

	if (!savedLanguage) {
		const locales = Localization.getLocales();
		// savedLanguage = locales[0]?.languageCode || 'en';
		savedLanguage = "uk";
	}

	i18n.use(initReactI18next).init({
		compatibilityJSON: "v3",
		resources,
		lng: savedLanguage,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});
};

initI18n();

export default i18n;
