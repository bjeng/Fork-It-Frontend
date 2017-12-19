import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'underscore';

let week = []
let firstDay = moment();
for(let i = 0; i < 14; i++){
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

export default class CalendarForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
    }
  }

  selectDay(selectedDate){
    const stateLength = this.state.selected.length;
    const maxDate = stateLength === 0 ? 'none' : _.max(this.state.selected, (date) => {return date})
    const minDate = stateLength === 0 ? 'none' : _.min(this.state.selected, (date) => {return date})
    const selDuration = moment.duration(moment(selectedDate) - moment(minDate)).asDays()
    console.log(selDuration, selectedDate, minDate)
    if(selectedDate > maxDate && selDuration <= 3){
      const newSelection = this.state.selected.concat(selectedDate);
      this.setState({
        selected: newSelection
      })
    }

    if(selectedDate < maxDate || selDuration > 3 || maxDate === 'none'){
      this.setState({
        selected: [selectedDate]
      })
    }
  }

  dayItem(date, dayAbr, num, i) {
    const selected = this.state.selected;
    const included = selected.includes(num);
    if(included){
      return <TouchableOpacity key={i} style={this.state.selected === num ? styles.dayContainerSel : styles.dayContainer} onPress={() => {this.selectDay(date)}}>
                <Text style={styles.dayText}>{dayAbr}</Text>
                <View style={this.state.selected === num ? styles.numContainer : styles.numContainerSel}>
                  <Text style={this.state.selected === num ? styles. numText : styles.numTextSel}>{num}</Text></View>
             </TouchableOpacity>
    } else {
      return <TouchableOpacity key={i} style={styles.dayContainer} onPress={() => {this.selectDay(date)}}>
                <Text style={styles.dayText}>{dayAbr}</Text>
                <View style={styles.numContainer}><Text style={styles.numText}>{num}</Text></View>
             </TouchableOpacity>
    }
  }

  render() {
    return (
      <View style={styles.calContainer}>
        <ScrollView horizontal={true}>
          {week.map((each, i) => (this.dayItem(each.date, each.dayAbr, each.num, i)))}
        </ScrollView>
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
