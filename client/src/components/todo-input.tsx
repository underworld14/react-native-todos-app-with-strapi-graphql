import {CREATE_TODO} from '../store/store';
import {useMutation} from '@apollo/client';
import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {gql} from '@apollo/client';
import Feather from 'react-native-vector-icons/Feather';

export default function TodoInput() {
  const [createTodo, {data}] = useMutation(gql`
    mutation {
      createTodo(data: {job: $job, done: $boolean}) {
        data {
          id
          attributes {
            job
            done
          }
        }
      }
    }
  `);
  return (
    <View
      style={{
        borderColor: '#fff',
        backgroundColor: '#243B55',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
      }}>
      <TextInput
        style={{color: '#E2EAF3', fontSize: 18, height: 50, flex: 1}}
      />
      <TouchableOpacity
        style={{
          height: 30,
          width: 30,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather name="plus" color="#E2EAF3" size={18} />
      </TouchableOpacity>
    </View>
  );
}
