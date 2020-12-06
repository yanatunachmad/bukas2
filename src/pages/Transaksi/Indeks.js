import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { IconCam, IconLocation } from '../../assets/icons';
import components from './components';
import {Akun, Books} from '../../assets/images'

const BuKas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.textContainer}>
          <Text style={{ fontSize: 23 }}>
            Hello,
                    </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Deny Kurniawan
                    </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.profileImage} source={Akun} />
        </View>

      </View>

      <ScrollView style={styles.footer}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bar} />
        </View>

        <View style={styles.mainmenu}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 5 }}>
            Tambah Buku
                    </Text>

          <components.textInput title='Judul Buku' value='' />
          <components.textInput title='Karya Buku' value='' />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ justifyContent: 'center' }}>
              <Text>Drop Down Menu</Text>
              <Text>(Belum di implementasikan)</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.cameraButton}>
                <IconCam name="camera-outline" size={50} color="black" />
                <Text>Upload Foto Buku</Text>
              </View>
            </TouchableOpacity>
          </View>

          <components.textInput title='Alamat' value='' />
          <components.textInput title='Tukar Buku Dengan' value='' />
          <components.textInput title='Harga' value='' />

          <View style={{ alignItems: 'center' }}>
            <components.primaryButton title='Post Buku' style={styles.button} />
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default BuKas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  footer: {
    backgroundColor: '#FEE2E2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  profileImage: {
    height: 75,
    width: 75,
    borderRadius: 30,
  },
  bar: {
    height: 5,
    width: 76,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  mainmenu: {
    marginHorizontal: 10,
  },
  cameraButton: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 115,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
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