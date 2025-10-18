import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '@/src/theme/colors'
import ScreenWraper from '@/src/ui/screen-wraper'
import OverviewCard from '@/src/ui/overview-card'

export default function Index() {

  return (
    <ScreenWraper>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
        </View>
      </ScrollView>
    </ScreenWraper>
  )
}