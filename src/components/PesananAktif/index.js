import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableHighlight, Button, ImageBackground } from 'react-native';
import { Books, Books1, emoneylog, IconAddSaldo, IconPesananAktif } from '../../assets';
import ActionButton from '../../pages/Welcome/ActionButton';
import { WARNA_UTAMA, WARNA_WARNING, WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_COKLAT, WARNA_PINK, WARNA_MERAH } from '../../utils/constant';
import Action from '../Button/Action';
import { useNavigation } from '@react-navigation/native';
import Aksi from '../Button/Aksi';

const PesananAktif =   ({  title, post, kategori, karya, type, jenis, navigation, aksi }) => {
  const handleGoTo = screen => {navigation.navigate(screen)}
  return (
    <View style={styles.container}>  

      <Image source={Books1} style={styles.logo}  />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tujuan}>Post :{post}</Text>
        <Text style={styles.tujuan}>Kategori :{kategori}</Text>
        <Text style={styles.garis}>Karya :{karya}</Text>
        <View style={styles.bot}>
        <Text style={styles.jenis}>{jenis}</Text>
        </View>
        <Text style={styles.kotak}>{aksi}</Text>
        <View style={styles.batas} />        
      </View>
      <View style={styles.top}>
      <Text style={styles.tipe}>{type}</Text>
      </View>
    </View>


  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: WARNA_PINK,
    flexDirection: 'row',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 9,
    marginVertical: windowHeight * 0.01,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 12,
    
  },
  top: {
    marginVertical: 5,
    marginHorizontal: 12,
    
  },
  bot: {
    paddingBottom:4,
    
  },
  logo: {
    flex: 1,
    width: 96,
    height: 125,
    borderRadius:40,
    borderWidth:2,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  Tanggal: {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-SemiBold',
    marginLeft: 2,

  },
  tujuan: {
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
    alignItems: 'baseline',
    backgroundColor: 'green',
    width:40
  },
  
});
