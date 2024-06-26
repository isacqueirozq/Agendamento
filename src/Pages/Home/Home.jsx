import { StyleSheet, View,StatusBar } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { ButtonBox } from '../../../Components/ButtonBox/ButtonBox'
import { ButtonBoxBar } from '../../../Components/ButtonBoxBar/ButtonBoxBar';
 
export default function Home({navigation}) {
  return (
    <View style={styles.conteiner}>
       {/*Imagem principal */}
      <Image 
        style={styles.image}
        source="https://scontent.fthe26-1.fna.fbcdn.net/v/t39.30808-6/358681380_633553198880664_198709158888620613_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MN4I04AjPV0Q7kNvgGg3zX_&_nc_ht=scontent.fthe26-1.fna&oh=00_AfDbcUT7PoFyYehoM6ZPKqh_uST98XpF-hrpf4KjYzu-Kw&oe=663436AA"
        placeholder={'https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg'}
        contentFit='fill'
        transition={1000}
      />

      {/* Linha Divisória */}
      <View style={{borderWidth:2,borderColor:'#5c0b0b',marginBottom:1,marginTop:1}}/>

      {/* Botões de Ação */}
      <View style={styles.lista}>
        
         <ButtonBoxBar theme={"light"} icon={"calendar-plus"} title='Novo agendamento' onPress={()=>null}/>
         <ButtonBoxBar theme={"light"} icon={'calendar-clock-outline'} title='Agendamentos' onPress={()=>navigation.navigate("Servico")}/>
         <ButtonBoxBar theme={"light"} icon={'cash'} title='Tabela de preços'/>
         <ButtonBoxBar theme={"light"} icon={'cash-plus'} title='Cadastro de preços'/>
         <ButtonBoxBar theme={"light"} icon={'information-variant'} title='Sobre'/>
         <ButtonBoxBar theme={"light"} icon={'power-standby'} title='Sair'/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
  height:'35%',
  backgroundColor: '#0553',
  },
  grade:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:2,
  },
  lista:{
    flex:1,
    gap:2,
    padding:10,
  }
})