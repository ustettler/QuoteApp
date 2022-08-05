import React, { Fragment } from "react";
import { StyleSheet, Text } from "react-native";

// props in functionalen komponenten
const Quote = (props) => {
  // destructuring
  const { text, author } = props;
  return (
    <Fragment>
      {/*    <Text>{props.text}</Text>
      <Text>--- {props.author}</Text> */}
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.author}>&mdash; {author}</Text>
    </Fragment>
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
    marginRight: 30,
    marginLeft: 30,
  },

  author: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Quote;
