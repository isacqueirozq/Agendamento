import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { Avatar, TextInput } from 'react-native-paper'

export default function SetUser() {
  const [nome, setNome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  //-- Veículo
  const [veiculo, setVeiculo] = React.useState("");
  const [placa, setPlaca] = React.useState("");

  return (
    <View style={styles.conteiner}>
      <View style={styles.boxAvatar}>
        <Avatar.Image size={150} source={require('../../../assets/icon.png')}/>
        <Text style={styles.textAvatar}>{nome}</Text>
      </View>

      <View style={{borderWidth:1,borderColor:'#bbbbbb',marginBottom:1,marginTop:1,width:'100%'}}/>
      
      <View style={styles.boxForm}>
        <TextInput
          mode='outlined'
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          mode='outlined'
          label="Telefone"
          value={telefone}
          onChangeText={text => setTelefone(text)}
        />
        <TextInput
          mode='outlined'
          label="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode='outlined'
          label="Veículo"
          value={veiculo}
          onChangeText={text => setVeiculo(text)}
        />
        <TextInput
          mode='outlined'
          label="Placa"
          value={placa}
          onChangeText={text => setPlaca(text)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    conteiner:{
      marginTop: StatusBar.currentHeight || 0,
      padding:10,
      flex:1,
      alignItems: 'center',   
    },
    boxAvatar: {
      height:'30%',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      gap:10
    },
    boxForm:{
      flex:1,
      width:'100%',
      gap:10
    },
    textAvatar:{
      fontSize:18
    }
})