import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import SearchIcon from '@/assets/icons/search-icon'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <SearchIcon color={colors.muted}/>
      <TextInput style={styles.field} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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


