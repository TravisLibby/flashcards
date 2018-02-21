import { AsyncStorage } from 'react-native';

const KEY = 'Flashcards:QuizContent';

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// Set the default quiz content.
export function getDecks () {
  return AsyncStorage.getItem(KEY).then(response => {
    console.log(JSON.parse(response));
    if (!JSON.parse(response)) {
      return AsyncStorage.setItem(KEY, JSON.stringify(decks))
        .then(() => {
          return AsyncStorage.getItem(KEY).then(response => JSON.parse(response));
        });
    } else {
      return AsyncStorage.getItem(KEY).then(response => JSON.parse(response));
    }
  });
};

function getDeck (title) {
  return getDecks().then(result => result);
}

export function addDeck (title) {
  const deck = JSON.stringify({
    [title]:{
      title,
      questions: []
    }
  });

  return AsyncStorage.mergeItem(KEY, deck).then(() => {
    return JSON.parse(deck);
  });
};

export function addCardToDeck (title, card, deck) {
  return getDeck(title).then(deck => deck[title].questions)
    .then((questions) => {
      return AsyncStorage.mergeItem(KEY, JSON.stringify({
        [title]: {
          title,
          questions: [
            ...questions,
            card
          ]
        }
      }));
    })
};
