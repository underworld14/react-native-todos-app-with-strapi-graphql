import React, { useState } from 'react'
import TodoListItem from '../components/todo-list-item'
import { ScrollView, Text, View } from 'react-native'
import TodoInput from '../components/todo-input'
import { GET_TODOS } from '../store/store'
import { useQuery } from '@apollo/client'

const initialData = [
  {
    id: 1,
    job: 'Create Agency Website',
    finished: false
  },
  {
    id: 2,
    job: 'Doing React Native',
    finished: false
  }
]

export default function MainScreen() {
  const [datas, setDatas] = useState(initialData)
  const { data } = useQuery(GET_TODOS)

  const fJson = JSON.stringify(data)
  // const todosData = data.todos.data.forEach(item => item.attributes.job)

  console.log(fJson)
  // console.log(todosData)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2EAF3',
        paddingVertical: 20
      }}
    >
      <View style={{ height: 150, justifyContent: 'center' }}>
        <Text
          style={{
            color: '#1D2F44',
            fontSize: 26,
            fontWeight: '600',
            marginBottom: 10
          }}
        >
          Rumah Penguin Todos App ⌣
        </Text>
      </View>
      <ScrollView>
        <TodoListItem data={datas} />
      </ScrollView>
      <TodoInput />
    </View>
  )
}

// 726fa2f5d1adcd9f6cb18192a42948124708a1c5699b694b5bf2fa3e792a4c9db248926a62ae0a68fc5e1fa7dd0c52a2d00cbd19cc1f576695ac8f316b248ba4edd14a6a34e03fbf6771c81bc5cf107d489918d7cabe8d04b18d7d523d2d140c995a0f75672f66cfcd4058dadb062f98ed6f7ac7a6f3724b1ec14ea2b5cad5ef
