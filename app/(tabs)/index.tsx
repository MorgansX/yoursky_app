import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { useCountStore } from "@/store/useSomeStore";

export default function HomeScreen() {
	const count = useCountStore((state) => state.count);
	const { decrement, increment } = useCountStore();
	console.log(count);
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.textView}>{count}</Text>
			</View>
			<TouchableHighlight
				onPress={() => {
					increment(12);
				}}
			>
				<Text>inc</Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => decrement(100)}>
				<Text>dec</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "red",
		justifyContent: "center",
	},
	textView: {
		backgroundColor: "#fff",
		textAlign: "center",
	},
});
