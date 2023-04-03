

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ButtonNavigate from '../components/button'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <View style={{flex:3}}>
        <Text style={styles.text}>Bem vindo!</Text>
        <Text style={styles.text2}>Gerenciador de afazeres</Text>
      </View>



      <View style={{flex:1}}>
        <ButtonNavigate location='Login' navigation={navigation}>Iniciar</ButtonNavigate>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 100,
    fontSize: 35
  },
  text2: {
    marginTop: 50,
    fontSize: 20
  }
})