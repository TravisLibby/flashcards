import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../utils/api';
import { receiveCard } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  submit = () => {
    const { title } = this.props.navigation.state.params.deck;
    addCardToDeck(title, this.state, this.props.navigation.state.params.deck)
      .then(() => {
        this.props.dispatch(receiveCard({title}, this.state));
        this.setState(() => {
          return {
            question: '',
            answer: ''
          };
        });
        this.props.navigation.navigate('DeckDetail', this.props.navigation.state.params.deck)
    });
  };

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.header}>Question:</Text>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          style={styles.textInput}
          value={question}
        />
        <Text style={styles.header}>Answer:</Text>
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          style={styles.textInput}
          value={answer}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

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

export default connect()(AddCard);
