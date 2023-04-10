import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonNavigate from '../components/button'

export default function ConfigScreen() {

  const navigation = useNavigation()
  return (
    <View>
      <Text>Config</Text>

      <ButtonNavigate
        navigation={navigation}
        location="ActivityScreen">
        Atividades</ButtonNavigate>

    </View>
  )
}