import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { UserList } from '../components/organisms/UserList';
import { User } from '../../core/models/User';
import { GetUsersUseCase } from '../../domain/usecases/GetUsersUseCase';
import { UserRepositoryImpl } from '../../data/repositories/UserRepositoryImpl';
import { Button } from 'react-native-paper';

type UserListScreenProps = NativeStackScreenProps<ParamListBase, 'UserListScreen'>

export const UserListScreen = ({ navigation } : UserListScreenProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userRepository = new UserRepositoryImpl();
      const getUsersUseCase = new GetUsersUseCase(userRepository);
      const userList = await getUsersUseCase.execute();
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (userId: number) => {
    navigation.navigate('UserDetailScreen', { userId });
  };

  const handleCreateUser = () => {
    navigation.navigate('EditUserScreen');
  };

  return (
    <View>
      <Button onPress={handleCreateUser}>Crear usuario</Button>
      <UserList users={users} onSelectUser={handleUserSelect} />
    </View>
  );
};
