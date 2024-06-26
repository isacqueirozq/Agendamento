import * as React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const MyCard = ({style,onPress,title,subtitle}) => (
    <Pressable style={style} onPress={onPress}>
        <Card>
            
            <Card.Content>
            <Text variant="titleLarge">{title}</Text>
            <Text variant="bodyMedium">{subtitle}</Text>
            </Card.Content>
        </Card>
    </Pressable>  
)   
