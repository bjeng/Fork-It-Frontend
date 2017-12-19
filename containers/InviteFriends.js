import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../components/Navbar.js';
import FriendItem from '../components/FriendItem.js';
import FormBar from '../components/FormBar.js';
import Tabbar from '../components/Tabbar.js';
import _ from 'underscore';

const allData = [
  {title: "A", data: ["apple", "artichoke"]},
  {title: "B", data: ["banana", "bacon"]},
  {title: "C", data: ["cookie", "cheese", "chocolate", "curry", "cake"]},
  {title: "D", data: ["doritos"]},
  {title: "E", data: ["eggs"]},
  {title: "F", data: ["falafel", "fudge"]},
  {title: "G", data: ["gouda", "gyro"]},
  {title: "H", data: ["hot dog", "hero"]},
  {title: "I", data: ["ice cream"]},
]

class InviteFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      data: allData,
      FoF: true
    }
  }

  fofToggle(){
    const opposite = !this.state.FoF;
    this.setState({
      FoF: opposite
    })
  }

  search(searchVal){
    let finalDisplay = _.reduce(allData, (initial, obj) => {
      let newList = obj.data.filter((item) => item.includes(searchVal.toLowerCase()));
      if (newList.length > 0) initial.push(Object.assign({}, obj, {data: newList}));
      return initial;
    }, []);
    this.setState({
      data: finalDisplay
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormBar title={"Friends"} aLink={() => Actions.eventform()} bLink={() => Actions.invitefriends()}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <View style={styles.createContainer}>
            <TouchableOpacity style={styles.optionContainer} onPress={() => {this.fofToggle()}}>
              <Image style={styles.group} source={require("../assets/groupMGrey.png")}/>
              {this.state.FoF ? <Text style={styles.optionText}>+1s ON </Text> : <Text style={styles.optionText}>+1s OFF </Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer}>
              <Image style={styles.group} source={require("../assets/plusMGrey.png")}/>
              <Text style={styles.optionText}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.statuspage} style={styles.optionContainer}>
              <Image style={styles.group} source={require("../assets/CubeLogoMGrey.png")}/>
              <Text style={styles.optionText}>Create</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.searchContainer}>
              <Image style={styles.logoSearch} source={require("../assets/search.png")}/>
              <TextInput style={styles.search} placeholder={'Search'} onChangeText={(searchVal) => {this.search(searchVal)}}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.counterText}>10</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <SectionList
              renderItem={({item, index}) => <FriendItem key={index} title={item}/>}
              renderSectionHeader={({section}) =>
                <View style={styles.sectionHeader}><Text style={styles.sectionText}>{section.title}</Text></View>}
              sections={this.state.data}
            />
          </View>
        </View>
      </View>
    );
  }
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
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: '100%',
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-50),
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
    flex: 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#95989A'
  },
  rowContainer: {
    flex: 0.8,
    flexDirection: 'row',
    width: '100%',
  },
  searchContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: moderateScale(40),
    margin: moderateScale(10)
  },
  textContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterText: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: moderateScale(25),
    color: '#646464',
  },
  listContainer: {
    flex: 5
  },
  search: {
    width: '85%',
    left: scale(15),
    fontSize: moderateScale(15),
    color: '#646464'
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%'
  },
  optionText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(15),
    marginTop: verticalScale(5),
    fontWeight: 'bold',
  },
  group: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  },
  logoSearch: {
    height: verticalScale(20),
    width: scale(20),
    left: scale(3),
    opacity: 0.52,
    overflow: 'visible'
  },
  sectionHeader: {
    width: '100%',
    height: verticalScale(15),
    justifyContent: 'space-around',
    backgroundColor: 'silver',
  },
  sectionText: {
    fontFamily: 'Futura',
    fontSize: moderateScale(10),
    marginLeft: scale(10)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);
