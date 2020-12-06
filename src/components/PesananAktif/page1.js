import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableHighlight, Button, ImageBackground } from 'react-native';
import { Books, Books1, emoneylog, IconAddSaldo, IconPesananAktif } from '../../assets';

import { WARNA_UTAMA, WARNA_WARNING, WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_COKLAT, WARNA_PINK, WARNA_MERAH } from '../../utils/constant';
import Action from '../../components/Button/Action';
import { useNavigation } from '@react-navigation/native';
import Aksi from '../../components/Button/Aksi';

const Page = ({ title, post, kategori, karya, type, jenis, navigation, aksi, Lokasi, Alamat, }) => {
  const handleGoTo = screen => { navigation.navigate(screen) }
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tujuan}>Post :{post}</Text>
        <Text style={styles.tujuan}>Karya :{karya}</Text>
        <Text style={styles.tujuan}>Lokasi :{Lokasi}</Text>
        <View>
          <Text style={styles.tujuan}>Alamat :{Alamat}</Text>
        </View>
        <View style={styles.batas} />
      </View>
      <View style={styles.posisi}>
        <Text style={styles.kontak}>kategori : {kategori}</Text>
        <Text style={styles.jenis}>{jenis}</Text>
      </View>
    </View>


  );
};

export default Page;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: WARNA_PINK,
    flexDirection: 'row',
    marginVertical: windowHeight * 0.01,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 12
  },
  bawah: {
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  posisi: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    width: 96,
    height: 125,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  Tanggal: {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-SemiBold',
    marginLeft: 2,

  },
  tujuan: {
    paddingTop: 4,
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
  },

  jenis: {
    backgroundColor: WARNA_COKLAT,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    color: 'white',
    width: 50,
    alignItems: 'center'
  },
  kotak: {
    backgroundColor: WARNA_MERAH,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    color: 'white',
    width: 80,
  },
  kontak: {

    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    paddingBottom: 5

  },
  garis: {
    paddingBottom: 5,
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
  },
  batas: {
    paddingBottom: 6,
  },
  tipe: {
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    color: 'white',

    alignItems: 'center',
    backgroundColor: 'green'
  },

});
