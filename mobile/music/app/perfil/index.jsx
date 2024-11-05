import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const TelaPerfil = () => {
  const generosFavoritos = ['Pop', 'Rock', 'Hip-Hop', 'Clássico'];
  const artistasFavoritos = [
    { id: '1', nome: 'Taylor Swift', imagem: 'https://example.com/taylor.jpg' },
    { id: '2', nome: 'Drake', imagem: 'https://example.com/drake.jpg' },
    { id: '3', nome: 'Adele', imagem: 'https://example.com/adele.jpg' },
  ];

  return (
    <View style={estilos.container}>
    
      <View style={estilos.cabecalho}>
        <Image
          source={{ uri: 'https://example.com/foto_perfil.jpg' }}
          style={estilos.imagemPerfil}
        />
        <Text style={estilos.nomeUsuario}>NAryelli</Text>
        <Text style={estilos.descricaoUsuario}>musica é vida</Text>
      </View>

    
      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>Gêneros Favoritos</Text>
        <View style={estilos.listaGeneros}>
         
        </View>
      </View>

    
      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>Artistas Favoritos</Text>
        <FlatList
          data={artistasFavoritos}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <View style={estilos.artistaItem}>
              <Image source={{ uri: item.imagem }} style={estilos.imagemArtista} />
              <Text style={estilos.nomeArtista}>{item.nome}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cabecalho: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#197278',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imagemPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nomeUsuario: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  descricaoUsuario: {
    fontSize: 16,
    color: '#fff',
  },
  secao: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  listaGeneros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  generoItem: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  artistaItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  imagemArtista: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nomeArtista: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});

export default TelaPerfil;
