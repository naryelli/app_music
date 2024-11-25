import React from 'react';
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { Link } from 'expo-router';

export default function MusicPlayer() {
  return (
    <View style={styles.container}>
        <Link href="/pg_inicio" >
                <Image style={styles.logo} source={require('../img/desfazer (2).png')} />
            </Link>
  
      <View style={styles.banner}>
        <Text style={styles.bannerTexto}>BANNER MUSICA</Text>
      </View>

 
      <View style={styles.informaçoes}>
        <Text style={styles.nomeM}>NOME DA MUSICA</Text>
        <Text style={styles.nomeA}>NOME DO ARTISTA</Text>
      </View>

      <View style={styles.progressoBarContainer}>
        <View style={styles.progressoBar} />
      </View>


      <View style={styles.controls}>
  <Image style={styles.icon} source={require('../img/retrocesso-rapido.png')} />
  <Image style={styles.icon} source={require('../img/pausa (1).png')} />
  <Image style={styles.icon} source={require('../img/retrocesso.png')} />
</View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2D3C3F', 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    banner: {
      width: 300,
      height: 300,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginBottom: 30,
    },
    bannerTexto: {
      color: '#2D3C3F',
      fontWeight: '600',
      fontSize: 18,
    },
    informaçoes: {
      alignItems: 'center',
      marginBottom: 20,
    },
    nomeM: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    nomeA: {
      fontSize: 14,
      color: '#FFFFFF',
      opacity: 0.8,
    },
    progressoBarContainer: {
      width: '80%',
      height: 4,
      backgroundColor: '#3C4C4F',
      borderRadius: 2,
      marginVertical: 20,
      position: 'relative',
    },
    progressoBar: {
      width: '40%',
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
    },
    controls: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '60%', 
      marginTop: 20,
    },
    logo: {
        height: 20, 
        width: 20,

    },
    
    icon: {
      width: 20, 
      height: 20,
      
      
    },
  });
  