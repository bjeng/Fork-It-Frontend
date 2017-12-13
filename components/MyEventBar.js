import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';

export default class MyEventBar extends React.Component {
  constructor() {
    super()
    this.state = {
      aCircle: true,
      bCircle: false,
      barText: 'Ongoing'
    }
  }

  aClick(){
    this.setState({
      aCircle: true,
      bCircle: false,
      barText: 'Ongoing'
    })
  }

  bClick(){
    this.setState({
      aCircle: false,
      bCircle: true,
      barText: 'Planned'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => this.aClick()}>
            {this.state.aCircle ? <Image style={styles.circle} source={require("../assets/circleSelectA.png")}/>
          : <Image style={styles.unselectCircle} source={require("../assets/circleUnselectA.png")}/>}
          </TouchableOpacity>
          {this.state.aCircle ? <Image style={styles.point} source={require("../assets/subMenuTri.png")}/>
          : null}
        </View>
        <Text style={styles.minibarText}>{this.state.barText}</Text>
        <TouchableOpacity style={styles.subContainer} onPress={() => this.bClick()}>
          {this.state.bCircle ? <Image style={styles.circle} source={require("../assets/circleSelectB.png")}/>
          : <Image style={styles.unselectCircle} source={require("../assets/circleUnselectB.png")}/>}
          {this.state.bCircle ? <Image style={styles.point} source={require("../assets/subMenuTri.png")}/>
          : null}
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    width: scale(375),
    backgroundColor: "white",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: scale(45),
    height: verticalScale(45),
    top: verticalScale(8),
  },
  unselectCircle: {
    width: scale(45),
    height: verticalScale(45),
  },
  minibarText: {
    fontFamily: 'Futura',
    color: 'black',
    fontSize: moderateScale(26),
    textAlign: 'center'
  },
  point: {
    width: scale(20),
    height: verticalScale(14),
    top: verticalScale(10)
  }
});
