import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useUserContext } from '../state/UserContext';

type UserDetailScreenProps = NativeStackScreenProps<ParamListBase, 'UserDetailScreen'>

export const UserDetailScreen: React.FC = ({ route, navigation } : UserDetailScreenProps) => {
  const { userId } = route.params;

  const { users, deleteUser } = useUserContext();

  return (
    <View>
      <Text>Detalle del Usuario</Text>
      <Button onPress={() => navigation.navigate('EditUserScreen', { userId })}>Edit</Button>
      <Button onPress={() => {deleteUser(userId)}}>Delete</Button>
    </View>
  );
};
