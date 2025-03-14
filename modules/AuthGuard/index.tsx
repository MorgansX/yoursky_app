import React, { PropsWithChildren } from "react";
import { useAuthGuardController } from "@/modules/AuthGuard/useAuthGuardController";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
	useAuthGuardController();
	return children;
};

export default AuthGuard;
