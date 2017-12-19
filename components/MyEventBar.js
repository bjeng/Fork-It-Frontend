import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';

export default class MyEventBar extends React.Component {
  constructor() {
    super()
    this.state = {
      ongoing: styles.selectedText,
      ongoingCont: styles.subContainerSelected,
      planned: styles.unselectedText,
      plannedCont: styles.subContainer
    }
  }

  selectOngoing(fn) {
    this.setState({
      ongoing: styles.selectedText,
      ongoingCont: styles.subContainerSelected,
      planned: styles.unselectedText,
      plannedCont: styles.subContainer
    })
    fn()
  }

  selectPlanned(fn) {
    this.setState({
      ongoing: styles.unselectedText,
      ongoingCont: styles.subContainer,
      planned: styles.selectedText,
      plannedCont: styles.subContainerSelected
    })
    fn()
  }

  render() {
    // const aTextOn = this.props.title === "Ongoing" ? styles.selectedText : styles.unselectedText;
    // const bTextOn = this.props.title === "Planned" ? styles.selectedText : styles.unselectedText;
    // const aContOn = this.props.title === "Ongoing" ? styles.subContainerSelected : styles.subContainer;
    // const bContOn = this.props.title === "Planned" ? styles.subContainerSelected : styles.subContainer;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectOngoing(Actions.myevents)}>
          <View style={this.state.ongoingCont}><Text style={this.state.ongoing}>Ongoing</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectPlanned(Actions.myevents2)}>
            <View style={this.state.plannedCont}><Text style={this.state.planned}>Planned</Text></View>
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
    alignItems: 'center',
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
