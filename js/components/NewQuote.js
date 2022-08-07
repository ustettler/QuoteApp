import React, { Component, useState } from "react";
import { Button, TextInput, Modal, View, StyleSheet } from "react-native";

// props in functionalen komponenten
const NewQuote = (props) => {
  const [state, setState] = useState({
    content: null,
    author: null,
    index: 0,
    showNewQuoteScreen: false,
  });

  if (props.visible === false) {
    return null;
  }

  //destructuring
  const { visible, onSave } = props;
  const { content, author } = state;

  return (
    <Modal visible={visible} onRequestClose={onSave} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={[styles.input, { height: 150 }]}
          multiline={true}
          placeholder="Inhalt des Zitats"
          underlineColorAndroid={"transparent"}
          onChangeText={(text) => setState({ content: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Author/in"
          underlineColorAndroid={"transparent"}
          onChangeText={(text) => setState({ author: text })}
        />
        <Button title="Speichern" onPress={() => onSave(content, author)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
  },

  input: {
    borderWidth: 1,
    borderColor: "deepskyblue",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    width: "80%",
    fontSize: 16,
  },
});

export default NewQuote;
