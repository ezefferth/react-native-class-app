

import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import ButtonNavigate from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { DataContext } from '../components/context/dataContext'

export default function ActivityScreen() {

  const navigation = useNavigation()

  const { count, setCount } = useContext(DataContext)

  return (
    <View>
      <Text>Atividades</Text>

      <Text>{count}</Text>

      <Button onPress={() => setCount(count => count + 1)} title='Click-me' />


      <ButtonNavigate navigation={navigation} location="Config">Ir para config</ButtonNavigate>
    </View>
  )
}