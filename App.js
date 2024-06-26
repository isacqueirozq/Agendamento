import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/Pages/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}