import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import Icon from '../../assets/icons';
import HomeStackNavigator from '../navigation/homeStack';
import UserStack from '../navigation/userStack';
import AudioScreen from '../screens/AudioScreen/Audio';
import GrantsScreen from '../screens/GrantsScreen/Grants';

import HomeScreen from '../screens/HomeScreen/Home';

const initialRouteName = 'Home';

const Tab = createMaterialBottomTabNavigator();

function NavigationBar() {
  return (
    <>
      {/* <Text> Hello </Text> */}
      <Tab.Navigator
        initialRouteName={initialRouteName}
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Grants"
          component={GrantsScreen}
          options={{
            tabBarLabel: 'Grants',
            tabBarIcon: 'map',
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name="Search"
          component={AudioScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name="Library"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: 'bookmark',
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default NavigationBar;
