import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  Button
} from 'react-native';
import { Books1, IconSatuan, ImageHeader, Logo, Books2} from '../../assets';
import { Kota, Page, PesananAktif, Tahu } from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';

import { WARNA_ABU_ABU, WARNA_BIRU, WARNA_COKLAT, WARNA_MERAH, WARNA_PINK } from '../../utils/constant';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Page2 = ({ title, onPress, navigation }) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  }
  return (

    <View style={styles.page}>
      
        
        <View style={styles.hello}>
          <Text style={styles.selamat}>Hello, </Text>
          <Text style={styles.username}>Achmad Yanatun</Text>
        </View>
        <View style={styles.hello1}>
        <ImageBackground style={styles.header}>
          <Image source={Books2} style={styles.logo} />
        </ImageBackground>
        </View>
        <View>
        <View style={styles.pesananAktif}>
          <Page title="Toefl" post="Muhammad Nurkhaliz" kategori="Novel" karya="Pramudya Ananta Noer" type="Ada" aksi='Ambil' jenis='Tukar' Lokasi='Bandung' Alamat='Jl. Burangrang'/>
        </View>
        <View style={styles.header1}>
          <Text style={styles.kotak2}>Mencari Buku : Resep Memasak</Text>
          <TouchableOpacity>
          <View style={styles.header2}>
          <Text style={styles.kotak}>Hubungi Pemilik</Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  );
};

export default Page2;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    height: 250,
    paddingHorizontal: 30,
    
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  kotak: {
    backgroundColor: WARNA_MERAH,
    borderRadius: 5,
    borderColor:'black',
    borderWidth: 1,
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    color: 'white',
    width: 119,
    height:52,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  kotak2: {
    backgroundColor: WARNA_COKLAT,
    borderRadius: 5,
    borderColor:'black',
    borderWidth: 1,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Light',
    textAlign: 'center',
    
    color: 'white',
    width: 119,
    height:52,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  header1: {
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 250,
    paddingHorizontal:20,
    paddingBottom: 10,
    backgroundColor: WARNA_PINK,
    alignItems:'center',
    
  },
  header2: {
    
    
    
  },
  logo: {
    flex: 1,
    width: 183,
    height: 250,
    resizeMode: 'contain',
    borderRadius:20,
    borderColor:'black'

  },
  gambar: {
    flex: 1,
    width: 183,
    height: 300,
    resizeMode: 'contain'
  },
  hello: {
    marginTop: -10,
    justifyContent: 'center',

  },
  hello1: {
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,

  },
  selamat: {
    paddingLeft: 21,
    paddingTop: 45,
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 20,
    paddingLeft: 21,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
    backgroundColor: WARNA_BIRU,
    borderRadius: 30,


  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  pesananAktif: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: WARNA_PINK,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  sambutan: {
    paddingLeft: 21,
    paddingTop: 26,
    paddingBottom: 25,
    fontSize: 30,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
