import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Bakso, Input } from '../../components'
import { WARNA_ABU_ABU, WARNA_BIRU, WARNA_UTAMA } from '../../utils/constant'
import { IconBack, IconRegist, Confirm } from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'
import ActionButton from '../Welcome/ActionButton'

const ConfirmQr = ({ navigation }) => {
    const handleGoTo = screen => {
        navigation.replace(screen);
    }
    return (
        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <IconBack width={25} height={25} />
                <View style={styles.iconBack}>
                    <Image source={Confirm} />
                </View>
                <View>
                    <Text style={styles.text.Note}>
                        Rp.100.000
                </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: WARNA_UTAMA, justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 20 }}>
                    <View style={{ width: 280, height: 129, backgroundColor: WARNA_BIRU, paddingHorizontal: 16, alignItems: 'center', }}>
                        <Text style={styles.text.desc}>Pembayaran Kepada</Text>
                        <Text style={styles.text.Tambah}>DTI TELKOM UNIVERSITY</Text>
                        <Text style={styles.text.last}>0293183920</Text>
                        <View style={{ paddingHorizontal: 20, justifyContent: 'center', marginVertical: 150 }}>
                        </View>
                    </View>
                </View>




                <View style={{ alignItems: "center", marginTop: 50 }} >
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
        justiftyContent: "center",
        alignItems: "center",
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
            color: 'white',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 6,
            marginTop: 15

        },
        Note: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 6,
            marginTop: 15
        },
        Tambah: {
            fontSize: 20,
            
            color: 'white',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 6,
            marginTop: 2
        },
        last: {
            fontSize: 12,   
            color: 'white',
            textAlign: 'center',
            paddingHorizontal: '15%',
            marginBottom: 6,
            marginTop: 2
        }
    },
    space: value => {
        return {
            height: value,
        }
    }

}

export default ConfirmQr


