import { useTranslation } from "react-i18next";

export const Translate = ({ key }: { key: string }) => {
	const { t } = useTranslation();
	return t(key as any);
};
