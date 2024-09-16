import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { UserListScreen } from './src/presentation/screens/UserListScreen';
import { UserDetailScreen } from './src/presentation/screens/UserDetailScreen';
import { UserFormScreen } from './src/presentation/screens/UserFormScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{ title: 'Lista de usuarios' }}
        />

        <Stack.Screen
          name="UserDetailScreen"
          component={UserDetailScreen}
          options={{ title: 'Lista de usuarios' }}
        />

        <Stack.Screen
          name="EditUserScreen"
          component={UserFormScreen}
          options={{ title: 'Lista de usuarios' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;