import React from 'react'
import { View } from 'react-native'
import TodoItem from './todo-item'

interface TodoItemsData {
  id: number
  job: string
  finished: boolean
}

interface TodoListItemProps {
  data: Array<TodoItemsData>
}

export default function TodoListItem({ data }: TodoListItemProps) {
  return (
    <View style={{ justifyContent: 'space-around' }}>
      {data.map((item, i) => (
        <TodoItem key={item.id} idx={i + 1} job={item.job} />
      ))}
    </View>
  )
}
