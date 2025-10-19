import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@/src/theme/colors'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import OverviewCard from '@/src/ui/overview-card'
import NotificationIcon from '@/assets/icons/notification-icon'
import SearchIcon from '@/assets/icons/search-icon'
import PlusIcon from '@/assets/icons/plus-icon'
import IconWrapper from '@/src/ui/icon-wrapper'
import HeaderWrapper from '@/src/ui/header-wrapper'
import SearchBar from '@/src/ui/search-bar'
import { useRouter } from 'expo-router'

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
          <IconWrapper onPress={()=>push("/search")}>
            <SearchIcon />
          </IconWrapper>
        </View>
      </HeaderWrapper>

      {/* ===== Screen Contents ===== */}
      <ScrollView
        contentContainerStyle={defaultScreenStyle.contentSection}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />

        <OverviewCard
          title='New clients'
        />
        <OverviewCard
          title='Contacted clients'
        />
        <OverviewCard
          title='Grow clients'
        />
      </ScrollView>
    </ScreenWrapper>
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
