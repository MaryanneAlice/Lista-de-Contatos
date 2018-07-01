import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  state = {
    usuario: '',
    senha: ''
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
    <View style={styles.container}>
       <Text style={styles.title}>
          Acessar agenda
        </Text>
        <TextInput
          style={styles.inputText}
          value={this.state.usuario}
          onChangeText={(text) => this.setState({usuario:text})}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.inputText}
          value={this.state.senha}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({senha:text})}
          placeholder="Senha"
        />
        <TouchableOpacity onPress={() => {Actions.home()}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 24,
    marginTop: 100,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  inputText: {
     width: 250,
     height: 44,
     padding: 8,
     fontSize: 18,
     marginTop: 20
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'rgba(92, 99,216, 1)',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 50
  },
  buttonText: {
    padding: 10,
    color: 'white'
  }
});
