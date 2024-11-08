import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Inicio from '../Page/Inicio/Inicio'
import Transferencias from '../Page/Transferencias/Transferencias'
import Historico from '../Page/Historico/Historico'

export default function NavBar() {

 const drawer= createDrawerNavigator()

  return (
   
    <NavigationContainer>
        <drawer.Navigator initialRouteName='Home'>
            <drawer.Screen name='Inicio' component={Inicio}/>
            <drawer.Screen name='Transferencia' component={Transferencias}/>
            <drawer.Screen name='Historico' component={Historico}/>

        </drawer.Navigator>
    </NavigationContainer>
  )
}