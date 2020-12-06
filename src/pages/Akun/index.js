import React from 'react';
import { View, Image,Text, StyleSheet, ScrollView } from 'react-native';
import { Akun } from '../../assets/images';
import components from '../Transaksi/components';

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.bar}></View>
                <Image
                    style={styles.profileImage}
                    source={Akun}
                />
                <Text style={{fontSize: 25, fontWeight: 'bold', marginVertical: 10}}>
                    Deny Kurniawan
                </Text>
                <components.primaryButton title='Ubah Foto Profil' style={styles.button}/>
            </View>

            <Text style={{marginLeft: 10, fontSize: 20}}>Daftar Buku Anda</Text>
            <ScrollView style={styles.footer}>
                <components.cardBook judul="Merkurius Manusia" kategori="Novel" karya="Pramoedya Ananta Toer" label="Hibah"/>
                <components.cardBook judul="Venus Manusia" kategori="Novel" karya="Pramoedya Ananta Toer" label="Hibah"/>
                <components.cardBook judul="Bumi Manusia" kategori="Novel" karya="Pramoedya Ananta Toer" label="Hibah"/>
                <components.cardBook judul="Mars Manusia" kategori="Novel" karya="Pramoedya Ananta Toer" label="Hibah"/>
                <components.cardBook judul="Jupiter Manusia" kategori="Novel" karya="Pramoedya Ananta Toer" label="Hibah"/>
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FEE2E2'
    },
    header: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEE2E2'
    },
    footer: {
        backgroundColor: '#FEE2E2',
    },
    profileImage: {
        height: 140,
        width: 140,
        borderRadius: 30,
        marginTop: 25
    },
    bar: {
        height: 5,
        width: 76,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE4E4E',
        marginVertical: 10,
        width: 150,
        height: 40,
        borderRadius: 10
    }
})