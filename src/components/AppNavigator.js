import React from 'react';

import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

import App from './App';

export const AppNavigator = StackNavigator({
  Splash: { screen: Splash },
}, {
  initialRouteName: 'Splash',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
