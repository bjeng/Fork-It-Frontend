import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput} from 'react-native'; //Step 1
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import StarRating from 'react-native-star-rating';

class FriendItem extends Component{
    constructor(props){
        super(props);
        this.state = {
          showSelected: false
        };
    }

    invite() {
      this.setState({
        selected: true
      })
    }

    uninvite() {
      this.setState({
        selected: false
      })
    }

    selected() {
      return (
        <TouchableOpacity onPress={() => this.uninvite()}>
          <View style={styles.container} >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../assets/DesktopCopy2Black.png')} style={{height: 30, width: 30}}/>
            </View>
              <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{this.props.title}</Text>
              </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            </View>
          </View>
        </TouchableOpacity>
      )
    }

    unSelected() {
      return (
        <TouchableOpacity onPress={() => this.invite()}>
          <View style={styles.container} >
            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{this.props.title}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            </View>
          </View>
        </TouchableOpacity>
      )
    }

    render(){
        return (
          <View>
            {this.state.selected ? this.selected() : this.unSelected()}
        </View>
        );
    }
}

export default FriendItem;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderColor: 'white',
    width: scale(375),
    borderBottomWidth: scale(1),
  }
});
