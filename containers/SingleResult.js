import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import {MapView} from 'expo';
import StarRating from 'react-native-star-rating';

const SingleResult = ({}) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/burger.jpg")}/>
          <View style={styles.header}>
            <TouchableOpacity onPress={Actions.listresults}><Text style={styles.backText}>-Back-</Text></TouchableOpacity>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Shakeshack</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.left}>
              <Text style={styles.textStyle}>American, Burgers</Text>
              <View style={styles.rating}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={4}
                  starSize={20}
                  starColor={'#646464'}
                  emptyStarColor={'#646464'}
                />
              </View>
              <Text style={styles.textStyle}>1,000 reviews</Text>
              <Text style={styles.textStyle}>1.0 miles away</Text>
            </View>
          </View>
          <View style={styles.actionBar}>
            <View style={styles.leftAction}>
              <TouchableOpacity style={styles.call}>
                <Image style={styles.phoneIcon} source={require("../assets/phone.png")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.yelp}>
                <Image style={styles.yelpIcon} source={require("../assets/yelp.jpg")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.openTable}>
                <Image style={styles.openTableIcon} source={require("../assets/openTable.png")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.rightAction}>
              <View style={styles.star}>
                <StarRating
                  disabled={false}
                  maxStars={1}
                  rating={0}
                  starSize={40}
                  starColor={'#646464'}
                  emptyStarColor={'#646464'}
                />
              </View>
            </View>
          </View>
          <View style={styles.address}>
            <Text style={styles.addressText}>450 S 9th St San Francisco, CA 94103</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={{ width: scale(375), height: verticalScale(246) }}
              region={{
                latitude: 37.771728,
                longitude: -122.409421,
                latitudeDelta: .05,
                longitudeDelta: .05,

              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 37.771728,
                  longitude: -122.409421
                }}
                pinColor={'#008000'}
                />
              <MapView.Marker
                coordinate={{
                  latitude: 37.760602,
                  longitude: -122.419421
                }}
                />
            </MapView>
          </View>
          <View style={styles.forkContainer}>
            <TouchableOpacity style={styles.forkit} onPress={Actions.resultlightbox}>
              <Image style={styles.logoText} source={require("../assets/DesktopCopy3trans.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

SingleResult.propTypes = {
};

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
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667/2),
    width: scale(375),
    opacity: 0.3
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: scale(375),
    padding: scale(12)
  },
  detailsContainer: {
    flex: 3,
    width: scale(375/2),
    flexDirection: 'row'
  },
  mapContainer: {
    flex: 7,
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameContainer: {
    flex: 1,
    width: scale(375),
    paddingLeft: scale(15),
    alignItems: 'flex-start'
  },
  forkContainer: {
    flex: 2,
    width: scale(375)
  },
  star: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: scale(15),
  },
  right: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  leftAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rightAction: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: scale(10)
  },
  details: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  yelp: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d32323',
    borderRadius: moderateScale(25),
    margin: moderateScale(2)
  },
  openTable: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(25),
    margin: moderateScale(2)
  },
  call: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(25),
    margin: moderateScale(2)
  },
  textStyle: {
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
    color: '#646464'
  },
  backText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(18)
  },
  nameText: {
    fontSize: moderateScale(30),
    fontFamily: 'Futura',
    color: '#646464',
  },
  yelpIcon: {
    height: verticalScale(16),
    width: scale(40),
  },
  openTableIcon: {
    height: verticalScale(20),
    width: scale(45),
  },
  phoneIcon: {
    height: verticalScale(25),
    width: scale(19)
  },
  forkit: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00042E",
  },
  logoText: {
    height: verticalScale(90),
    width: scale(275),
    bottom: verticalScale(5)
  },
  actionBar: {
    flex: 2,
    width: scale(375),
    flexDirection: 'row',
  },
  address: {
    flex: 1,
    width: scale(375),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd3dc',
  },
  addressText: {
    fontFamily: 'Futura',
    color: '#646464'
  },
  restaurantStats: {
    flex: 2,
    paddingRight: scale(20),
    justifyContent: 'space-around'
  },
  rating: {
    width: scale(150)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleResult);
