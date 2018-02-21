import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckCollection from './DeckCollection';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    getDecks().then(decks => this.props.dispatch(receiveDecks(decks)));
  }

  render() {
    return (
      <View style={styles.container}>
        <DeckCollection navigation={this.props.navigation}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

export default connect()(Home);
