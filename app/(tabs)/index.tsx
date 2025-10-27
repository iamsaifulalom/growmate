import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import NotificationIcon from '@/assets/icons/notification-icon'
import SearchIcon from '@/assets/icons/search-icon'
import PlusIcon from '@/assets/icons/plus-icon'
import IconWrapper from '@/src/ui/icon-wrapper'
import HeaderWrapper from '@/src/ui/header-wrapper'
import { useRouter } from 'expo-router'
import WeeklyPerformaceGraph from '@/src/ui/weekly-performance-graph'
import ClientsOverview from '@/src/ui/clients-overvie'
import Activity from '@/src/ui/activity'

export default function Index() {

  const { push } = useRouter();

  return (
    <ScreenWrapper>

      {/* ===== Header Icons ===== */}
      <HeaderWrapper>
        <IconWrapper>
          <NotificationIcon />
        </IconWrapper>

        <View style={defaultScreenStyle.rightIconsWrapper}>
          <IconWrapper>
            <PlusIcon />
          </IconWrapper>
          <IconWrapper onPress={() => push("/search")}>
            <SearchIcon />
          </IconWrapper>
        </View>
      </HeaderWrapper>

      {/* ===== Screen Contents ===== */}
      <ScrollView
        contentContainerStyle={defaultScreenStyle.contentSection}
        showsVerticalScrollIndicator={false}
      >
        {/* weekly performace */}
        <WeeklyPerformaceGraph/>
        {/* clients over view cards */}
        <ClientsOverview/>
        {/* strikes */}
        <Activity/>
      </ScrollView>
    </ScreenWrapper>
  )
}

const defaultScreenStyle = StyleSheet.create({
  rightIconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  contentSection: {
    flexDirection: 'column',
    gap: 6,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 40, // for scroll breathing space
  },
})
