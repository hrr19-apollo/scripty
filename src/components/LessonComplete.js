import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

const LessonComplete = ({ navigator, numberCorrect, numberIncorrect }) => {
  const { viewStyle, cardStyle, textStyle, bigTextStyle, greenText, redText, subHead } = styles;

  const navigate = (routeName) => {
    navigator.push({name:routeName});
  };

  let total = numberCorrect + numberIncorrect;

  return (
    <View style={viewStyle}>
      <Text style={bigTextStyle}>
        Congratulations!
      </Text>
      <Text style={subHead}> You got {numberCorrect} out of {total} correct! </Text>

      <TouchableHighlight style={cardStyle} underlayColor={darkerBlue} onPress={navigate.bind(this, 'Home')}>
        <Text style={textStyle} > Home </Text>
      </TouchableHighlight>
    </View>
  )
}

const successBlue = '#00C2FC';
const darkerBlue = '#00A6D9';
const green = '#60CF73';
const incorrectRed = '#FA6467';

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: Dimensions.get("window").height,
  },
  cardStyle: {
    backgroundColor: successBlue,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,

    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bigTextStyle: {
    fontSize: 28,
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  subHead: {
    fontSize: 20, 
    marginBottom: 10,
  },
  greenText: {
    color: green,
  }, 
  redText: {
    color: incorrectRed,
  }
}

export default LessonComplete;