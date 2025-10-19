import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWraper from '@/src/ui/screen-wraper'
import { defaultScreenStyle } from '.'
import PlusIcon from '@/assets/icons/plus-icon'
import { styles } from '@/src/ui/overview-card'

export default function Clients() {
  return (
    <ScreenWraper>
      <View style={defaultScreenStyle.headerContainer}>
        <Text style={[styles.title, { fontSize: 26 }]}>Clients</Text>
        <TouchableOpacity style={defaultScreenStyle.iconButton}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </ScreenWraper>
  )
}