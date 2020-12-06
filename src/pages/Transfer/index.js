import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Bakso, Input } from '../../components'
import { WARNA_ABU_ABU, WARNA_BIRU, WARNA_UTAMA } from '../../utils/constant'
import {IconBack, Kirim} from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'
import ActionButton from '../Welcome/ActionButton'

const Confirmtf = ({navigation}) => {
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
                Silahkan isi data berikut
            </Text>
            <View style={styles.space(40)} />
            <Input placeholder="Nominal Transfer" />
            <View style={styles.space(20)} />
            <Input placeholder="Nomor Tujuan" />
            <View style={styles.space(70)} />
            <View style={{alignItems:"center",}} >
            <ActionButton 
            title="Periksa Nomor" 
            onPress={() => handleGoTo('ConfirmTf')}
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
        }
    },
    space: value => {
        return{
            height: value,
        }
    }

}

export default Confirmtf


