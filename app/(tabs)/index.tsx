import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@/src/theme/colors'
import ScreenWraper from '@/src/ui/screen-wraper'
import OverviewCard from '@/src/ui/overview-card'
import NotificationIcon from '@/assets/icons/notification-icon'
import SearchIcon from '@/assets/icons/search-icon'
import PlusIcon from '@/assets/icons/plus-icon'

export default function Index() {
  return (
    <ScreenWraper>

      {/* ===== Header Icons ===== */}
      <View style={defaultScreenStyle.headerContainer}>
        <TouchableOpacity style={defaultScreenStyle.iconButton}>
          <NotificationIcon />
        </TouchableOpacity>

        <View style={defaultScreenStyle.rightIconsWrapper}>
          <TouchableOpacity style={defaultScreenStyle.iconButton}>
            <PlusIcon />
          </TouchableOpacity>
          <TouchableOpacity style={defaultScreenStyle.iconButton}>
            <SearchIcon />
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== Screen Contents ===== */}
      <ScrollView
        contentContainerStyle={defaultScreenStyle.contentSection}
        showsVerticalScrollIndicator={false}
      >
        <OverviewCard
          backgroundColor={colors.primary}
          title='New clients'
        />
        <OverviewCard
          backgroundColor={colors.secondary}
          title='Contacted clients'
        />
        <OverviewCard
          title='Grow clients'
        />
      </ScrollView>
    </ScreenWraper>
  )
}

export const defaultScreenStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rightIconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    height: 46,
    width: 46,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  contentSection: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 40, // for scroll breathing space
  },
})
