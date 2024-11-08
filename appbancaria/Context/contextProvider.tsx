import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';
import { Cuentas } from '../Modelos/Cuentas';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';


interface AppContextProps {
  saldo: Float,
  transacciones: Cuentas[],
  depositar: (monto: Float) => void,
  transferir: (monto: Float, tipo: 'Retiro') => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [saldo, setSaldo] = useState(0)
  const [transacciones, setTransacciones] = useState<Cuentas[]>([])

  const depositar = (monto: Float) => {
    setSaldo(prevSaldo => prevSaldo + monto)
    setTransacciones(prevTransacciones => [
      ...prevTransacciones,{ tipo: 'Deposito', monto },
    ]);
  };

  const transferir = (monto: Float, tipo: 'Retiro') => {
    if (monto <= saldo) {
      setSaldo(prevSaldo => prevSaldo - monto)
      setTransacciones(prevTransacciones => [
        ...prevTransacciones,
        { tipo, monto },
      ]);
      Alert.alert('Exito','Se realizó la transferencia')
        } else {
            Alert.alert('Error','Fondos Insuficientes para realizar transferencia')
        }
    
  };

  return (
    <AppContext.Provider value={{ saldo, transacciones, depositar, transferir }}>
      {children}
    </AppContext.Provider>
  );
};


    export { AppContext, AppContextProvider }


    export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext debe usarse dentro de un AppContextProvider')
    }
    return context
    };
