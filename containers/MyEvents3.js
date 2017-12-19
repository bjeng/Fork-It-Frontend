import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import EventNotification from '../components/EventNotification.js';
import MyEventBar from '../components/MyEventBar.js';
import Calendar from '../components/Calendar.js';
import ProfPic from '../assets/profile.png';

class MyEvents3 extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
        <MyEventBar title={'Notif'} aLink={Actions.myevents} bLink={Actions.myevents2}/>
        <ScrollView style={{top: verticalScale(20)}}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>New Events</Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>This Week</Text>
            </View>
            <EventNotification host={ProfPic}/>
            <EventNotification />
            <EventNotification />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>Next Week</Text>
            </View>
            <EventNotification />
            <EventNotification />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667),
    width: scale(375)
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    height: verticalScale(667),
    width: scale(375)
  },
  titleContainer: {
    width: scale(375),
    height: verticalScale(25),
    justifyContent: 'center',
    left: scale(10),
  },
  titleText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(28)
  },
  sectionContainer: {
    width: scale(310),
    marginTop: verticalScale(15),
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#95989A',
    left: scale(13),
  },
  sectionText: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(18)
  },
  listContainer: {
    flex: 5,
    width: scale(375)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyEvents3);
