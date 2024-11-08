import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppContext } from '../../Context/contextProvider'; 

const Historico: React.FC = () => {
  const { transacciones } = useAppContext()

  return (
    <View>
      <FlatList
        data={transacciones}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.tipo}: L.{item.monto}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Historico
