import { colors } from "@/src/theme/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';


export default function RootLayout() {

  const [fontLoaded] = useFonts({
    "poppins-regular": require("@/assets/fonts/poppins-regular.ttf"),
    "space-grotesk-bold": require("@/assets/fonts/space-grotesk-bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      {/* */}
      <StatusBar barStyle={colors.barStyle} backgroundColor={colors.background} />
      <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background, flex: 1 }}>
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
