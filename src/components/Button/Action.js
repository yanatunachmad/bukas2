import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { WARNA_BIRU } from '../../utils/constant'
import Bakso from '../../components/Button'
import Aksi from './Aksi'

const Action = ({title, onPress}) => {
    return (
        <View style={styles.wrapper.component}>
            <Aksi title={title} onPress={onPress} />
        </View>
    )
}
const styles={
    wrapper:{
        component:{ maxWidth: 225}
    },
    
}


export default Action;