import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ColorTheme, darkTheme, lightTheme } from '../theme/colors'

interface UseTheme {
    theme: ColorTheme
    toggleTheme: () => void
}

export const useTheme = create<UseTheme>()(
    persist(
        (set, get) => ({
            theme: darkTheme,
            toggleTheme: () => {
                const currentTheme = get().theme.name
                const theme = currentTheme === 'dark' ? lightTheme : darkTheme
                set({ theme })
            },
        }),
        {
            name: 'theme',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)
