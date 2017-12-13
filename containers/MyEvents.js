import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import EventItem from '../components/EventItem'
import CalendarStrip from 'react-native-calendar-strip';

class MyEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}><Text>AAAAAAAAAAAAAA</Text></TouchableOpacity>
            <TouchableOpacity style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}><Text>BBBBBBBBBBBBBB</Text></TouchableOpacity>
          </View>
          <View style={styles.calendarContainer}>
            <CalendarStrip style={{height: 100, paddingTop: 20, paddingBottom: 10}}/>
          </View>
          <View style={styles.listContainer}>
            <ScrollView>
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

MyEvents.propTypes = {
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375)
  },
  calendarContainer: {
    flex: 2,
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375)
  },
  listContainer: {
    flex: 5,
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyEvents);
