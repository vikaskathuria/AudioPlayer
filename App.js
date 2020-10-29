
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppState,
} from 'react-native';
import AppMainStack from './src/routes';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';

class  App extends React.Component{

  render(){

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppMainStack/>
      </PersistGate>
    </Provider>)

}

}
export default App;
