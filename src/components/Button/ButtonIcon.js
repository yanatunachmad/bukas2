import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { WARNA_BIRU } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon/index'
const Tahu = ({ title, onPress, type }) => {
    return (
        <TouchableOpacity
            style={styles.wrapper.component} onPress={onPress}>
            <ButtonIcon title={title} type={type}/>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper: {
        component: {
            backgroundColor: WARNA_BIRU,
            borderRadius: 25,
            paddingVertical: 12,


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

export default Tahu;


