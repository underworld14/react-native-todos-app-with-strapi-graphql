import React, {useCallback} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export interface TodoItemsDataProps {
  id: number;
  job: string;
  done: boolean;
}

interface TodoItemProps {
  onToggleCheck: (item: TodoItemProps) => void;
  onRemove: (item: TodoItemProps) => void;
  item: TodoItemsDataProps;
  job: string;
  idx: number;
  done: boolean;
}

export default function TodoItem(props: TodoItemProps) {
  const {onRemove, onToggleCheck, item, job, idx, done} = props;

  const handleCheck = useCallback(() => {
    onToggleCheck(item);
  }, [item, onToggleCheck]);

  const handleDelete = useCallback(() => {
    onRemove(item);
  }, [item, onRemove]);

  const finishJob = done ? 'line-through' : 'none';
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 8,
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          backgroundColor: '#243B55',
          borderRadius: 12,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Text style={{color: '#E2EAF3', fontSize: 20}}>{idx}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#243B55',
          borderRadius: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
          minHeight: 50,
          width: 300,
        }}>
        <Text
          style={{
            color: '#E2EAF3',
            fontSize: 18,
            alignItems: 'center',
            textDecorationLine: finishJob,
          }}>
          {job}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}
            onPress={handleCheck}>
            <Feather name="check" color="#E2EAF3" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}
            onPress={handleDelete}>
            <Feather name="trash-2" color="#E2EAF3" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
