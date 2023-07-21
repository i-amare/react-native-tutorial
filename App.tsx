import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
	const [text, setText] = useState("Test Text");

  function handleButtonCLick() {
    setText("Input Value")
  }

	return (
		<View style={styles.view}>
			<View style={styles.textContainer}>
				<Text style={styles.header}>{text}</Text>
			</View>
			<TextInput style={styles.input} defaultValue="Input Value"  onChangeText={(val) => setText(val)} />
			<Button title='Reset Text' onPress={() => setText("Input Value")} />
			<StatusBar style='auto'></StatusBar>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		height: "100%",
		width: "100%",
		backgroundColor: "black",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		gap: 10,
	},
	header: {
		color: "#fff",
		fontSize: 50,
		fontWeight: "bold",
	},
	input: {
		width: 250,
		height: 30,
		padding: 20,
		borderColor: "white",
		borderRadius: 10,
		color: "black",
		backgroundColor: "white",
	},
	textContainer: {
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
});
