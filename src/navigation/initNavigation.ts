import {RouteProp} from '@react-navigation/native';

import React from 'react';
import {BOOK_TICKET_SCREEN, HOME_SCREEN} from '../constants/screenKeys';
import {BookTicketScreen, HomeScreen} from '../screens';
import testIDs from '../../e2e/testIds';
export type ParamListBase = Record<string, object | undefined>;

export type BottomStackComponent =
  | React.ComponentType<{
      route: RouteProp<ParamListBase, keyof ParamListBase>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

export interface BottomStackProps {
  name: string;
  label: string;
  component: BottomStackComponent;
  icon: string;
  tabBarTestID: string;
}

export const bottomTabScreens: BottomStackProps[] = [
  {
    name: HOME_SCREEN,
    label: 'Home',
    component: HomeScreen,
    icon: 'home',
    tabBarTestID: testIDs.BOTTOM_TAB_HOME,
  },
  {
    name: BOOK_TICKET_SCREEN,
    label: 'Book ticket',
    component: BookTicketScreen,
    icon: 'ticket',
    tabBarTestID: testIDs.BOTTOM_TAB_BOOK_TICKET,
  },
];
