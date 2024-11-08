import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContextProvider } from './Context/contextProvider'; // Importa el proveedor
import Inicio from './Page/Inicio/Inicio';
import Transferencias from './Page/Transferencias/Transferencias';
import Historico from './Page/Historico/Historico';



const Tab = createBottomTabNavigator()

const App: React.FC = () => {
  return (
    <AppContextProvider> {/* Asegúrate de envolver todo con el proveedor */}
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black' }, 
          tabBarActiveTintColor: 'white', 
          tabBarInactiveTintColor: 'gray', 
        }}
        >
          <Tab.Screen name="Inicio" component={Inicio} />
          <Tab.Screen name="Transferencias" component={Transferencias} />
          <Tab.Screen name="Histórico" component={Historico} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App
