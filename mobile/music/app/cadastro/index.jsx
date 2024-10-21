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
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')



    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ name: nome, email: email, senha: senha, sobrenome:sobrenome, dataNascimento:dataNascimento })
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('user criado com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}


return (
    <SafeAreaView style={style.container}>
        <View style={style.box}>
        <View >
            <Text style={style.titulo}>Registre-se</Text>
        </View>
        <View style={style.inputView}>
            <TextInput
                style={style.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Digite seu nome ;)"
            /><TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={sobrenome}
                placeholder="Digite seu sobrenome)"
                secureTextEntry={true}
            />
              <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
            />
             <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={dataNascimento}
                placeholder="Digite sua data de nascimento"
                secureTextEntry={true}
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Digite sua senha (aqui é seguro confia)"
                secureTextEntry={true}
            />
           

            <View style={style.botao} >
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.botaotexto}>Cadastrar</Text>
                </Pressable>
            </View>
</View>
        </View>
    </SafeAreaView>

)
}