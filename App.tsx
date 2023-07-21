import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TextInput,
	TouchableHighlight,
} from "react-native";
import { useState } from "react";

export default function App() {
	const [list, setList] = useState<{ key: string; value: string }[]>([]);

	function handleTextSubmit(val: string) {
		setList([
			...list,
			{ value: val, key: `${val}-${Math.round(Math.random() * 1000000)}` },
		]);
	}

	function handleListItemDeletion(deletionKey: string) {
		setList((prevList) => {
			return prevList.filter(({ key }) => key != deletionKey);
		});
	}

	return (
		<View style={styles.view}>
			<Text style={styles.header}>Enter an Item</Text>
			<TextInput
				style={styles.input}
				inputMode='text'
				placeholder='Input Value'
				onSubmitEditing={(e) => handleTextSubmit(e.nativeEvent.text)}
			/>
			<FlatList
				style={styles.flatList}
				data={list}
				renderItem={({ item }) => (
					<TouchableHighlight
						underlayColor='crimson'
						onPress={() => handleListItemDeletion(item.key)}
						style={styles.listItemContainer}
					>
						<Text style={styles.listItem}>{item.value}</Text>
					</TouchableHighlight>
				)}
			/>
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
		alignContent: "center",
		alignItems: "center",
		gap: 10,
		paddingTop: 85,
	},
	header: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
	},
	input: {
		width: "75%",
		height: 35,
		padding: 20,
		borderColor: "white",
		borderRadius: 10,
		color: "black",
		backgroundColor: "white",
	},
	flatList: {
		width: "100%",
	},
	listItemContainer: {
		paddingVertical: 12,
		width: "75%",
		backgroundColor: "#333",
		borderRadius: 10,
		marginLeft: "12.5%",
		marginBottom: 5,
	},
	listItem: {
		textAlign: "center",
		color: "white",
		fontSize: 15,
		fontWeight: "bold",
	},
});
