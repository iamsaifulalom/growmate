import React from "react";
import { View, StyleSheet } from "react-native";
import { CartesianChart, Area, Line } from "victory-native";
import { useTheme } from "../store/use-theme";
import { P } from "./Elements";

export default function WeeklyPerformanceGraph() {
  const theme = useTheme((state) => state.theme);
  const title = "Weekly performance"
  const data = [
    { day: "Mon", y: 20 },
    { day: "Tue", y: 70 },
    { day: "Wed", y: 40 },
    { day: "Thu", y: 95 },
    { day: "Fri", y: 20 },
    { day: "Sat", y: 70 },
    { day: "Sun", y: 40 },
  ];

  const height = 220

  return (
    <View style={[styles.container, { height, backgroundColor: theme.accents }]}>

      <P style={[styles.title, { color: theme.text }]}>{title}</P>

      <CartesianChart
        data={data}
        xKey="day"
        yKeys={["y"]}
        domainPadding={{ top: 1, bottom: 1 }}
      >
        {({ points, chartBounds }) => (
          <>
            <Area
              curveType="bumpX"
              points={points.y}
              y0={chartBounds.bottom}
              color={theme.primary}
              opacity={0.5}
              animate={{ type: "timing", duration: 800 }}
            />
            <Line
              points={points.y}
              color={theme.foreground}
              curveType="bumpX"
              strokeWidth={2}
              animate={{ type: "timing", duration: 800 }}
            />
          </>
        )}


      </CartesianChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 16,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});
