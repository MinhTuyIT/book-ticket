import {StyleSheet} from 'react-native';
import {colors, WIDTH} from '../../constants/vars';

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 10,
    flexDirection: 'row',
  },
  img: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.3,
    borderRadius: 10,
  },
  info: {
    marginLeft: 8,
    flex: 1,
  },
  vTime: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems:'center',
  },
  time: {
    color: '#676767',
  },
  infoRate: {
    flexDirection:'row',
  },
  rate: {
    fontSize: 12,
    color:'#414141',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: '#414141',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 5,
    paddingVertical: 2.5,
    height: 30,
  },
  btnBookTicket: {
    borderWidth: 1,
  },
  btnBook: {
    marginLeft: 5,
  },
  hightLight: {
    borderColor: colors.MAIN_COLOR,
    color: colors.MAIN_COLOR,
  },
  
});

export default styles;
