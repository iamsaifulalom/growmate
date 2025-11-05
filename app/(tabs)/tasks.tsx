import React, { useState } from 'react'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import PlusIcon from '@/assets/icons/plus-icon'
import HeaderWrapper from '@/src/ui/header-wrapper'
import IconWrapper from '@/src/ui/icon-wrapper'
import { H2 } from '@/src/ui/Elements'
import ContentsWrapper from '@/src/ui/contents-wrapper'
import TaskCard from '@/src/ui/task-card'
import Model from 'react-native-modal'
import TaskForm from '@/src/ui/task-form'

export default function Tasks() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <ScreenWrapper>
      {/* screen header */}
      <HeaderWrapper>
        <H2>Tasks</H2>
        <IconWrapper onPress={() => setIsModelOpen(p => !p)} >
          <PlusIcon />
        </IconWrapper>
      </HeaderWrapper>

      <Model
        isVisible={isModelOpen}
        onBackdropPress={() => setIsModelOpen(false)}
        useNativeDriver={true}
        style={{ justifyContent: 'flex-end', margin: 0, width: "100%" }}
      >
        <TaskForm />
      </Model>
      {/* screen content */}
      <ContentsWrapper>
        {Array.from({ length: 20 })
          .map((task, i) => (
            <TaskCard key={i} />
          ))}
      </ContentsWrapper>
    </ScreenWrapper>
  )
}