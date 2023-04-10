


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ButtonNavigate from '../components/button'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>

      <ButtonNavigate
        navigation={navigation}
        location="ActivityScreen"

      >Atividades</ButtonNavigate>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',//alinha todos os itens ao centro
  },

})