import {  View, StyleSheet } from 'react-native'
import React from 'react'
import Input from './input'
import { useTheme } from '../store/use-theme'
import Textarea from './textarea'

export default function TaskForm() {
    const theme = useTheme(state => state.theme)
    return (
        <View style={[styles.container, { backgroundColor: theme.surface }]}>

            <Input label='Task' autoFocus={true} />
            <Textarea multiline={true} label='Description' />
            <Input label='Date' />
            <Input label='Time' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
        flexDirection: "column",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        gap: 8
    }
    ,
})


