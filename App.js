import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

import Quote from "./js/components/Quote";

const data = [
  {
    text: "Dont't worry if it doesn't work right.If everything did, you'd be out of a job.",
    author: "--Unbekannt",
  },
  { text: "Don't comment bad code - rewrite it", author: "--Brian Keriniton" },
  {
    text: " A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. ",
    author: "--Paul Graham",
  },
];

export default function App() {
  const [state, setState] = useState({
    index: 0,
  });

  // den index auslesen
  const index = state.index;
  //alle quputs fetchen
  const quotes = data[index];
  // nächste quot
  let nextIndex = index + 1;
  // wenn quots fertig sind, wieder von vorn beginnen
  if (nextIndex === data.length) nextIndex = 0;
  // Zitat zurück
  let nextIndexBack = index - 1;
  // wenn beim zurück kein quzot mehr ist wieder anfange
  if (nextIndexBack === -1) nextIndexBack = data.length - 1;

  return (
    <View style={styles.container}>
      {/* quot copmponenet */}
      <Quote text={quotes.text} author={quotes.author} />
      <Button
        title="Nächstes Zitat"
        onPress={() => setState({ index: nextIndex })}
      />
      <Button
        title="Vohriges Zitat"
        onPress={() => setState({ index: nextIndexBack })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
