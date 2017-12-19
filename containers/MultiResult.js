import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const MultiResult = ({}) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <Image style={styles.backgroundColor} source={{uri: 'https://media.giphy.com/media/120ErahsQyf1q8/giphy.gif'}}/>
          <View><Text style={styles.celebrateText}>Your Restaurant has been selected!</Text></View>
          <TouchableOpacity style={styles.goButton} onPress={Actions.singleresult}><Text style={styles.goText}>See the Result</Text></TouchableOpacity>
        </View>
      </View>
    );
}

MultiResult.propTypes = {
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
    height: verticalScale(667-50),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-50),
    width: scale(375)
  },
  celebrateText:{
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(42),
    textAlign: 'center'
  },
  goButton: {
    backgroundColor: 'rgba(255,255,255,.5)',
    width: scale(300),
    height: verticalScale(70),
    padding: scale(20),
    borderRadius: scale(75),
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(20)
  },
  goText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(24)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiResult);
