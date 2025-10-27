// theme/colors.js
export const darkTheme: ColorTheme = {
  name: "dark",
  primary: '#6366F1',
  secondary: '#34D399',
  background: '#000000',
  foreground: "#ffffff",
  surface: '#111827',
  accents: '#CDE7CB',
  card: '#CDE7CB',
  text: '#F9FAFB',
  muted: '#9CA3AF',
  barStyle: "light-content",

}
export const lightTheme: ColorTheme = {
  name: "light",
  primary: '#CAE7F2',
  secondary: '#E7CCF3',
  background: '#FFFFFF',
  foreground: "#000000",
  surface: '#F1F3E7',
  accents: '#CDE7CB',
  card: '#F1D9BB',
  text: '#111827',
  muted: '#6B7280',
  barStyle: "dark-content",
}

export type ColorTheme = {
  name: "dark" | "light"
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  accents: string;
  surface: string;
  card: string;
  text: string;
  muted: string;
  barStyle: "dark-content" | "light-content"
}