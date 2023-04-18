import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import Contacto from './ContactoComponent';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import QuienesSomos from './QuienesSomosComponent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Etxea"
        component={Home}
        options={{
          title: 'Campo Base',
        }}
      />
    </Stack.Navigator>
  );
}

function CalendarioNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavegador() {
  return (
    <Drawer.Navigator
      initialRouteName=" Drawer"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c2d3da',
        },
      }}
    >
      <Drawer.Screen name="Campobase" component={HomeNavegador} />
      <Drawer.Screen name="Calendario" component={CalendarioNavegador} />
      <Drawer.Screen name="Contacto" component={Contacto} options={{
        headerShown: true, 
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }} />
      <Drawer.Screen name="Quienes somos" component={QuienesSomos} options={{
        headerShown: true, 
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }} />
    </Drawer.Navigator>
  );
}


class Campobase extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador />
        </View>
      </NavigationContainer>
    );
  }
}

export default Campobase;
