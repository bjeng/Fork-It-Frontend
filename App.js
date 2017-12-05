import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Lightbox } from 'react-native-router-flux';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Register from './containers/Register.js';
import DiscoverHome from './containers/DiscoverHome.js';
import Eats1 from './containers/Eats1.js';
import Eats2 from './containers/Eats2.js';
import Eats3 from './containers/Eats3.js';
import Algo from './containers/Algo.js';
import ListResults from './containers/ListResults.js';
import ListMap from './containers/ListMap.js';
import SingleResult from './containers/SingleResult.js';
import ResultLightbox from './containers/ResultLightbox.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene key="home" component={Home} initial={true} hideNavBar={true}/>
            <Scene key="login" component={Login} hideNavBar={true}/>
            <Scene key="register" component={Register} hideNavBar={true}/>
            <Scene key="discover" component={DiscoverHome} hideNavBar={true}/>
            <Scene key="eats1" component={Eats1} hideNavBar={true}/>
            <Scene key="eats2" component={Eats2} hideNavBar={true}/>
            <Scene key="eats3" component={Eats3} hideNavBar={true}/>
            <Scene key="algo" component={Algo} hideNavBar={true}/>
            <Scene key="listresults" component={ListResults} hideNavBar={true}/>
            <Scene key="listmap" component={ListMap} hideNavBar={true}/>
            <Scene key="singleresult" component={SingleResult} hideNavBar={true}/>
          </Scene>
          <Scene key="resultlightbox" component={ResultLightbox} hideNavBar={true}/>
        </Lightbox>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
