// theme/colors.js
export const colors: ColorTheme = {
  primary: '#6366F1',
  secondary: '#34D399',
  background: '#111827',
  surface: '#1F2937',
  text: '#F9FAFB',
  muted: '#9CA3AF',
  barStyle: "light-content",
};

type ColorTheme = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  barStyle: "dark-content" | "light-content"
}

/*
** for light theme

  primary: '#4F46E5',
  secondary: '#10B981',
  surface: '#F9FAFB',
  background: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
  barStyle: "dark-content",

** for dark theme

  primary: '#6366F1',
  secondary: '#34D399',
  background: '#111827',
  surface: '#1F2937',
  text: '#F9FAFB',
  muted: '#9CA3AF',
  barStyle: "light-content",
*/