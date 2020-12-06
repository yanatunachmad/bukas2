import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconAddSaldo, IconLocation } from '../../assets/icons'
const Kota = () => {
    return (
        <View style={styles.umum}>
            
            
            <View style={styles.icon}><IconLocation width={20} height={22}/></View>
            <Text style={styles.title}>Bandung</Text>
        </View>
        
    )
}

export default Kota

const styles = StyleSheet.create({

    title: {
        paddingLeft: 10,
        paddingBottom: 20,
        fontSize: 15,
        alignItems: 'center',
      },
    umum: {
        flexDirection: 'row',
        paddingLeft: 21,
      },
    icon: {
        
      },
})
