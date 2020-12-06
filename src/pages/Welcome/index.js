import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import { Books, Location } from '../../assets';
import styles from '../Login/Styles';

const Welcome = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.logosplashscreen} source={Location}/>
            <Text style={styles.textonboarding}>Location Based</Text>
            <Text style={styles.textonboardingdesc}>Informasi Buku Berdasarkan Lokasi</Text>
            <Text style={styles.textonboardingdesc}>yang kamu Inginkan</Text>
            <View style={styles.buttonbottom}>
                <TouchableHighlight underlayColor="#AE4E4E" onPress = {() => navigation.navigate('OnBoard2')}>
                    <Text style={styles.submitButton}>Lanjutkan</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default Welcome;