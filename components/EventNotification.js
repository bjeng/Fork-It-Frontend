import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import X from '../assets/xIcon.png';
import Check from '../assets/checkMDGrey.png';

class EventNotification extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render(){
        return (
            <View style={styles.container}>
              <View style={styles.background}>
                <View style={styles.mealContainer}>
                  <Text style={styles.titleText}>Dinner at Mr. Gs</Text>
                  <View style={styles.rowContainer}>
                    <View style={styles.colContainer}>
                      <Text style={styles.detailText}>Dec 15 at 8pm</Text>
                      <Text style={styles.detailText}>SAT</Text>
                    </View>
                    <View style={styles.rowPicContainer}>
                      <View style={styles.hostContainer}>
                        <Text style={styles.hostText}>H</Text>
                        <View style={styles.circle}>
                          <Image style={styles.headShot} source={this.props.host}/>
                        </View>
                      </View>
                      <View style={styles.guestContainer}>
                        <Text style={styles.guestText}>G</Text>
                        <View style={styles.circle}>
                          <Image style={styles.headShot} source={this.props.host}/>
                        </View>
                        <View style={styles.circle}>
                          <Image style={styles.headShot} source={this.props.host}/>
                        </View>
                        <View style={styles.circle}>
                          <Image style={styles.headShot} source={this.props.host}/>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>Let's Turn Up Peeps</Text>
                  <View style={styles.rowIconContainer}>
                    <TouchableOpacity>
                      <Image style={styles.rightButton} source={Check}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image style={styles.rightButton} source={X}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
        );
    }
}
export default EventNotification;

var styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'transparent',
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(4)
  },
  background: {
    backgroundColor: 'rgba(255,255,255,.31)',
    width: scale(358),
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowColor: 'grey',
    shadowOffset: { height: verticalScale(4), width: 0 },
  },
  mealContainer: {
    flex: 1,
    top: verticalScale(8),
    left: scale(8)
  },
  titleText: {
    color: '#646464',
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
  },
  detailText: {
    color: '#8D8D8D',
    fontSize: moderateScale(15),
    fontFamily: 'Futura',
  },
  titleContainer: {
    flex: 1,
    top: verticalScale(8),
    left: scale(8),
    marginBottom: moderateScale(20),
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colContainer: {
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(75)
  },
  rowPicContainer: {
    flexDirection: 'row',
    width: scale(375/2)
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(45)
  },
  circle: {
    height: verticalScale(30),
    width: scale(30),
    borderRadius: scale(30/2),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headShot: {
    height: verticalScale(20),
    width: scale(20)
  },
  guestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: scale(150-45),
    left: scale(5)
  },
  guestText: {
    color: '#8D8D8D',
    fontSize: moderateScale(13),
    right: scale(5)
  },
  hostText: {
    color: '#8D8D8D',
    fontSize: moderateScale(13),
    right: scale(5)
  },
  rightButton: {
    width: scale(30),
    height: verticalScale(30),
    right: scale(20),
    overflow: 'visible'
  }
});
