// theme/colors.js
export const colors: ColorTheme = {
  name: "light",
  primary: '#4F46E5',
  secondary: '#10B981',
  surface: '#F9FAFB',
  background: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
  barStyle: "dark-content",
};

export const darkTheme: ColorTheme = {
  name: "dark",
  primary: '#6366F1',
  secondary: '#34D399',
  background: '#111827',
  surface: '#1F2937',
  text: '#F9FAFB',
  muted: '#9CA3AF',
  barStyle: "light-content",

}
export const lightTheme: ColorTheme = {
  name: "light",
  primary: '#4F46E5',
  secondary: '#10B981',
  surface: '#F9FAFB',
  background: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
  barStyle: "dark-content",
}

export type ColorTheme = {
  name: "dark" | "light"
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  barStyle: "dark-content" | "light-content"
}