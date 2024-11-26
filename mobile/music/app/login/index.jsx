import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import { Link } from 'expo-router';
import { router } from 'expo-router'
import { AppContext } from '../../scripts/AppContext';

export default login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')
    const { user, setUser } = useContext(AppContext)
  

const EntrarUsuario = async () => {
    if (!email || !senha) {
      setMensagem('Todos os campos devem ser preenchidos')
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/autenticacao/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, senha: senha })
      });
      data = await response.json()
      if (response.status == 200) {
        console.log(data.userInfo)
        setMensagem('Login bem-sucedido!');
        setUser(data.userInfo)
        router.push('/pg_inicio')
        return
      } else if (response.status === 409) {
        setMensagem('Email já existe');
      } else {
        setMensagem('Ocorreu um erro, tente novamente');
      }
    } catch (error) {
      setMensagem('Erro durante o login. Tente novamente.');
    }
  };




    return (
        <SafeAreaView style={style.container}>

            <View style={style.card}>

                <Text style={style.titulo}>SEJA BEM-VINDO
                    DE VOLTA!</Text>
                <Text style={style.descricao}>A música está esperando por você.</Text>
                <View />


                <TextInput
                    style={style.input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    placeholder=" Digite seu email"
                    placeholderTextColor="#878787"
                />

                <TextInput
                    style={style.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder=" Digite sua senha"
                    secureTextEntry={true}
                    placeholderTextColor="#878787"
                />


                <View style={style.botaoconteiner} >
                <View style={style.botao}>
          <Button title="Login" color="#FFFFFF" onPress={EntrarUsuario} />
        </View>
                    <Link href="/cadastro" style={style.link}>Cadastrar</Link>
                </View >
                <View style={style.containerlink}>
                </View>
            </View>


        </SafeAreaView>

    )
    };

    const style = StyleSheet.create({
        input: {
            height: 60,
            width: "95%",
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 20,
            color: "#565656",
        },
    
        botao: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            backgroundColor: '#772E25',
            color: 'white',
            width: 169,
            height: 50,
            margin: 100
    
        },
        container: {
            backgroundColor: '#197278'
        },
    
        titulo: {
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'white'
        },
        botaotexto: {
            color: 'white',
    
        },
    
        descricao: {
            fontSize: 19,
            color: '#666',
            height: 200,
            color: 'white'
        },
        card: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 30,
            marginBottom: 100,
            height: '65%',
            width: '100%',
            marginVertical: 290,
            justifyContent: 'flex-end'
        },
    
        link: {
            marginBottom: 100
        },
        botaoconteiner: {
            alignItems: 'center',
            justifyContent: 'center',
    
        }
    
});
 