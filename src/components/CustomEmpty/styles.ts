import {StyleSheet} from 'react-native';
import {WIDTH} from '../../constants/vars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
  },
  content: {
    fontSize: 16,
    color: '#676767',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 20,
  },
});

export default styles;

