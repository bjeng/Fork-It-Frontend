import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';

export default class ListResults extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <MinibarResults/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
          <View style={styles.listContainer}>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantName}>
                  <Text>Restaurant Name</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <Text>Star Star Star Star Star</Text>
                    <Text>1,000 Reviews on Yelp</Text>
                    <Text>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantName}>
                  <Text style={styles.restNameText}>Restaurant Name</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <Text>Star Star Star Star Star</Text>
                    <Text>1,000 Reviews on Yelp</Text>
                    <Text>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantName}>
                  <Text>Restaurant Name</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <Text>Star Star Star Star Star</Text>
                    <Text>1,000 Reviews on Yelp</Text>
                    <Text>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.restart} onPress={Actions.discover}>
              <Text>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gamble} onPress={Actions.singleresult}>
              <Text>Gamble</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
  listContainer: {
    flex: 6,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  listItem: {
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  restaurantPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurantInfo: {
    flex: 2
  },
  restaurantName: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    justifyContent: 'center'
  },
  restNameText: {
    color: 'white',
    fontSize: moderateScale(12)
  },
  restaurantDetails: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row'
  },
  restaurantStats: {
    flex: 2
  },
  eatIcon: {
    flex: 1
  },
  restart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  },
  gamble: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  }
});
