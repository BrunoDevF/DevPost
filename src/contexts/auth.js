import React, { useState, createContext, Children } from 'react';
import firebase from '../firebase/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user,setUser] = useState(null);


async function signIn(email, password){
  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then( async  ( value ) => {
    let uid = value.user.uid;
    await firebase.database.ref('users').child(uid).once('value')
    .then((snap)=>{
      let data = {
        uid: uid,
        nome: snap.val().nome,
        email: value.user.email
      }
      setUser(data);
    })
  })

}

async function signUp(nome, email, password){
  await firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( async (value) => {
    let uid = value.user.uid;
    await firebase.database().ref('users').child(uid).set({
      nome: nome
    })
    .then(()=>{
      let data = {
        uid: uid,
        nome: nome,
        email: value.user.email
      }
      setUser(data);
    })
  })
  .catch((error)=>{
    alert(error);
  })
}

  return (
    <AuthContext.Provider  value={{ signed: !!user, user, signUp}}>
      {children}
    </AuthContext.Provider>
  );
}