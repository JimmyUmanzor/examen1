import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Cuentas } from '../Modelos/Cuentas';

interface ListaOperacionesProps {
  transacciones: Cuentas[]
}

const ListaOperaciones: React.FC<ListaOperacionesProps> = ({ transacciones }) => (
  <FlatList
    data={transacciones.slice(0, 5)}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>{item.tipo}: L.{item.monto.toFixed(2)}</Text>
      </View>
    )}
    keyExtractor={(_, index) => index.toString()}
  />
);

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor:'white' }
});

export default ListaOperaciones
