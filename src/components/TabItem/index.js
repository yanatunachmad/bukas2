import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconAddSaldo, IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive, IconTransaksi, IconAdd } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "Dashboard") return isFocused ? <IconHome/> : <IconHome />
      if(label === "Profil") return isFocused ? <IconAkun/> : <IconAkun />
      
      return <IconAdd />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    ikon: {
      width:20,
      height:20,

  },
    text: (isFocused) => ({
        fontSize: 14,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 10,
        alignItems:'flex-start'
        

    })
});
