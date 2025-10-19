import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWraper from '@/src/ui/screen-wraper'
import { defaultScreenStyle } from '.'
import { styles } from '@/src/ui/overview-card'
import PlusIcon from '@/assets/icons/plus-icon'
import MoonIcon from '@/assets/icons/moon-icon'

export default function Settings() {
    return (
        <ScreenWraper>
            <View style={defaultScreenStyle.headerContainer}>
                   <Text style={[styles.title, { fontSize: 26 }]}>Settings</Text>
                   <TouchableOpacity style={defaultScreenStyle.iconButton}>
                     <MoonIcon />
                   </TouchableOpacity>
                 </View>
        </ScreenWraper>
    )
}