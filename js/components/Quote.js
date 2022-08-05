import React from "react";
import { StyleSheet, Text, View } from "react-native";

// props in functionalen komponenten
const Quote = (props) => {
  // destructuring
  const { text, author } = props;
  return (
    <View style={styles.container}>
      {/*    <Text>{props.text}</Text>
      <Text>--- {props.author}</Text> */}
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.author}>&mdash; {author}</Text>
    </View>
  );
};

//Stytling in React Native mit JS
/* const styleQuote = {
  fontSize: 36,
  fontStyle: "italic",
  marginRight: 30,
  marginLeft: 30,
};

const styleAuthor = { fontSize: 20, marginBottom: 20, marginTop: 20 }; */

//Stylesheet.create
const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontStyle: "italic",
  },

  author: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "right",
    fontWeight: "800",
  },

  container: {
    paddingHorizontal: 50,
    backgroundColor: "#F1F1F2",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: "grey",
    elevation: 2,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0.75 },
    shadowRadius: 1.5,
  },
});

export default Quote;
