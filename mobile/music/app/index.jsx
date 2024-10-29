import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';



const VibrarScreen = () => {

  setTimeout(() => {
    router.replace('/login');
  }, 3000);


  return (
    <View style={styles.container}>

      <View style={styles.Circulo2} />

      <View style={styles.centerContent}>

        <View style={styles.logo}>
          <Image style={styles.logo} source={require('./img/logo.png')} />
          <Text style={styles.logoText}>VIBRA</Text>
          <Text style={styles.descricao}>onde cada batida é um novo momento.</Text>
        </View>
      </View>


      <View style={styles.Circulo1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  Circulo2: {
    width: 300,
    height: 150,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: '#772E25',
    position: 'absolute',
    top: 420,
    right: -75,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 160,
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  descricao: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  Circulo1: {
    width: 300,
    height: 150,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    backgroundColor: '#00A9A5',
    position: 'absolute',
    bottom: 425,
    left: -75,
  },
});

export default VibrarScreen;