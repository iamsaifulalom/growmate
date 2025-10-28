import { View, Text, StyleSheet, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useTheme } from '../store/use-theme'

export default function Input({ label, autoFocus, style, ...props }: InputProps) {

    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme(state => state.theme);

    return (
        <View style={[styles.container, {
            borderColor: isFocused? theme.secondary : "transparent",
        }]}>

            <TextInput
                {...props}
                autoFocus={autoFocus}
                style={[styles.input, style,
                {
                    backgroundColor: theme.background,
                    color: theme.text,
                }]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        borderWidth: 3,
        borderRadius: 24,
    },
    label: {
        position: "absolute",
        left: 20
    },
    input: {
        paddingHorizontal: 16,
        borderRadius: 24,
        flex: 1,
        height: 45,
        fontFamily: "space-grotesk-bold",
    }
})


interface InputProps extends TextInputProps {
    label?: string
}