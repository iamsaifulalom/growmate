import React, { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../store/use-theme';


export default function IconWrapper({ children, style, ...props }: IconWrapperProps) {

  const theme = useTheme(state => state.theme)
  return (
    <TouchableOpacity style={[styles.iconWrapper, style, { backgroundColor: theme.surface, }]} {...props}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});


// Extend TouchableOpacityProps so we can pass all its props (like onPress, activeOpacity, etc.)
interface IconWrapperProps extends TouchableOpacityProps {
  children: ReactElement;
}