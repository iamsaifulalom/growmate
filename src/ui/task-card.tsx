import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../store/use-theme'
import { H2, P } from './Elements';
import { trimText } from '../utils/trim-text';

export default function TaskCard(props: TaskCardProps) {

  const theme = useTheme(state => state.theme);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View>
        <H2>{trimText("Meet with mina", 18)}</H2>
        <P style={{ color: theme.muted, fontSize: 14 }}>
          {trimText("Meet Meet with mina this is kind djaskl fjaklsdfj laksdjfasljdf with mina this is kind djaskl fjaklsdfj laksdjfasljdf", 80)}
        </P>
      </View>
      <View>
        <View style={{ width: "100%", height: 0.5, backgroundColor: theme.muted }} />
        <View style={styles.innerContainer}>
          <P style={{ fontWeight: "bold" }}>Today:</P>
          <P style={{ color: theme.muted }}>10am - 10:30am</P>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 140,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 4,
    flexDirection: "column",
    justifyContent: "space-between",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 24,
  },
  innerContainer: {
    flexDirection: "row",
    gap: 8
  }
})

interface TaskCardProps {
  title?: string
  description?: string,
  data?: string,
  time?: string
}