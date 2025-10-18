import { colors } from "@/src/theme/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <>
      {/* */}
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background, flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </>
  );
}
