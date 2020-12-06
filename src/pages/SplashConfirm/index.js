import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashBackground, emoneylog, emoney } from '../../assets'
import { WARNA_BIRU } from '../../utils/constant';

const SplashC = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 1500)
    }, [navigation]);

    return (
      <View style={styles.wrapper.pages}>
      <View style={styles.wrapper.ilustrasi} />
      <Text style={styles.text.welcome}>Selamat Transfer Berhasil</Text>
      </View>
    )
}

export default SplashC

const styles ={
  wrapper: {
      pages: {
      alignItems:'center', 
      justifyContent:'center', 
      backgroundColor: 'white', 
      flex:1,
      },
      ilustrasi: {
          width:300 , 
          height: 12, 
          marginBottom: 0,
          alignItems:'center', 
          justifyContent:'center', 
      }
  },
  text: {
      welcome:{
          fontSize: 20, 
          fontWeight: 'bold', 
          color: WARNA_BIRU, 
          marginBottom: 76,
          alignItems:'center', 
          justifyContent:'center', 
      }
  }
}
