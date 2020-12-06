import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Bakso, Input } from '../../components'
import { WARNA_ABU_ABU, WARNA_BIRU, WARNA_UTAMA } from '../../utils/constant'
import {IconBack, Topup1} from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'
import ActionButton from '../Welcome/ActionButton'

const Topup = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    }
    return (
        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <IconBack width={25} height={25}/>
            <View style={styles.iconBack}>
            <Image source={Topup1} width={106} height={111} />
            </View>
            <View style={styles.space(28)} />
            <Input placeholder="Nominal Top Up" />
            <View style={styles.space(35)} />
            <View style={{alignItems:"center",}} >
            <ActionButton 
            title="SUBMIT" 
            onPress={() => handleGoTo('Confirm')}
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
            backgroundColor: WARNA_ABU_ABU,
            flex: 1

        }
    },
    iconBack: {
        justiftyContent:"center", 
        alignItems:"center",
        marginTop: 136,

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

export default Topup


