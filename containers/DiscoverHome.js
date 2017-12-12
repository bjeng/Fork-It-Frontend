import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const DiscoverHome = ({ user }) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.discoverHead}>
            <Text style={styles.discoverText}>Discover</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playText}> Status </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eats1}>
            <Text style={styles.playText}> Single Player </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eventform}>
            <Text style={styles.playText}> Multiplayer </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

DiscoverHome.propTypes = {
};

const mapStateToProps = (state) => {
    return {
      user: state.user
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
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  discoverHead: {
    flex: 1,
    justifyContent: 'center',
  },
  discoverText: {
    fontSize: moderateScale(60),
    fontFamily: 'Futura',
    color: 'white',
  },
  playButton: {
    width: scale(250),
    backgroundColor: 'rgba(255,255,255,.40)',
    justifyContent: 'center',
    borderRadius: scale(20),
    flex: 1,
    marginBottom: verticalScale(50)
  },
  playText: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white',
    alignSelf: 'center'
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverHome);
