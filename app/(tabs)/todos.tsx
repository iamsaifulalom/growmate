import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWraper from '@/src/ui/screen-wraper'
import { defaultScreenStyle } from '.'
import { styles } from '@/src/ui/overview-card'
import PlusIcon from '@/assets/icons/plus-icon'

export default function ToDos() {
  return (
    <ScreenWraper>
      <View style={defaultScreenStyle.headerContainer}>
        <Text style={[styles.title, { fontSize: 26 }]}>To do</Text>
        <TouchableOpacity style={defaultScreenStyle.iconButton}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </ScreenWraper>
  )
}