import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { UserRepositoryImpl } from '../../data/repositories/UserRepositoryImpl';
import { CreateUserUseCase } from '../../domain/usecases/CreateUserUseCase';
import { UpdateUserUseCase } from '../../domain/usecases/UpdateUserUseCase';
import { GetUserUseCase } from '../../domain/usecases/GetUserUseCase';
import { User } from '../../core/models/User';

export const UserFormScreen: React.FC = ({ route, navigation }) => {
  const { userId } = route.params || {};
  const [user, setUser] = useState({
    ID: 0, CreatedAt: '', UpdatedAt: '', first_name: '', last_name: '', dni: '', phone: '', email: '', city: '', gender: '', age: 0, deleted: false
  });

  const createUser = async () => {
    const newUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      dni: user.dni,
      phone: user.phone,
      email: user.email,
      city: user.city,
      gender: user.gender,
      age: user.age
    }
    const userRepository = new UserRepositoryImpl();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    await createUserUseCase.execute(newUser);
  };

  const updateUser = async () => {
    const userRepository = new UserRepositoryImpl();
    const updateUserUseCase = new UpdateUserUseCase(userRepository);
    await updateUserUseCase.execute(userId, user);
  };

  const getUser = async (): Promise<User> => {
    const userRepository = new UserRepositoryImpl();
    const getUserUseCase = new GetUserUseCase(userRepository);
    const user = await getUserUseCase.execute(userId);
    return user
  };

  useEffect(() => {
    if (userId) {
      loadUser();
    }
  }, [userId]);

  const loadUser = async () => {
    const response = await getUser();
    setUser(response);
  };

  const handleSubmit = async () => {
    if (userId) {
      await updateUser();
    } else {
      await createUser();
    }
    navigation.goBack();
  };

  return (
    <View>
      <TextInput label="Nombre" value={user.first_name} onChangeText={(text) => setUser({ ...user, first_name: text })} />
      <TextInput label="Apellido" value={user.last_name} onChangeText={(text) => setUser({ ...user, last_name: text })} />
      <TextInput label="DNI" value={user.dni} onChangeText={(text) => setUser({ ...user, dni: text })} />
      <TextInput label="Telefono" value={user.phone} onChangeText={(text) => setUser({ ...user, phone: text })} />
      <TextInput label="Email" value={user.email} onChangeText={(text) => setUser({ ...user, email: text })} />
      <TextInput label="Ciudad" value={user.city} onChangeText={(text) => setUser({ ...user, city: text })} />
      <TextInput label="Género" value={user.gender} onChangeText={(text) => setUser({ ...user, gender: text })} />
      <TextInput label="Edad" value={user.age.toString()} onChangeText={(text) => setUser({ ...user, age: Number(text) })} />
      <Button onPress={() => handleSubmit()}>{userId ? 'Update' : 'Create'} User</Button>
    </View>
  );
};
