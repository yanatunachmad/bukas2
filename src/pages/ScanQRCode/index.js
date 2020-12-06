import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconCam } from '../../assets'
import { Bakso } from '../../components'
import ActionButton from '../Welcome/ActionButton'

const IconWithText = () => {
    return (
        <View>
            <View />
            <Text> Phone Number</Text>
        </View>
    )
}
const IconAction = () => {
    return (
        <View style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: 40 / 2 }}>
        </View>
    )
}

const ScanQRCode = ({ navigation }) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: 300, height: 300, backgroundColor: 'white', paddingHorizontal: 16, alignItems: 'center', backgroundColor: '#696969' }}>
                    <View style={{ paddingHorizontal: 20, justifyContent: 'center', marginVertical: 150 }}>
                        <IconCam />
                    </View>

                </View>
            </View>
            <View style={{ height: 200, backgroundColor: 'white', paddingHorizontal: 16, alignItems: 'center' }}>
                <View>
                    <View style={{ width: 50, height: 4, backgroundColor: '#C4C4C4', marginTop: 10 }} />
                    <View style={{ width: 50, height: 4, backgroundColor: '#C4C4C4', marginTop: 5, marginBottom: 18 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SCAN QR CODE</Text>
                </View>
                <ActionButton title="SUBMIT" onPress={() => handleGoTo('ConfirmQr')} />
                <View>
                </View>
            </View>
        </View>
    )
}

export default ScanQRCode;

const styles = StyleSheet.create({})
