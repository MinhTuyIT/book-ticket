/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistor, store } from '../redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { navigationRef } from '../navigation/NavigationActions';
import LoadingPage, { LoadingPageRef } from '../components/LoadingPage';
import React, { createRef } from 'react';
import { BottomStackProps, bottomTabScreens } from '../navigation/initNavigation';
import { colors } from '../constants/vars';
import CustomVectorIcon, { VectorIconType } from '../components/CustomVectorIcon';

export const enableProvider = {
  stripe: true,
  actionSheet: true,
  theme: true,
};

const Tab = createBottomTabNavigator();
export const loadingPageRef = createRef<LoadingPageRef>();
const AppContainer = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Tab.Navigator screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: colors.MAIN_COLOR,
            }}>
              {bottomTabScreens.map((item: BottomStackProps) => {
                return (
                  <Tab.Screen name={item.name} component={item.component} options={{
                    tabBarLabel: item.label,
                    tabBarTestID: item.tabBarTestID,
                    tabBarIcon: ({ color, size }) => (
                      <CustomVectorIcon
                        type={VectorIconType.MCI}
                        name={item.icon}
                        color={color}
                        size={size}
                      />
                    ),
                  }} />
                );
              })}
            </Tab.Navigator>
            <LoadingPage ref={loadingPageRef} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppContainer;
