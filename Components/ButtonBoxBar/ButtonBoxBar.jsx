import { useState } from 'react';
import * as React from 'react';
import {TouchableOpacity,StyleSheet } from 'react-native';
import {Text,Icon } from 'react-native-paper';

export const ButtonBoxBar = ({style,theme,onPress,onLongPress,title,icon}) => {
    let backgroundBox = ''
    let colorText = ''
    let colorIcon =''
        
    if (theme) {
        backgroundBox = '#303654'
        colorText = '#ffffff'
        colorIcon = '#ffffff'
    }
    if (theme === 'alternative') {
        backgroundBox = '#0a3c0e'
        colorText = '#ffffff'
        colorIcon = '#ffffff'
    }
    if(theme === 'light'){ 
        backgroundBox = '#f4f4f4'
        colorText = '#212121'
        colorIcon = '#212121'
    }
    else{
        backgroundBox = '#c54c4c'
        colorText = '#ffffff'
        colorIcon = '#ffffff'
    }
       

    return(
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.conteiner,style,{backgroundColor:backgroundBox}]}>
            <Icon
                source={icon?icon:'image-off-outline'}
                color={colorIcon}
                size={30}
                style={styles.icon}
            />
            <Text style={[styles.text,{color:colorText}]}>{title?title:'title'}</Text>
        </TouchableOpacity>
    )   
}
const styles = StyleSheet.create({
    conteiner:{
        flexDirection:'row',
        gap:20,
        height:'10%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft:20,
        borderBottomColor:'#d6d6d6',
        borderBottomWidth: 1,
    },
    text:{
        fontSize:16
    }
})