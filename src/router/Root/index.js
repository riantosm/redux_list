import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {FoodForm, FoodList} from '../../screens';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#474787',
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
