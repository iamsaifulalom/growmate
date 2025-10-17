// theme/colors.js
export const colors: ColorTheme = {
  primary: '#6366F1',
  secondary: '#34D399',
  background: '#111827',
  surface: '#1F2937',
  text: '#F9FAFB',
  muted: '#9CA3AF',
};


export interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
}