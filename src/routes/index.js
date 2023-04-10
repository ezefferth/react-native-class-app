

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../pages/home';
import ConfigScreen from '../pages/config';
import Login from '../pages/login';
import Welcome from '../pages/welcome';
import ActivityScreen from '../pages/activity';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


export default function Routes() {

  function HomeStackScreen() {/* Aqui a homeStackScreen pode receber varias stacks se for o caso */
    return (
      <HomeStack.Navigator initialRouteName='HomeScreen'>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="ActivityScreen" component={ActivityScreen}/>
      </HomeStack.Navigator>
    )
  }
  function ConfigStackScreen() {/* ConfigStackScreen pode receber varias stacks */
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="ConfigScreen" component={ConfigScreen} />
      </HomeStack.Navigator>
    )
  }

  function TabScreens() {/* TabScreens recebe as duas Stacls para serem Stacks */
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Config" component={ConfigStackScreen} />
      </Tab.Navigator>
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeMain" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
