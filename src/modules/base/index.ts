import { Action } from 'redux';

export enum CommonActionType {
  RESET_ALL_STATE = 'RESET_ALL_STATE',
  SAVE_BLOCKED_USER_STATUS = 'SAVE_BLOCKED_USER_STATUS',
  SAVE_IS_BLOCKED_USER_STATUS = 'SAVE_IS_BLOCKED_STATUS',
  SAVE_FOLLOW_USER_STATUS = 'SAVE_FOLLOW_USER_STATUS',
}

export interface Pagination<T> {
  count: number;
  results: T[];
  hasNext?: boolean;
}

export const initList: any = {
  count: 0,
  results: [],
  hasNext: false,
};

export interface IActionCallback {
  onSuccess?: (data?: any, identify?: string) => void;
  onFail?: (error?: any) => void;
}

export interface IActionResetAllState extends Action {
  type: CommonActionType.RESET_ALL_STATE;
}

