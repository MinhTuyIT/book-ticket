import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { loadingPageRef } from '../AppContainer';


const navigationRef: any = createNavigationContainerRef<any>();

const push = (screenName: string, passProps = {}) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screenName, passProps));
  }
};

const navigate = (screenName: string, passProps = {}) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName, passProps);
  }
};

const pop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
};

const popToRoot = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

const reset = (index: number, routes: any) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({ index: index, routes: routes });
  }
};

const canGoBack = () => {
  if (navigationRef.isReady()) {
    return navigationRef.canGoBack();
  }
  return false;
};

const replace = (screenName: string, passProps = {}) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(screenName, passProps));
  }
};


function showLoading() {
  loadingPageRef.current?.showLoading();
}

function hideLoading() {
  loadingPageRef.current?.hideLoading();
}


const NavigationActions = {
  navigate,
  push,
  pop,
  popToRoot,
  reset,
  canGoBack,
  replace,
  showLoading,
  hideLoading,
};

export { navigationRef, NavigationActions };
