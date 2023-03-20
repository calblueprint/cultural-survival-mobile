import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GrantsStackNavigator from '../stacks/GrantsStackNavigator';
import HomeStackNavigator from '../stacks/HomeStackNavigator';
import SearchStackNavigator from '../stacks/SearchStackNavigator';
import icons from './IconUtils';
import Colors from '../styles/Colors';

const initialRouteName = 'HomeStack';

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarActiveTintColor: Colors.redPrimary,
        tabBarInactiveTintColor: Colors.redPrimary,
      }}
    >
      <Tab.Screen
        name="GrantsStack"
        component={GrantsStackNavigator}
        options={{
          tabBarLabel: 'Grants',
          tabBarIcon: icons.handleGrants,
          headerTitle: 'Grants',
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: icons.handleHome,
          headerTitle: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: icons.handleSearch,
          headerTitle: 'Search',
        }}
      />
      <Tab.Screen
        name="LibraryStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: icons.handleLibrary,
          headerTitle: 'Search',
        }}
      />
    </Tab.Navigator>
  );
}
