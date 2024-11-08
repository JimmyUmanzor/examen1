import React from 'react';
import { View, Text, Button} from 'react-native';
import { useAppContext } from '../../Context/contextProvider';
import ListaOperaciones from '../../Componentes/ListaOperaciones';
import { EstiloBoton } from '../../Componentes/EstiloBoton';

const Inicio: React.FC = () => {
  const { saldo, transacciones, depositar } = useAppContext();

  return (
    <View>
      <Text style={EstiloBoton.LetraGrande}>Bienvenido a la aplicación de MiBanco Jimmy Umanzor</Text>
      <Text style={EstiloBoton.LetraGrande}>-------------</Text>
      <Text style={EstiloBoton.LetraGrande}>Saldo Actual: L.{saldo.toFixed(2)}</Text>
      <Text>-------------</Text>
      <View style={EstiloBoton.boton}>
        <Button title="Depositar L.500.00" onPress={() => depositar(500)}/>
      </View>
      <ListaOperaciones transacciones={transacciones} />
    </View>
  );
};


export default Inicio
