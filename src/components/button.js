

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonNavigate({ navigation, location, children }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(location)}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, //margin topo do elemento anterior
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#c1121f',
    height: 30
  },
  text: {
    textAlign: "center",//alinha o ttexto no centro
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
})
