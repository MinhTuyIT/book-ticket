import { createAction } from '@reduxjs/toolkit';
import {
  CommonActionType,
} from './index';

const resetAllState = createAction(CommonActionType.RESET_ALL_STATE);

export { resetAllState };
