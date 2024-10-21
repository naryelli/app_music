import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    input: {
        width: '100%',
        margin: 10,
        shadowOpacity: 0.25,  
        shadowRadius: 7.84,     
        color: 'gray', 
        padding:5
        
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex:'1', 
      
    },
     botao:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'black',
    color:'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    margin:10

     },

    titulo:{
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Open Sans',
        fontWeight:'800',
   
    },
    botaotexto:{
        color:'white',
       
    },
    inputView:{
        alignItems: 'center',
        justifyContent: 'center',
        
    },
   box:{
    shadowOpacity: 0.25,  
        shadowRadius: 8.84, 
       padding: 50
   }
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
        <View style={style.box}>
        <View >
            <Text style={style.titulo}>Login</Text>
        </View>
        <View style={style.inputView}>
          
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
        </View>
    </SafeAreaView>

)
}