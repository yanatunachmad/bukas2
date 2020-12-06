import React from 'react';
import {Text, View, Image, TextInput,TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Books } from '../../assets';
import styles from './Styles';

const Login = ({navigation}) => {
    return(
        <View style={styles.containerLoginScreen}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={Books}/>
                <Text style={styles.textloginscreen}>BuKas</Text>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginLeft: 30,marginBottom: 10}}>Email Address</Text>
                <TextInput style={styles.InputEmail} placeholder = "ex: muhnurkhalizz@gmail.com" />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginLeft: 30,marginBottom: 10, marginTop: 15}}>Password</Text>
                <TextInput style={styles.InputEmail} placeholder = "***********" />
                <View style={styles.daftarlogin}>
                <Text onPress = {()=> navigation.navigate('Regist')} style={{color: '#000000', fontSize: 18}}>Belum Memiliki Akun ? Daftar</Text>
            </View>
            </View>
            
            <View style={styles.buttonbottom}>
                <TouchableOpacity>
                <TouchableHighlight underlayColor="#AE4E4E">
                    <Text onPress = {()=> navigation.navigate('MainApp')} style={styles.submitButton}>Masuk</Text>
                </TouchableHighlight>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;