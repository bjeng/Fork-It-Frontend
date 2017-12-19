import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class MyEventBar extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const aTextOn = this.props.title === "Ongoing" ? styles.selectedText : styles.unselectedText;
    const bTextOn = this.props.title === "Planned" ? styles.selectedText : styles.unselectedText;
    const aContOn = this.props.title === "Ongoing" ? styles.subContainerSelected : styles.subContainer;
    const bContOn = this.props.title === "Planned" ? styles.subContainerSelected : styles.subContainer;
    const cContOn = this.props.title === "Notif" ? styles.nSelected : styles.nUnselected;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.myevents3} style={cContOn}>
          <Text style={styles.nText}>N</Text>
        </TouchableOpacity>
        <TouchableOpacity style={aContOn} onPress={() => this.props.aLink()}>
          <View><Text style={aTextOn}>Ongoing</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={bContOn} onPress={() => this.props.bLink()}>
            <View><Text style={bTextOn}>Planned</Text></View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    height: verticalScale(75),
    width: scale(375),
    backgroundColor: "#EBEBEB",
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nUnselected: {
    width: '12%',
    height: '100%',
    backgroundColor: '#B7B7B7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nSelected: {
    width: '12%',
    height: '100%',
    backgroundColor: '#535353',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nText: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: moderateScale(25)
  },
  subContainerSelected: {
    flexDirection: 'column',
    height: verticalScale(75),
    width: '44%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#646464'
  },
  subContainer: {
    flexDirection: 'column',
    height: verticalScale(75),
    width: '44%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#8D8D8D'
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
