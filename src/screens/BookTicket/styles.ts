import {StyleSheet} from 'react-native';
import {colors, WIDTH} from '../../constants/vars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: WIDTH,
    height: WIDTH,
  },
  vTime: {
    flexDirection: 'row',
    marginTop: 12,
  },
  vLine: {
    width: 1,
    height: 50,
    backgroundColor: '#676767',
  },
  infoTime: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTime: {
    color: '#676767',
    lineHeight: 25,
  },
  contentTime: {
    color: '#414141',
    fontWeight: '600',
  },
  info: {
    marginHorizontal: 12,
    paddingBottom: 20,
  },
  titleDescription: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 32,
  },
  lineRow: {
    width: WIDTH,
    height: 5,
    backgroundColor: '#DFDFDF',
    marginVertical: 10,
  },
  description: {
    color: '#414141',
    lineHeight: 20,
  },
  btn: {
    height: 45,
    backgroundColor: colors.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 'auto',
    marginBottom: 10,
  },
  btnDisabled: {
    backgroundColor: '#CDCDCD',
  },
  txtBookTicket: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
