import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../utils/api';
import { receiveDeck } from '../actions';

class NewDeck extends Component {
  state = {
    title: ''
  };

  submit = () => {
    addDeck(this.state.title)
      .then((deck) => {
        this.props.dispatch(receiveDeck(deck));
        this.setState({title: ''});
      });
  };

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          style={styles.textInput}
          value={title}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    fontSize: 30,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  textInput: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderWidth: 1
  },
  submitBtn: {
    backgroundColor: 'black',
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'
  }
});

export default connect()(NewDeck);
