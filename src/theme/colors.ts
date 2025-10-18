// theme/colors.js
export const colors: ColorTheme = {
  primary: '#4F46E5',
  secondary: '#10B981',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
};

export interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
}

export const lightColors = {
  primary: '#4F46E5',
  secondary: '#10B981',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
};

export const darkColors = {
  primary: '#6366F1',
  secondary: '#34D399',
  background: '#111827',
  surface: '#1F2937',
  text: '#F9FAFB',
  muted: '#9CA3AF',
};
