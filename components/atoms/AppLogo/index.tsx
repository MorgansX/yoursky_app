import React from "react";
import { APP_NAME } from "@/constants/common/app";
import { Logo } from "@/components/atoms/AppLogo/style";

export const AppLogo: React.FC = () => {
	return <Logo>{APP_NAME}</Logo>;
};
