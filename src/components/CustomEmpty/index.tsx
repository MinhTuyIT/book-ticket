import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import CustomVectorIcon, { VectorIconType } from '../CustomVectorIcon';

interface IEmpty {
  content: string;
}
const CustomEmpty = ({ content = 'No Data' }: IEmpty) => {
  return (
    <View style={styles.container}>
      <CustomVectorIcon
        type={VectorIconType.FA6}
        name={'photo-film'}
        size={100}
        color={'#cdcdcd'} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default CustomEmpty;
