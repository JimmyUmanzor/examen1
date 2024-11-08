import { Float } from "react-native/Libraries/Types/CodegenTypes";

export interface Cuentas{
    tipo: 'Deposito' | 'Retiro',
    monto: Float
}