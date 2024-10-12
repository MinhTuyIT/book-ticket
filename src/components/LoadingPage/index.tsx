import { forwardRef, Ref, useImperativeHandle, useMemo, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface ILoadingProps { }

export interface LoadingPageRef {
  isLoading: () => boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingPage = forwardRef((props: ILoadingProps, ref: Ref<LoadingPageRef>) => {

  const [isShow, setIsShow] = useState(false);

  useImperativeHandle(ref, () => ({
    isLoading() {
      return isShow;
    },
    showLoading() {
      setIsShow(true);
    },
    hideLoading() {
      setIsShow(false);
    },
  }));

  const renderLoading = useMemo(() => {
    if (!isShow) {return null;}
    return (
      <View style={styles.container}>
        <ActivityIndicator color={'white'} />
      </View>
    );
  }, [isShow]);

  return renderLoading;

});

export default LoadingPage;
