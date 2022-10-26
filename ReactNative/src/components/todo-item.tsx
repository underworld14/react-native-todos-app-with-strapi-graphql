import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

interface TodoItemProps {
  job: string
  idx: number
}

export default function TodoItem({ job, idx }: TodoItemProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: '#5A87B9',
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 8,
        padding: 10,
        justifyContent: 'space-between'
      }}
    >
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
          paddingVertical: 5
        }}
      >
        <Text style={{ color: '#E2EAF3', fontSize: 20 }}>{idx}</Text>
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
          width: 300
        }}
      >
        <Text style={{ color: '#E2EAF3', fontSize: 18, alignItems: 'center' }}>
          {job}
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10
          }}
        >
          <Feather name="trash-2" color="#E2EAF3" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
