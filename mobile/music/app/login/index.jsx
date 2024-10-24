import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    input: {
        height: 60,
        width: "95%",
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius:20,
       color:"gray",
    },
    
     botao:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#772E25',
    color:'white',
    width:169,
    height:50,
    margin:100

     },
     container:{
        backgroundColor:'#197278'
     },

    titulo:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white'
    },
    botaotexto:{
        color:'white',

    },
  
   descricao:{
    fontSize: 19,
    color: '#666',
    height:300,
    color:'white'
   },
    card: {
        backgroundColor:'white',
        padding: 20,
        borderRadius: 30,
        marginBottom: 100,
        height:  '65%', 
        width: '100%',
        marginVertical:290,
        justifyContent: 'flex-end'
      },
     
})

export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
   


    const registrarUsuario = async function () {
        if (!email || !senha) {
            console.log('os parametros email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ email: email, senha: senha})
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('Login foi bem sucedido')
    } else {
        console.log('ocorreu um erro')
    }
}


return (
    <SafeAreaView style={style.container}>
   
        <View style={style.card}>
      
        <Text style={style.titulo}>SEJA BEM-VINDO
DE VOLTA!</Text>
        <Text style={style.descricao}>A música está esperando por você.</Text>
<View/>


              <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
            />
            
            <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />
           

            <View style={style.botao} >
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.botaotexto}>Entrar</Text>
                </Pressable>
                </View>
            </View>
          

    </SafeAreaView>

)
}