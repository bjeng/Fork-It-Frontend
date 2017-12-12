import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Expandable from '../components/Expandable.js';

const EventForm = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}><Text>AAAAAAAAAAAAAA</Text></TouchableOpacity>
            <TouchableOpacity onPress={Actions.invitefriends} style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}><Text>BBBBBBBBBBBBBB</Text></TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <ScrollView>
              <Expandable style={{flex: 1}}/>
              <Expandable style={{flex: 1}}/>
              <Expandable style={{flex: 1}}/>
              <Expandable style={{flex: 1}}/>
              <Expandable style={{flex: 1}}/>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.nextContainer}>
            <TouchableOpacity onPress={Actions.invitefriends}><Text>NEXT BUTTON</Text></TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
}

EventForm.propTypes = {
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
    borderColor: '#fff',
    borderBottomWidth: scale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  optionsContainer: {
    flex: 6
  },
  nextContainer: {
    flex: 1,
    borderColor: '#fff',
    borderTopWidth: scale(1),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventForm);
