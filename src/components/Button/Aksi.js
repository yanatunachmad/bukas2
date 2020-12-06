import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { WARNA_BIRU } from '../../utils/constant'

const Aksi = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.wrapper.component} onPress={onPress}>
            <Text style={styles.text.desc}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper: {
        component: {
            backgroundColor: 'red',
            borderRadius: 3,
            paddingVertical: 2,
            width: 50,
            


        }
    },
    text: {
        desc: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center'
        }
    }

}

export default Aksi;


