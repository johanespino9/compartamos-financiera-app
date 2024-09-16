import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SubmitButton } from '../atoms/SubmitButton';

interface UserFormProps {
  initialData?: any;
  onSubmit: (formData: any) => void;
}

export const UserForm = ({ initialData = {}, onSubmit } : UserFormProps) => {
  const [formData, setFormData] = useState(initialData);

  return (
    <View>
      <TextInput
        label="First Name"
        value={formData.firstName}
        onChangeText={(text) => setFormData({ ...formData, firstName: text })}
      />
      <SubmitButton title="Save" onPress={() => onSubmit(formData)} />
    </View>
  );
};
