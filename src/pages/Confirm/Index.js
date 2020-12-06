import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashBackground, emoneylog, emoney } from '../../assets'
import { WARNA_BIRU } from '../../utils/constant';

const Confirm = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 1500)
    }, [navigation]);

    return (
      <View style={styles.wrapper.pages}>
      <View style={styles.wrapper.ilustrasi} />
      <Text style={styles.text.welcome}>Selamat Top Up Anda Berhasil</Text>
      </View>
    )
}

export default Confirm

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
          marginBottom: 0
      }
  },
  text: {
      welcome:{
          fontSize: 30, 
          fontWeight: 'bold', 
          color: WARNA_BIRU, 
          marginBottom: 76
      }
  }
}
