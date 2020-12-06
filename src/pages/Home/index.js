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
import { Books1, IconSatuan, ImageHeader, Logo } from '../../assets';
import { Kota, PesananAktif, Tahu } from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';

import { WARNA_ABU_ABU, WARNA_BIRU, WARNA_PINK } from '../../utils/constant';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Aksi from '../../components/Button/Aksi';

const Home = ({ title, onPress, navigation }) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
}
  return (
    
    <View style={styles.page}>
    <ScrollView showsVerticalScrollIndicator={false}>      
          <View style={styles.hello}>
            <Text style={styles.selamat}>Hello, </Text>
            <Text style={styles.username}>Achmad Yanatun</Text>
            <Text style={styles.sambutan1}>Mau Buku Apa </Text>
            <Text style={styles.sambutan}>Hari Ini? </Text>
            
            <Kota/>            
          </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Post Terbaru</Text>
          <TouchableOpacity onPress = {() => navigation.navigate('Page1') }>
          <PesananAktif title="Bumi Manusia" post="Muhammad Nurkhaliz" kategori="Novel" karya="Pramudya Ananta Noer" type="Ada" jenis='Hibah' aksi='Ambil'>
          
          </PesananAktif>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Page2') }>
          <PesananAktif title="Mars Manusia" post="Muhammad Nurkhaliz" kategori="Novel" karya="Pramudya Ananta Noer" type="Ada" jenis='Hibah' aksi='Ambil' />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Page3') }>
          <PesananAktif title="Pluto Manusia" post="Muhammad Nurkhaliz" kategori="Novel" karya="Pramudya Ananta Noer" type="Ada" jenis='Hibah' aksi='Ambil' />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Page1') }>
          <PesananAktif title="Pluto Manusia" post="Muhammad Nurkhaliz" kategori="Novel" karya="Pramudya Ananta Noer" type="Ada" jenis='Hibah' aksi='Ambil' />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Page1') }>
          <PesananAktif title="Pluto Manusia" post="Muhammad Nurkhaliz" kategori="Novel" karya="Pramudya Ananta Noer" type="Ada" jenis='Hibah' aksi='Ambil' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.225,
    paddingHorizontal: 30,
    paddingTop: 1,
    backgroundColor: 'white'
  },
  logo: {
    width: 68,
    height: 70,
    borderRadius: 34,
    paddingRight: 2,
    
    
  },
  hello: {
    marginTop: -10,
  },
  selamat: {
    paddingLeft:21,
    paddingTop: 45,
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 20,
    paddingLeft:21,
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
    paddingLeft:21,
    paddingTop: 2,
    paddingBottom: 25,
    fontSize: 30,
    fontFamily: 'TitilliumWeb-Regular',
  },
  sambutan1: {
    paddingLeft:21,
    paddingTop: 26,
    paddingBottom: 1,
    fontSize: 30,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
