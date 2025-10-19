import React, { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import { colors } from '../theme/colors';


export default function IconWrapper({ children, style, ...props }: IconWrapperProps) {
  return (
    <TouchableOpacity style={[styles.iconWrapper, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    height: 46,
    width: 46,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});


// Extend TouchableOpacityProps so we can pass all its props (like onPress, activeOpacity, etc.)
interface IconWrapperProps extends TouchableOpacityProps {
  children: ReactElement;
}