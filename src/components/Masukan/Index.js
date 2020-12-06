import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { WARNA_BIRU, WARNA_SEKUNDER } from '../../utils/constant'

const Input = ({placeholder}) => {
    return (<TextInput 
        style={styles.Input} 
        placeholder={placeholder}/>
    )
}

export default Input

const styles = StyleSheet.create({
    Input:{
        borderWidth : 1,
        borderColor : WARNA_BIRU,
        borderRadius: 25,
        paddingHorizontal: 18,
        fontSize: 14,
        color: 'black',
        marginBottom: 20,
    
    }
})
