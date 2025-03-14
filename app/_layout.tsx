import { Stack } from "expo-router";
import AuthGuard from "@/modules/AuthGuard";

export default function Layout() {
	return (
		<AuthGuard>
			<Stack>
				<Stack.Screen name="(feed)" options={{ title: "Home" }} />
				<Stack.Screen name="login" options={{ headerShown: false }} />
				<Stack.Screen name="create-user" options={{ headerShown: false }} />
			</Stack>
		</AuthGuard>
	);
}
