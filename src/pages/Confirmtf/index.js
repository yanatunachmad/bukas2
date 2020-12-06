import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Bakso, Input } from '../../components'
import { WARNA_ABU_ABU, WARNA_BIRU, WARNA_DISABLE, WARNA_UTAMA } from '../../utils/constant'
import {IconBack, Kirim} from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'
import ActionButton from '../Welcome/ActionButton'

const Confirmtransfer = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <IconBack width={25} height={25}/>
            <View style={styles.iconBack}>
       
       <Image source={Kirim}/>
   
        </View>
            <Text style={styles.text.desc}>
                Periksa Kembali data berikut
            </Text>
            <View style={styles.space(40)} />
            <Text style={styles.text.awe}>
                Rp. 100.000
            </Text >
            <View style={styles.space(20)} />
            <Text style={styles.text.awe1}>
                No: 0918262
            </Text>
            <View style={styles.space(7)} />
            <Text style={styles.text.test}>
                Penerima :
            </Text>
            <Text style={styles.text.prm}>
                Achmad Yanatun
            </Text>
            <View style={{alignItems:"center",}} >
           
            <ActionButton 
            title="SUBMIT" 
            onPress={() => handleGoTo('SplashC')}
            />
            </View>

            </ScrollView>
        </View>
    )
}

const styles = {
    wrapper: {
        page: {
            padding: 20,
            backgroundColor: "white",
            flex: 1

        }
    },
    iconBack: {
        justiftyContent:"center", 
        alignItems:"center",
        marginTop: 20,

    },
    ilustration: {
        width: 106,
        height: 115,
        backgroundColor: WARNA_BIRU,
        marginTop: 50,
        
        
    },
    text: {
        desc: {
            fontSize: 20,
            fontWeight: 'bold',
            color: WARNA_BIRU,
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 6,
            marginTop: 30
        },
        test: {
            fontSize: 20,
            
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 30,
            marginTop: 3
        },
        prm: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 60,
            marginTop: 3
        },
        awe: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: '5%',
            marginRight:40,
            marginLeft:40,
            marginBottom: 5,
            marginTop: 3,
            backgroundColor: WARNA_DISABLE,
            borderRadius: 10,
        },
        awe1: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 50,
            marginTop: 3,
            marginRight:40,
            marginLeft:40,
            marginBottom: 5,
            marginTop: 3,
            backgroundColor: WARNA_DISABLE,
            borderRadius: 10,
        }
        
        
    },
    space: value => {
        return{
            height: value,
        }
    }

}

export default Confirmtransfer


