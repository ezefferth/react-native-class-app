
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import ButtonNavigate from '../components/button'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry="true"
        />
        <ButtonNavigate location='HomeMain' navigation={navigation}>Login</ButtonNavigate>
      </View>

      <View style={styles.v2}>
        <ButtonNavigate location='Welcome' navigation={navigation}>Voltar</ButtonNavigate>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',//alinha todos os itens ao centro
  },
  v1: {
    flex: 3,
    marginTop: 140
  },
  v2: {
    flex: 1
  },
  textInput: {
    fontSize: 20
  },
  input: {
    width: 300,
    marginTop: 15,
    borderBottomWidth: 1,
    fontSize: 20

  }

})