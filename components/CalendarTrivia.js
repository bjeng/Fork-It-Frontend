import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';

let week = []
let firstDay = moment(); //Change the first day to the earliest day proposed
for(let i = 0; i < 7; i++){
  let date = moment().add(i, 'days');
  let day = moment(date).format('dddd');
  let dayAbr = moment(date).format('dddd').slice(0,1);
  let num = moment(date).date();
  if(day === "Tuesday"){
    dayAbr = "Tu"
  }
  if(day === "Thursday"){
    dayAbr = "Th"
  }
  if(day === "Saturday"){
    dayAbr = "Sa"
  }
  if(day === "Sunday"){
    dayAbr = "Su"
  }
  week.push(Object.assign({}, {date, day, dayAbr, num}))
}

export default class CalendarTrivia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleDays: [20, 21, 22], //Change possible days to those proposed by the host
      selected: 0,
    }
  }

  selectDay(num){
    this.setState({
      selected: num
    })
  }

  dayItem(dayAbr, num, i) {
    const possible = this.state.possibleDays;
    const select = possible.includes(num);
    if(select){
      return <TouchableOpacity key={i} style={this.state.selected === num ? styles.dayContainerSel : styles.dayContainer} onPress={() => {this.selectDay(num)}}>
                <Text style={styles.dayText}>{dayAbr}</Text>
                <View style={styles.numContainerSel}><Text style={styles.numTextSel}>{num}</Text></View>
             </TouchableOpacity>
    } else {
      return <View key={i} style={styles.dayContainer}>
                <Text style={styles.dayText}>{dayAbr}</Text>
                <View style={styles.numContainer}><Text style={styles.numText}>{num}</Text></View>
             </View>
    }
  }

  render() {
    return (
      <View style={styles.calContainer}>
        {week.map((each, i) => (this.dayItem(each.dayAbr, each.num, i)))}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  calContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around'
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayContainerSel: {
    borderColor: 'white',
    borderWidth: moderateScale(3),
    borderRadius: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  dayText: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white'
  },
  numTextSel: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white'
  },
  numContainer: {
    width: scale(37),
    height: verticalScale(37),
    borderRadius: scale(37/2),
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numContainerSel: {
    width: scale(37),
    height: verticalScale(37),
    borderRadius: scale(37/2),
    backgroundColor: '#FF7F00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numText: {
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
    color: 'black',
  }
});
