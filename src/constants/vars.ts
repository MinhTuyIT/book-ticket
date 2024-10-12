// Color system
import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const colors = {
  MAIN_COLOR: '#D82D8B',
  CONTENT: '#414141',
};

// Sizing
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH_RATIO = WIDTH > 375 ? 1 : WIDTH / 375;
export const topPadding =
  Platform.OS === 'android' ? (DeviceInfo.hasNotch() ? HEIGHT * 0.075 : HEIGHT * 0.035) : HEIGHT <= 736 ? HEIGHT * 0.035 : HEIGHT * 0.05;
export const PADDING = 20 * WIDTH_RATIO;
export const BORDER_RADIUS = 8;

// Border
export const BORDER_WIDTH = 1;
export const BORDER_RADIUS_BOTTOM_SHEET = 25;
// Date format
export const FORMAT_DATE = 'YYYY-MM-DD';
export const FORMAT_DATE_NOT_DASH = 'YYYY MM DD';

// Upload size
export const DEFAULT_MAXIMUM_IMAGE_SIZE = 10;
export const DEFAULT_MAXIMUM_VIDEO_SIZE = 500;
export const DEFAULT_MAXIMUM_FILE_SIZE = 10;
export const DEFAULT_MAXIMUM_SIZE = 10;
export const DEFAULT_MAXIMUM_VIDEO_DURATION = 5; //minute
// Time format
export const FORMAT_TIME = 'HH:mm';

export const EXPIRED_TIME_BIOMETRIC = 2; // minutes

export const KEY_DEVICE_ID = 'DEVICE_ID';

export const API_VERSION = '1.0.0';

export const DEFAULT_USER_APP_INFO = {
  app_version: '1.0.0',
  device_id: 'HD-Testing-DeviceID',
  device_name: 'HD-Testing-DeviceName',
  os_version: 'HD-Testing-OSVersion',
  os_name: 'HD-Testing-OSName',
};


// Min Max Deposit
export const DEFAULT_MIN_DEPOSIT = 1;
export const RATE_USD_TO_CENT = 100;
export const DEFAULT_MAX_DEPOSIT = 1000000;

// Min Max Withdraw
export const DEFAULT_MIN_WITHDRAW = 1;
export const DEFAULT_MAX_WITHDRAW = 1000000;

//  AMOUNT OF TIP
export const DEFAULT_MIN_TIP_AMOUNT = 1; // cents
export const DEFAULT_MAX_TIP_AMOUNT = 1000000; // cents

// REVIEW MAX LENGTH
export const REVIEW_MAX_LENGTH = 1000;

// Min Max Name Bank Account
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 128;

// Required Confirm Card 3Ds
export const REQUIRED_CONFIRM_3D_CARD = 'authentication_required';
