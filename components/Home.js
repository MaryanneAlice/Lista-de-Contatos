import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Contato from './Contato';

import { db } from './db';

import { Actions } from 'react-native-router-flux';

let itemsRef = db.ref('/contatos');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 250
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
  })

export default class Home extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {Actions.salvarContato()}}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar Contato</Text>
                </View>
              </TouchableOpacity>
                {
                    this.state.items.length > 0 ? <Contato items={this.state.items} />
                    : <Text>Não há contatos salvos.</Text>
                }
            </View>
        )
    }
}