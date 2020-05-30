import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Form"
          component={FoodForm}
          options={{
            title: 'Form',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="List"
          options={{
            title: 'List Items',
            headerTitleAlign: 'center',
          }}
          component={FoodList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
