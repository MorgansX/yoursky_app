import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export const useAuthGuardController = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);
	const router = useRouter();

	const checkAuth = async () => {
		const userSession = false;
		setIsAuthenticated(userSession);

		if (!userSession) {
			router.replace("/login");
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	return { isAuthenticated };
};
