import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider, List, MD3Colors,Chip } from 'react-native-paper';
import { Agenda, formatTime, toDay } from '../../Service/Service';

export default function Servico() {
  const[myColor,setMyColor]=useState(false)
  const horarios = Agenda()
  const db = [
    {
      id:1,
      nome:'Joaquim',
      carro:{modelo:'Celta',cor:'Branco'},
      hora:formatTime({hours: 7, minutes: 30}),
      servico:['Lavar','Polir','Higienizar']
    },
    {
      id:2,
      nome:'Manuel',
      carro:{modelo:'Tracker',cor:'Vermelho'},
      hora:formatTime({hours: 8, minutes: 0}),
      servico:['Lavar a seco','Polir 3D']
    },
    {
      id:3,
      nome:'Cesar',
      carro:{modelo:'Mob',cor:'Prata'},
      hora:formatTime({hours: 9, minutes: 0}),
      servico:['Polir','Higienizar']
    }
  ]
  
  const agendado = (chekTime) => (
    db.map((item)=>{
      if (item.hora === chekTime) {
        setMyColor(true)
        return (
          <Text style={{fontSize:15,fontWeight:'500'}}>{item.nome} {'\n'}{chips(item.servico)}</Text>
        )
      }else{
        setMyColor(false)
      }
    })
  )

  function chips(array) {
      let youservice=[]
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const chip = (<Chip mode='outlined' >{element}</Chip>)
        youservice.push(chip)
      }
      return youservice
  } 

  const itemList = (item) =>(
    <View style={styles.itemRow}>
          {/* Left */}
          <View style={styles.itemRowLeft}>
            <Text>{item.time}</Text>
          </View>

          {/* Rigth */}
          <View style={styles.itemRowRigth}>
            {agendado(item.time)}
          </View>
          
        </View>
  )
 
  return (
    <View style={styles.conteiner}>
       <List.Section>
            <List.Subheader style={{fontSize:16,backgroundColor:'#90c29fcd',color:'#fff'}}>{toDay()}</List.Subheader>
            <FlatList
            data={horarios}
            renderItem={({item})=>itemList(item)}
            keyExtractor={(item) =>item.id}
            />
        </List.Section>
    </View>
  )
}

const styles = StyleSheet.create({
    conteiner:{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      marginBottom: 50
    },
    itemRow:{
      flexDirection:'row',
      height:70,
      borderBottomWidth:1,
      borderBottomColor:'#f6f6f6'
    },
    itemRowLeft:{
      width:'25%',
      backgroundColor:'#89b470',
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemRowRigth:{
      flex:1,
      borderBottomColor:'#c0c0c0',
      borderBottomWidth:1,
      justifyContent: 'center',
      gap:2,
      padding:5
    }
})