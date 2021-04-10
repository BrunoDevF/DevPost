import React,{useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';

import { AuthContext } from '../contexts/auth';


export default function Routes() {
  const { signed } = useContext(AuthContext);
  
  const loading = false;

if(loading){
  <View 
  style={{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#36393f'
  }}
  >
    <ActivityIndicator size={30} color="#e52245" />
  </View>
}
  return (
    signed ? <AppRoutes/> : <AuthRoutes/>
  );
}