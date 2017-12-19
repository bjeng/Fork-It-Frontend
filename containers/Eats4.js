import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';
import CalendarTrivia from '../components/CalendarTrivia.js';
import SelectorTime from '../components/SelectorTime.js';

const Eats4 = ({}) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-3.png")}/>
          <View style={styles.tile}>
            <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
            <Text style={styles.timer}> 00:10 </Text>
            <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
          </View>
          <View style={styles.tileContent}>
            <Text style={styles.topText}>What day?</Text>
            <CalendarTrivia/>
          </View>
          <View style={styles.tileContent}>
            <Text style={styles.topText}>What time?</Text>
            <SelectorTime/>
          </View>
        </View>
      </View>
    );
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
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  tile: {
    height: verticalScale(200),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tileContent: {
    height: verticalScale(150),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: verticalScale(50),
    marginTop: verticalScale(20)
  },
  topText: {
    fontSize: scale(45),
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center'
  },
  rowSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(375),
    height: verticalScale(200)
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  hiker: {
    height: verticalScale(40),
    width: scale(20)
  },
  car: {
    height: verticalScale(40),
    width: scale(60)
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  option: {
    borderWidth: moderateScale(3),
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,.20)',
    height: verticalScale(90),
    width: scale(340),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: scale(50),
    margin: moderateScale(8)
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30),
    margin: scale(15)
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats4);
