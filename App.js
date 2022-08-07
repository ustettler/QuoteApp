import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

import Quote from "./js/components/Quote";
import NewQuote from "./js/components/NewQuote";

const data = [
  {
    text: "Dont't worry if it doesn't work right.If everything did, you'd be out of a job.",
    author: "Unbekannt",
  },
  { text: "Don't comment bad code - rewrite it", author: "Brian Keriniton" },
  {
    text: " A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. ",
    author: "Paul Graham",
  },
];

export default function App() {
  const [state, setState] = useState({
    index: 0,
    showNewQuoteScreen: false,
  });

  const addQuote = () => {
    //Newquote ausblenden
    setState({ showNewQuoteScreen: false, index: index });
  };

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

  const show = () => {
    setState({
      index: index,
      showNewQuoteScreen: true,
    });
  };
  return (
    <View style={styles.container}>
      <NewQuote visible={state.showNewQuoteScreen} onSave={() => addQuote()} />
      <View style={styles.newButton}>
        <Button title="Neu" onPress={() => show()} />
      </View>
      {/* quot copmponenet */}
      <Quote text={quotes.text} author={quotes.author} />
      {/* Bei Button geht das Styling direkt nicht, muss immer in einem View-Container platziert werden */}
      <View style={styles.nextButton}>
        <Button
          title="< Vohriges Zitat"
          onPress={() =>
            setState({ index: nextIndexBack, showNewQuoteScreen: false })
          }
        />
        <Button
          title="Nächstes Zitat >"
          onPress={() =>
            setState({ index: nextIndex, showNewQuoteScreen: false })
          }
        />
      </View>
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

  nextButton: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },

  newButton: {
    position: "absolute",
    right: 20,
    top: 50,
  },
});
