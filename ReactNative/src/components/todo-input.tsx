import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export default function TodoInput() {
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
        bottom: 20
      }}
    >
      <TextInput style={{ color: '#fff', height: 50, flex: 1 }} />
      <TouchableOpacity
        style={{
          height: 30,
          width: 30,
          borderRadius: 5,
          // backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Feather name="plus" color="#E2EAF3" size={18} />
      </TouchableOpacity>
    </View>
  )
}
