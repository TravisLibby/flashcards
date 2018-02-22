import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class DeckDetail extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.state.params.title
    };
  };

  render() {
    const { navigation } = this.props;
    const deck = this.props.decks[navigation.state.params.title];
    const numCards = deck.questions.length;

    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 30, textAlign: 'center', marginTop: 60}}>{deck.title}</Text>
          <Text style={{fontSize: 20, textAlign: 'center'}}>{numCards} {numCards !== 1 ? 'cards' : 'card'}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddCard', {deck})}>
            <Text>Add Card</Text>
          </TouchableOpacity>
          {numCards > 0 &&
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Quiz', {deck})}>
              <Text>Start Quiz</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  btn: {
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20
  }
});

const mapStateToProps = (decks) => {
  return {
    decks
  }
};

export default connect(mapStateToProps)(DeckDetail);
