/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import styles from './styles';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import AD from 'react-native-vector-icons/AntDesign';
import ETP from 'react-native-vector-icons/Entypo';
import EI from 'react-native-vector-icons/EvilIcons';
import FT from 'react-native-vector-icons/Feather';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import FDT from 'react-native-vector-icons/Foundation';
import ION from 'react-native-vector-icons/Ionicons';
import MI from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import OTC from 'react-native-vector-icons/Octicons';
import ZC from 'react-native-vector-icons/Zocial';
import SLI from 'react-native-vector-icons/SimpleLineIcons';


export enum VectorIconType {
  AD = 'AntDesign',
  ETP = 'Entypo',
  EI = 'EvilIcons',
  FT = 'Feather',
  FA = 'FontAwesome',
  FA5 = 'FontAwesome5',
  FA6 = 'FontAwesome6',
  FDT = 'Foundation',
  ION = 'Ionicons',
  MI = 'MaterialIcons',
  MCI = 'MaterialCommunityIcons',
  OTC = 'Octicons',
  ZC = 'Zocial',
  SLI = 'SimpleLineIcons',
}

export interface VectorIconProps {
  onClick?: () => void;
  type: VectorIconType;
  name: string;
  size?: number;
  color?: string;
  viewStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
  disabled?: boolean;
  isButton?: boolean;
}


const CustomVectorIcon = (props: VectorIconProps) => {
  const {
    type,
    name,
    size,
    color,
    viewStyle,
    onClick,
    activeOpacity = 0.85,
    disabled,
    isButton,
  } = props;
  const renderIcon = () => {
    switch (type) {
      case VectorIconType.AD:
        return <AD name={name} size={size} color={color} />;
      case VectorIconType.ETP:
        return <ETP name={name} size={size} color={color} />;
      case VectorIconType.EI:
        return <EI name={name} size={size} color={color} />;
      case VectorIconType.FT:
        return <FT name={name} size={size} color={color} />;
      case VectorIconType.FA:
        return <FA name={name} size={size} color={color} />;
      case VectorIconType.FA5:
        return <FA5 name={name} size={size} color={color} />;
      case VectorIconType.FA6:
        return <FA6 name={name} size={size} color={color} />;
      case VectorIconType.FDT:
        return <FDT name={name} size={size} color={color} />;
      case VectorIconType.ION:
        return <ION name={name} size={size} color={color} />;
      case VectorIconType.MI:
        return <MI name={name} size={size} color={color} />;
      case VectorIconType.MCI:
        return <MCI name={name} size={size} color={color} />;
      case VectorIconType.OTC:
        return <OTC name={name} size={size} color={color} />;
      case VectorIconType.ZC:
        return <ZC name={name} size={size} color={color} />;
      case VectorIconType.SLI:
        return <SLI name={name} size={size} color={color} />;
      default:
        return;
    }
  };

  if (isButton) {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={activeOpacity}
        style={[styles.iconView, viewStyle]}
        onPress={onClick}
      >
        {renderIcon()}
      </TouchableOpacity>
    );
  }
  return <View style={[styles.iconView, viewStyle]}>{renderIcon()}</View>;
};

export default CustomVectorIcon;
