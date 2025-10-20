import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import SearchIcon from '@/assets/icons/search-icon'
import { useTheme } from '../store/use-theme'

export default function SearchBar() {
  const theme = useTheme(state => state.theme)
  return (
    <View style={[styles.container , {backgroundColor: theme.background}]}>
      <SearchIcon color={colors.muted}/>
      <TextInput style={styles.field} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    flexDirection : "row",
    alignItems: "center",
    
  },
  field: {
    color: colors.text,
    paddingHorizontal: 20,
    height: 50
  }
})


