import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import CategoryItem from '../components/CategoryItem.js';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import dollarIcon from '../assets/dollarsignsGrey.png';
import timeIcon from '../assets/timeMGrey.png';
import calIcon from '../assets/calendarMGrey.png';
import cusIcon from '../assets/cuisineMGrey.png';

const StatusPage = ({}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundColor} source={require("../assets/MultiFormL.png")}/>
        <View style={styles.background}>
          <View style={styles.currentContainer}>
            <Text style={styles.statusText}>Game Closed!</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsLeft}>
              <Text style={styles.title}>U MY ENTOURAGE</Text>
              <Text style={styles.lightFont}>Dinner at Mr. Gs</Text>
              <Text style={styles.lightFont}>Friday at pm</Text>
            </View>
            <View style={styles.detailsRight}>
              <View style={styles.hostContainer}>
                <Text style={styles.lightFont}>H</Text>
                <View style={styles.hostCircle}>
                  <Image style={styles.headShot} source={require('../assets/profile.png')}/>
                </View>
                <Text style={styles.hostName}>Adam</Text>
              </View>
              <View style={styles.inviteContainer}>
                <Text style={styles.hostName}>invited 4</Text>
                <Image style={styles.addIcon} source={require("../assets/add2Grey.png")}/>
              </View>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.guestsContainer}>
              <Text style={styles.guestTitle}>Guests</Text>
              <View style={styles.guestsBar}>
                <View style={styles.guestCircle}>
                  <Image style={styles.headShot} source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.guestCircle}>
                  <Image style={styles.headShot} source={require('../assets/profile.png')}/>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.resultContainer} onPress={Actions.eats1multi}>
              <LinearGradient colors={['#F63535', 'rgba(246, 53, 53, 0.75)', 'rgba(255, 27, 0, 0.75)', '#FF7F00']}
                style={styles.resultButton} location={[0.8, 0.66, 0.4, 0.2]}>
                <Text style={{fontFamily: 'Futura', color: 'white', fontSize: moderateScale(20)}}>Play</Text>
              </LinearGradient>
              {/* <LinearGradient colors={['#303F4C', '#3B4955', '#AFAFAF']}
                style={styles.resultButton} location={[0.3, 0.4, 1]}>
                <Text style={{fontFamily: 'Futura', color: 'white', fontSize: moderateScale(20)}}>Go to Result</Text>
              </LinearGradient> */}
            </TouchableOpacity>
          </View>
          <View style={styles.responsesContainer}>
            <View style={styles.categoryHeader}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Categories</Text></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Winning</Text></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Responded</Text></View>
            </View>
            <View style={{flex: 8}}>
              <CategoryItem type={'Price'} img={dollarIcon} winning={'$$'}/>
              <CategoryItem type={'Cuisine'} img={cusIcon} winning={'Mexican'}/>
              <CategoryItem type={'Date'} img={calIcon} winning={'Friday'}/>
              <CategoryItem type={'Time'} img={timeIcon} winning={'7 PM'}/>
            </View>
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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(667-50),
    width: scale(375),
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    height: verticalScale(667),
    width: scale(375)
  },
  detailsContainer: {
    width: scale(375),
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  currentContainer: {
    width: scale(375),
    height: verticalScale(60),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#EBEBEB",
    paddingBottom: verticalScale(10)
  },
  actionContainer: {
    width: '95%',
    flex: 2,
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  responsesContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 7,
    marginTop: verticalScale(15)
  },
  hostCircle: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: scale(25),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headShot: {
    height: verticalScale(20),
    width: scale(20)
  },
  guestCircle: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: scale(20),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5)
  },
  guestTitle: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20),
    left: scale(5)
  },
  statusText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20)
  },
  detailsLeft: {
    width: scale(200),
    justifyContent: 'center',
    paddingLeft: scale(5)
  },
  title: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5)
  },
  lightFont: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(20)
  },
  detailsRight: {
    width: scale(125),
    justifyContent: 'center',
  },
  hostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hostName: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(16),
  },
  inviteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: scale(120)
  },
  addIcon: {
    width: scale(35),
    height: verticalScale(35),
    overflow: 'visible'
  },
  guestsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 3.5
  },
  guestsBar: {
    width: scale(220),
    height: verticalScale(55),
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: scale(55),
    flexDirection: 'row',
    alignItems: 'center'
  },
  resultContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  resultButton: {
    width: scale(120),
    height: verticalScale(55),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryHeader: {
    flex: 1,
    borderColor: '#646464',
    borderBottomWidth: scale(2),
    width: scale(375),
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(18),
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusPage);
