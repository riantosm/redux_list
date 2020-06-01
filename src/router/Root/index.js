import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ItemForm, ItemList} from '../../screens';
import {colors as c} from '../../styles';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: c.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Form"
          component={ItemForm}
          options={{
            title: 'Add Item',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="List"
          options={{
            title: 'List Item',
            headerTitleAlign: 'center',
          }}
          component={ItemList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
