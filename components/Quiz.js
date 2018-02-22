import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    score: 0,
    showingAnswer: false,
    quizComplete: false
  };

  showAnswer = () => this.setState({showingAnswer: true});

  incrementQuestion = () => {
    this.setState((prevState) => {
      return {
        currentQuestion: prevState.currentQuestion += 1,
        showingAnswer: false
      };
    });
  };

  quizIsComplete = () => {
    const { deck } = this.props.navigation.state.params;
    return deck.questions.length === this.state.currentQuestion + 1;
  };

  correct = () => {
    this.setState((prevState) => {
      return {
        score: prevState.score += 1
      };
    });
    if (this.quizIsComplete()) {
      this.setState({quizComplete: true})
    } else {
      this.incrementQuestion();
    }
  };

  incorrect = () => {
    if (this.quizIsComplete()) {
      this.setState({quizComplete: true})
    } else {
      this.incrementQuestion();
    }
  };

  resetQuiz = () => {
    this.setState(() => {
      return {
        currentQuestion: 0,
        score: 0,
        showingAnswer: false,
        quizComplete: false
      };
    });
  };

  render() {
    const { showAnswer, correct, incorrect, resetQuiz } = this;
    const { deck } = this.props.navigation.state.params;
    const numQuestions = deck.questions.length;
    const { currentQuestion, showingAnswer, quizComplete, score } = this.state;

    return (
      <View style={styles.container}>
        {!quizComplete &&
        <View>
          <View>
            <Text style={{fontSize: 20, textAlign: 'center'}}>{currentQuestion + 1} / {numQuestions}</Text>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              {deck.questions[currentQuestion].question}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => showAnswer()}>
              <Text>Answer</Text>
            </TouchableOpacity>
          </View>
          {showingAnswer &&
            <View>
              <Text style={{fontSize: 20, textAlign: 'center'}}>
                {deck.questions[currentQuestion].answer}
              </Text>
            </View>
          }
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => correct()}>
              <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => incorrect()}>
              <Text>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      {quizComplete &&
        <View>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
            Your Score: {(score / numQuestions) * 100}%
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => resetQuiz()}>
            <Text>Retake Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('DeckDetail', deck)}>
            <Text>Return to Deck</Text>
          </TouchableOpacity>
        </View>
      }
      </View>
    )
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

export default Quiz;
