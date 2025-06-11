import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import DashboardScreen from './screens/DashboardScreen';
import AlertasScreen from './screens/AlertasScreen';
import AtividadesScreen from './screens/AtividadesScreen';
import SuporteScreen from './screens/SuporteScreen';
import RelatoriosScreen from './screens/RelatoriosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Alertas" component={AlertasScreen} />
        <Stack.Screen name="Atividades" component={AtividadesScreen} />
        <Stack.Screen name="Suporte" component={SuporteScreen} />
        <Stack.Screen name="Relatorios" component={RelatoriosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
