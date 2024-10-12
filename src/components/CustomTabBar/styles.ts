import {StyleSheet} from 'react-native';
import {colors} from '../../constants/vars';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: colors.MAIN_COLOR,
    height: 3,
  },
  label: {
    color: 'black',
  },
});

export default styles;
