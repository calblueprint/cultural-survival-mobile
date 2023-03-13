import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import Icon from '../../assets/icons';
import AudioScreen from '../screens/AudioScreen/Audio';
import GrantsScreen from '../screens/GrantsScreen/Grants';

import HomeScreen from '../screens/HomeScreen/Home';

const initialRouteName = 'Home';

const Tab = createMaterialBottomTabNavigator();

function handleGrants({ focused, color }: { focused: boolean; color: string }) {
  return focused ? (
    <Icon type="active_grants_icon" />
  ) : (
    <Icon type="inactive_grants_icon" />
  );
}

function handleHome({ focused, color }: { focused: boolean; color: string }) {
  return focused ? (
    <Icon type="active_home_icon" />
  ) : (
    <Icon type="inactive_home_icon" />
  );
}

function handleSearch({ focused, color }: { focused: boolean; color: string }) {
  return focused ? (
    <Icon type="active_search_icon" />
  ) : (
    <Icon type="inactive_search_icon" />
  );
}

function handleLibrary({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) {
  return focused ? (
    <Icon type="active_library_icon" />
  ) : (
    <Icon type="inactive_library_icon" />
  );
}

function NavigationBar() {
  return (
    <>
      {/* <Text> Hello </Text> */}
      <Tab.Navigator
        initialRouteName={initialRouteName}
        barStyle={{ backgroundColor: 'white' }}
        activeColor="#CC502F"
        inactiveColor="#CC502F"
      >
        <Tab.Screen
          name="Grants"
          component={GrantsScreen}
          options={{
            tabBarLabel: 'Grants',
            tabBarIcon: handleGrants,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: handleHome,
          }}
        />
        <Tab.Screen
          name="Search"
          component={AudioScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: handleSearch,
          }}
        />
        <Tab.Screen
          name="Library"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: handleLibrary,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default NavigationBar;
