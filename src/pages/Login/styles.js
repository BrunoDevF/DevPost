import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

// Container ,Title, Input, Button, ButtonText,SignUpButton,SignUpText
export const Container = styled.View`
flex:1;
background-color: #36393f;
justify-content: center;
align-items: center;
`;

export const Title = styled.Text`
color: #fff;
font-size: 55px;
font-weight: bold;
font-style: italic;
`;

export const Input = styled.TextInput`
width: 80%;
background-color: #eee;
padding: 10px;
margin-top: 10px;
border-radius: 7px;
font-size: 17px;
`;
export const Button = styled.TouchableOpacity`
width:80%;
background-color: #418cfd;
margin-top: 10px;
border-radius:7px;
justify-content: center;
align-items: center;
`;
export const ButtonText = styled.Text`
color: #fff;
font-size: 20px;
padding-top:5px;
padding-bottom:7px;
`;
export const SignUpButton = styled.TouchableOpacity`
width: 100%;
margin-top: 10px;
align-items: center;
justify-content: center;
`;
export const SignUpText = styled.Text`
color: #ddd;
font-size: 15px;
margin-top: 5px;
`;
