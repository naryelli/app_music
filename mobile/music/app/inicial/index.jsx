import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';



const VibrarScreen = () => {
    


  return (
    <View style={styles.container}>
   
      

      <View style={styles.centerContent}>
     
        <View style={styles.logo}>
        <Image   style={styles.logo} source={require('../img/logo.png')} />
          <Text style={styles.logoText}>VIBRA</Text>
          <Text style={styles.descricao}>onde cada batida é um novo momento.</Text>
          <View style={styles.quadrado} ></View>
        </View>
      </View>

   
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
  
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 160,
    alignItems:"center",
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

});

export default VibrarScreen;