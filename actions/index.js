export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const RECEIVE_CARD = 'RECEIVE_CARD';

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const receiveDeck = (deck) => {
  return {
    type: RECEIVE_DECK,
    deck
  };
};

export const receiveCard = (title, card) => {
  return {
    type: RECEIVE_CARD,
    title,
    card
  };
};
