import * as React from 'react';
import { Pressable, TouchableOpacity,StyleSheet } from 'react-native';
import {Text,Icon } from 'react-native-paper';

export const ButtonBox = ({style,dark,onPress,onLongPress,title,icon}) => {
    const backgroundBox = dark?'#303654':'#c54c4c'
    const colorText = dark?'#fff':'#ffffff'
    const colorIcon = dark?'#dedede':'#ffffff'
    return(
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.conteiner,style,{backgroundColor:backgroundBox}]}>
            <Icon
                source={icon?icon:'image-off-outline'}
                color={colorIcon}
                size={50}
            />
            <Text style={[styles.text,{color:colorText}]}>{title?title:'title'}</Text>
        </TouchableOpacity>
    )   
}
const styles = StyleSheet.create({
    conteiner:{
        width:'49%',
        height:'30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize:16
    }
})