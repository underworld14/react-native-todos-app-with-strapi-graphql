import React, {useCallback, useState} from 'react';
import TodoListItem from '../components/todo-list-item';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import TodoInput from '../components/todo-input';

const initialData = [
  {
    id: 99,
    job: 'Create Agency Website',
    done: false,
  },
  {
    id: 100,
    job: 'Doing React Native',
    done: false,
  },
];

interface Item {
  id: number;
  job: string;
  done: boolean;
}

export default function MainScreen() {
  const [todos, setTodos] = useState(initialData);

  const handleDelete = useCallback((item: Item) => {
    console.info(item);
    setTodos(prevTodo => {
      const newTodo = prevTodo.filter(td => td !== item);
      return newTodo;
    });
  }, []);

  const toggleCheck = useCallback((item: Item) => {
    console.info(item);
    setTodos(prevTodo => {
      const newTodo = [...prevTodo];
      const index = prevTodo.indexOf(item);
      newTodo[index] = {
        ...item,
        done: !item.done,
      };
      return newTodo;
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2EAF3',
        paddingVertical: 20,
      }}>
      <View style={{height: 150, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#1D2F44',
            fontSize: 26,
            fontWeight: '600',
            marginBottom: 10,
          }}>
          Rumah Penguin Todos App ⌣
        </Text>
      </View>
      <ScrollView>
        <TodoListItem
          data={todos}
          onRemove={handleDelete}
          onToggleCheck={toggleCheck}
        />
      </ScrollView>
      {/* <View
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
          color: '#E2EAF3',
        }}>
        <TextInput
          style={{color: '#E2EAF3', fontSize: 18, height: 50, flex: 1}}
                  placeholder="input todos"
                  
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
      </View> */}
      <TodoInput />
    </View>
  );
}
