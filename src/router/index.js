import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Akun, Login, Welcome, Regist, Transaksi, Topup, Confirm, QRCode, ConfirmQr, SplashC, Transfer, Confirmtransfer , Page1, Page2, Page3, OnBoard2} from '../pages';
import { BottomNavigator } from '../components/';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Dashboard" component={Home} />
        <Tab.Screen name="BuKas" component={Transaksi} />
        <Tab.Screen name="Profil" component={Akun} />
      </Tab.Navigator>
  );
};


const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
      <Stack.Screen name="Regist" component={Regist}  options={{ headerShown: false }}/>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
      <Stack.Screen name="Topup" component={Topup} options={{ headerShown: false }}/>
      <Stack.Screen name="Confirm" component={Confirm} options={{ headerShown: false }}/>
      <Stack.Screen name="QRCode" component={QRCode} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmQr" component={ConfirmQr} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmTf" component={Confirmtransfer} options={{ headerShown: false }}/>
      <Stack.Screen name="SplashC" component={SplashC} options={{ headerShown: false }}/>
      <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false }}/>
      <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false }}/>
      <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false }}/>
      <Stack.Screen name="Page3" component={Page3} options={{ headerShown: false }}/>
      <Stack.Screen name="OnBoard2" component={OnBoard2} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
