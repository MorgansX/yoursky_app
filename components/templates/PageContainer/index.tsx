import React, { PropsWithChildren } from "react";
import { SafeAreaContainer } from "@/components/templates/PageContainer/style";

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return <SafeAreaContainer>{children}</SafeAreaContainer>;
};
