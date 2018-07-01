import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class Contato extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
            <Text style={styles.itemtext}> nome - apelido - telefone</Text>
        {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                    <Text style={styles.itemtext}>{item.nome} - {item.apelido} - {item.telefone_principal} </Text>
                </View>
            )
        })}
      </View>
    );
  }
}