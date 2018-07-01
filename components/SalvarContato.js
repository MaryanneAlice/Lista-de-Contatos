import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput, TouchableHighlight } from 'react-native';

import { addContato } from './AddContato';

export default class SalvarContato extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nome: '',
          apelido: '',
          telefone_principal: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNickName = this.handleChangeNickName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeName(e) {
        this.setState({
          nome: e.nativeEvent.text
        });
      }
      handleChangeNickName(e) {
        this.setState({
          apelido: e.nativeEvent.text
        });
      }
      handleChangePhone(e) {
        this.setState({
          telefone_principal: e.nativeEvent.text
        });
      }
      handleSubmit() {
        addContato(this.state.nome, this.state.apelido, this.state.telefone_principal);
        Alert.alert(
          'Contato salvo com sucesso!'
         );
      }

   render() {
    return (
       <View style={styles.container}>
          
          <Text style={styles.title}>
            Adicionar Contato
          </Text>

          <TextInput
              style={styles.inputText}
              onChange={this.handleChangeName}
            />
            <TextInput
              style={styles.inputText}
              onChange={this.handleChangeNickName}
            />
            <TextInput
              style={styles.inputText}
              onChange={this.handleChangePhone}
            />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Salvar
              </Text>
            </TouchableHighlight>

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
    margin: 18,
    marginTop: 20,
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
 }
});
