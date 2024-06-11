import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native";

export default function App() {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber)) {
      setFeedback("Please enter a valid number");
      return;
    }
    if (guessNumber < targetNumber) {
      setFeedback("Too low!");
    } else if (guessNumber > targetNumber) {
      setFeedback("Too high!");
    } else {
      setFeedback("Correct!");
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setFeedback("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit Guess" onPress={handleGuess} color="#1E90FF" />
      </View>
      <Text style={styles.feedback}>{feedback}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Reset Game" onPress={resetGame} color="#DC143C" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4682b4",
  },
  input: {
    height: 50,
    borderColor: "#1E90FF",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    width: "100%",
    backgroundColor: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  feedback: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    color: "#ff4500",
  },
});
