import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home/Home';
import SetUser from './Cadastro/SetUser';
import Servico from './Servicos/Servico';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro-User" component={SetUser} />
      <Stack.Screen name="Servico" component={Servico} />
    </Stack.Navigator>
  );
}
