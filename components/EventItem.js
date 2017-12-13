import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput} from 'react-native'; //Step 1
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

class EventItem extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render(){
        return (
            <View style={styles.container} >
              <View style={styles.titleContainer}>
                <Text>Dinner at Mr. G's</Text>
              </View>
              <View style={styles.detailsContainer}>
                <View style={{flex: 2}}>
                  <Text>Dec 15 at 8pm</Text>
                  <Text>Saturday</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>HOST</Text>
                </View>
                <View style={{flex: 2}}>
                  <Text>GUEST LIST</Text>
                  <Text>+2 more</Text>
                </View>
              </View>
              <View style={styles.descriptionContainer}>
                <View>
                  <Text>U my entourage</Text>
                </View>
                <View>
                  <Text>Little arrow</Text>
                </View>
              </View>
            </View>
        );
    }
}
export default EventItem;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
    width: scale(375),
    borderBottomWidth: scale(1),
  },
  titleContainer: {
    flex: 1
  },
  detailsContainer: {
    flex: 4,
    flexDirection: 'row'
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
