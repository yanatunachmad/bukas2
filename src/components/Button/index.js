import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { WARNA_BIRU } from '../../utils/constant'

const Bakso = ({ title, onPress }) => {
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
            backgroundColor: WARNA_BIRU,
            borderRadius: 18,
            paddingVertical: 12,
            width: 200,
            


        }
    },
    text: {
        desc: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center'
        }
    }

}

export default Bakso;


