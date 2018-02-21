import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Deck extends Component {
  render() {
    const deck = this.props.item;
    const numCards = deck.questions.length;
    const { navigation } = this.props;

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.deckBtn} onPress={() => navigation.navigate('DeckDetail', deck)}>
            <Text style={{color: 'black', fontSize: 30}}>{deck.title}</Text>
            <Text style={{color: 'grey', fontSize: 20}}>{numCards} {numCards !== 1 ? 'cards' : 'card'}</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  deckBtn: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'
  }
})

export default Deck;
