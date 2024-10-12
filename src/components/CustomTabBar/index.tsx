import * as React from 'react';
import { Text } from 'react-native';
import { NavigationState, Route, SceneRendererProps, TabBar } from 'react-native-tab-view';

import styles from './styles';


const CustomTabBar = <T extends Route>(props: SceneRendererProps & { navigationState: NavigationState<T> }) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      renderLabel={({ route }) => {
        return (<Text testID={route.testID} style={styles.label}>
          {route.title}
        </Text>);
      }}
      style={styles.container}
    />
  );
};

export default CustomTabBar;
