import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

interface Goals {
  text: string;
  id: string;
}

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState<Goals[]>([]);

  const handleChangeText = (text: string) => {
    setEnteredText(text);
  };

  const handlePress = () => {
    setGoals((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goal"
          onChangeText={handleChangeText}
        />
        <Button title="Add Goal" onPress={handlePress} />
      </View>
      <View style={styles.outputWrapper}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={({ id }) => id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  inputWrapper: {
    padding: 16,
    paddingBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    padding: 16,
    marginRight: 8,
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  outputWrapper: {
    padding: 20,
  },
  goalItem: {
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#FDE40C",
    borderRadius: 8,
  },
  goalText: {
    color: "#fff",
    fontSize: 14,
  },
});
