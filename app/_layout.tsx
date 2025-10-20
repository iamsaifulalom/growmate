import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { useTheme } from "@/src/store/use-theme";


export default function RootLayout() {

  const theme = useTheme(state => state.theme)
  const [fontLoaded] = useFonts({
    "poppins-regular": require("@/assets/fonts/poppins-regular.ttf"),
    "space-grotesk-bold": require("@/assets/fonts/space-grotesk-bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      {/* */}
      <StatusBar barStyle={theme.barStyle} backgroundColor={theme.background} />
      <SafeAreaView edges={["top"]} style={{ backgroundColor: theme.background, flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="search"
            options={{
              headerShown: false,
              animation: "slide_from_right",
              animationDuration: 10
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}
