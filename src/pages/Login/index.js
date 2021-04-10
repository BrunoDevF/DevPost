import React,{useState, useContext} from 'react';
import { View,Text } from 'react-native';
import { Container ,Title, Input, Button, ButtonText,
        SignUpButton,SignUpText} from './styles';
import {AuthContext} from '../../contexts/auth';
export default function Login() {
  const [login, setLogin] = useState(true);
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {signUp} = useContext(AuthContext);
 
  function toggleLogin(){
    setLogin(!login);
    setEmail('');
    setPassword('');
  }

  function handleLogin(){
    if(email === '' || password === ''){
      alert('Você precisa preencher todos os campos para prosseguir');
      return;
    }
    alert("LOGOU");
  }

  function handleSignUp(){
    if(nome === '' || email === ''){
      alert('Você precisa preencher todos os campos para prosseguir');
      return;
    }
    if(password >= 6){
      signUp(nome, email, password);
    }else {
      alert("A senha deve conter 6 ou mais caracteres");
    }
    
  }


  //Exibe a pagina de login
  if(login){
    return (
    <Container>
      <Title>
        Dev 
        <Text style={{color: '#e52246'}}>Post</Text>
      </Title>

      <Input 
        placeholder="Email"
        value={email}
        onChangeText={ (text) => setEmail(text)}
      />
      <Input 
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />

      <Button onPress={handleLogin}>
        <ButtonText>Acessar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Criar uma nova conta</SignUpText>
      </SignUpButton>
    </Container>
    );
  }
 
  return (
    <Container>
      <Title>
        Dev 
        <Text style={{color: '#e52246'}}>Post</Text>
      </Title>

      <Input 
        placeholder="Nome"
        value={nome}
        onChangeText={ (text) => setNome(text)}
      />
      <Input 
        placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />
      <Input 
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />

      <Button onPress={handleSignUp}>
        <ButtonText>Criar conta</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Já tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}