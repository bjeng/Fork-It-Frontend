import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView,TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import FriendItem from '../components/FriendItem.js';
// var AlphabetListView = require('react-native-alphabetlistview');

class InviteFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        A: ['some','entries','are here'],
        B: ['some','entries','are here'],
        C: ['some','entries','are here'],
        D: ['some','entries','are here'],
        E: ['some','entries','are here'],
        F: ['some','entries','are here'],
        G: ['some','entries','are here'],
        H: ['some','entries','are here'],
        I: ['some','entries','are here'],
        J: ['some','entries','are here'],
        K: ['some','entries','are here'],
        L: ['some','entries','are here'],
        M: ['some','entries','are here'],
        N: ['some','entries','are here'],
        O: ['some','entries','are here'],
        P: ['some','entries','are here'],
        Q: ['some','entries','are here'],
        R: ['some','entries','are here'],
        S: ['some','entries','are here'],
        T: ['some','entries','are here'],
        U: ['some','entries','are here'],
        V: ['some','entries','are here'],
        W: ['some','entries','are here'],
        X: ['some','entries','are here'],
        Y: ['some','entries','are here'],
        Z: ['some','entries','are here'],
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={Actions.eventform} style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}><Text>AAAAAAAAAAAAAA</Text></TouchableOpacity>
            <TouchableOpacity style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}><Text>BBBBBBBBBBBBBB</Text></TouchableOpacity>
          </View>
          <View style={styles.createContainer}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Friends O' Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Create Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TextInput style={styles.search} placeholder={'Search'}/>
          </View>
          <View style={styles.listContainer}>
            {/* <AlphabetListView
              data={this.state.data}
              cell={FriendItem}
              cellHeight={100}
              sectionHeaderHeight={22.5}
            /> */}
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
          </View>
        </View>
      </View>
    );
  }
}

InviteFriends.propTypes = {
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
  createContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  searchContainer: {
    flex: 1,
    width: scale(375),
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    flex: 5
  },
  search: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    width: 250
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);
