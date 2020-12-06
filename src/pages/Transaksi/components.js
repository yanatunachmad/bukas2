import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Books1 } from '../../assets/images';

const textInput = ({title, value}) => {
    return(
        <View>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.textinput}
                value={value}
            />
        </View>
    )
}

const primaryButton = ({title, style}) => {
    return(
        <TouchableOpacity>
            <View style={style}>
                <Text style={{color: '#fff', fontSize: 18}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const cardBook = ({judul, kategori, karya, label}) => {
    return(
        <View style={styles.cardContainer}>
            <View style={{flex: 4, flexDirection: 'row'}}>
            <Image
                    style={styles.book}
                    source={Books1}
            />
            <View style={styles.keterangan}>
                <Text style={styles.textJudul}>{judul}</Text>
                <Text>{kategori}</Text>
                <Text>{karya}</Text>
                <View style={styles.label}>
                    <Text>{label}</Text>
                </View>
            </View>
            </View>


            <TouchableOpacity style={{flex: 1}}>
                <View style={styles.button}>
                <Text style={{color: '#fff', fontSize: 18}}>Hapus</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default {textInput, primaryButton, cardBook}

const styles = StyleSheet.create({
    textinput: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    text: {
        marginVertical: 2,
    },
    cardContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 5
    },
    book: {
        height: 122,
        width: 96,
        borderRadius: 15,
    },
    textBook: {
        marginLeft: 15,
    },
    textJudul: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    label: {
        width: 53,
        height: 16,
        borderRadius: 10,
        marginTop: 3,
        backgroundColor: '#AEAA4E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    keterangan: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE4E4E',
        width: 80,
        height: 30,
        borderRadius: 10
    }
})