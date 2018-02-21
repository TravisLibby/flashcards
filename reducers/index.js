import { RECEIVE_DECKS, RECEIVE_DECK, RECEIVE_CARD } from '../actions';

const decks = (state = {}, action) => {
  console.log('in the reducer');
  console.log('action', action);
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case RECEIVE_DECK:
      return {
        ...state,
        ...action.deck
      }
    case RECEIVE_CARD:
    const title = action.title.title;
      return {
        ...state,
        [title]: {
          title: [title],
          questions: [
            ...state[title].questions,
            action.card
          ]
        }
      };
    default:
      return state;
  }
};

export default decks;
