import React, { useState } from "react";
import {  View,  TextInput,  Button,  StyleSheet,} from "react-native";
import { useAppContext } from "../Context/contextProvider";
import { EstiloBoton } from "./EstiloBoton";

const FormularioTransferencia: React.FC = () => {
  const { saldo, transferir } = useAppContext()
  const [cuenta, setCuenta] = useState("")
  const [destinatario, setDestinatario] = useState("")
  const [monto, setMonto] = useState("")

  const realizarTransferencia = () => {
    const montoTransferir = parseFloat(monto)
    transferir(montoTransferir, "Retiro")
  };

  return (
    <View style={styles.container}  >
      <TextInput
        placeholder="Cuenta Destino"
        value={cuenta}
        onChangeText={setCuenta}
        style={styles.input}
      />
      <TextInput
        placeholder="Nombre del Destinatario"
        value={destinatario}
        onChangeText={setDestinatario}
        style={styles.input}
      />
      <TextInput
        placeholder="Monto a Transferir"
        value={monto}
        onChangeText={setMonto}
        style={styles.input}
      />
        <View style={EstiloBoton.boton}>
        <Button title="Transferir Saldo" onPress={realizarTransferencia}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width:300,
    alignSelf:'center'
  },
});

export default FormularioTransferencia
