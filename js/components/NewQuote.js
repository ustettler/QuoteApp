import React, { Component, useState } from "react";
import { Button, TextInput } from "react-native";

// props in functionalen komponenten
const NewQuote = (props) => {
  const [state, setState] = useState({
    index: 0,
    showNewQuoteScreen: false,
  });

  if (props.visible === false) {
    return null;
  }

  const hide = () => {
    setState({
      index: nextIndex,
      showNewQuoteScreen: false,
    });
  };

  return (
    <>
      <Button title="Speichern" onPress={props.onSave} />
    </>
  );
};

export default NewQuote;
