import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TouchableOpacityProps, TextProps } from 'react-native';
interface IButtonPros extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textProps?: TextProps;
}

const CustomButton = ({ title, style, onPress, textProps, ...props }: IButtonPros) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={props.activeOpacity || 0.85} {...props}>
      <Text {...textProps}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
