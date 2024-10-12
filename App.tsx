import React from 'react';
import AppContainer from './src/AppContainer';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); // Ignore all log notifications

const App = () =>(<AppContainer />);
export default App;
