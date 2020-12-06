import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { WARNA_BIRU } from '../../utils/constant'
import Bakso from '../../components/Button'

const ActionButton = ({desc, title, onPress}) => {
    return (
        <View style={styles.wrapper.component}>
            <Text style={ styles.text.desc }>{desc}</Text>
            <Bakso title={title} onPress={onPress} />
        </View>
    )
}
const styles={
    wrapper:{
        component:{marginBottom : 43, maxWidth: 225}
    },
    text:{
        desc:{
            fontSize: 10, 
                color: WARNA_BIRU, 
                textAlign: 'center', 
                paddingHorizontal: '25%', 
                marginBottom: 7,
                maxWidth: 400,
            
        }
    }
}


export default ActionButton;