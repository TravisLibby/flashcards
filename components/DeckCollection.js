import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';

class DeckCollection extends Component {
  render() {
    const { decks, navigation } = this.props;

    return (
      <View>
        {decks &&
          Object.keys(decks).map((deck) => (
            <Deck key={deck} item={decks[deck]} navigation={navigation} />
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = (decks) => {
  return {
    decks
  };
};

export default connect(mapStateToProps)(DeckCollection);
