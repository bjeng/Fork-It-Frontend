import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';

export default class MinibarResults extends React.Component {
  constructor() {
    super()
    this.state = {
      leftDash: '#F63535',
      rightDash: '#00042E'
    }
  }

  selectResults(fn) {
    this.setState({
      leftDash: '#F63535',
      rightDash: "#00042E",
    })
    fn()
  }

  selectMap(fn) {
    this.setState({
      leftDash: '#00042E',
      rightDash: "#F63535",
    })
    fn()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.subContainer} onPress={() => this.selectResults(Actions.listresults)}>
          <Text style={styles.minibarText}>Results</Text>
          <Dash dashGap={0} dashColor={this.state.leftDash} style={{width:scale(55), height:verticalScale(1), top: verticalScale(2)}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer} onPress={() => this.selectMap(Actions.listmap)}>
          <Text style={styles.minibarText}>Map It</Text>
          <Dash dashGap={0} dashColor={this.state.rightDash} style={{width:scale(55), height:verticalScale(1), top: verticalScale(2)}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(70),
    width: scale(375),
    backgroundColor: "#00042E",
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
  minibarText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(18),
    textAlign: 'center'
  }
});
