import { Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import PlusIcon from '@/assets/icons/plus-icon'
import { styles } from '@/src/ui/overview-card'
import HeaderWrapper from '@/src/ui/header-wrapper'
import IconWrapper from '@/src/ui/icon-wrapper'
import { H2 } from '@/src/ui/Elements'

export default function Clients() {
  return (
    <ScreenWrapper>

      {/* screen header */}
      <HeaderWrapper>
        <H2>Clients</H2>
        <IconWrapper>
          <PlusIcon />
        </IconWrapper>
      </HeaderWrapper>

      {/* search bar */}
    </ScreenWrapper>
  )
}