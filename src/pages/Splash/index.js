import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { Books } from '../../assets';
import styles from '../Login/Styles';

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Welcome');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>
            
                <Image style={styles.logosplashscreen} source={Books} />
                <Text style={styles.textsplashscreen}>BuKas</Text>
            
        </View>
    );
}

export default Splash
