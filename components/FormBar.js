import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';

export default class FormBar extends React.Component {
  constructor() {
    super()
    this.state = {
      facts: styles.selectedText,
      factsCont: styles.subContainerSelected,
      friends: styles.unselectedText,
      friendsCont: styles.subContainer
    }
  }

  selectFacts(fn) {
    this.setState({
      facts: styles.selectedText,
      factsCont: styles.subContainerSelected,
      friends: styles.unselectedText,
      friendsCont: styles.subContainer
    })
    fn()
  }

  selectFriends(fn) {
    this.setState({
      facts: styles.unselectedText,
      factsCont: styles.subContainer,
      friends: styles.selectedText,
      friendsCont: styles.subContainerSelected
    })
    fn()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={this.state.factsCont} onPress={() => this.selectFacts(Actions.eventform)}>
          <View><Text style={this.state.facts}>Facts</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.friendsCont} onPress={() => this.selectFriends(Actions.invitefriends)}>
            <View><Text style={this.state.friends}>Friends</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(75),
    width: scale(375),
    backgroundColor: "#EBEBEB",
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainerSelected: {
    flexDirection: 'column',
    height: verticalScale(75),
    width: scale(375/2),
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#646464'
  },
  subContainer: {
    flexDirection: 'column',
    height: verticalScale(75),
    width: scale(375/2),
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#8D8D8D'
  },
  minibarText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(26),
    textAlign: 'center'
  },
  selectedText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(25),
    marginBottom: verticalScale(12)
  },
  unselectedText: {
    fontFamily: 'Futura',
    color: '#B7B7B7',
    fontSize: moderateScale(25),
    marginBottom: verticalScale(12)
  }
});
