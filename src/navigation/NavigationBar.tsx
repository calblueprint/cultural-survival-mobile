import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioScreen from '../screens/AudioScreen/Audio';

import GrantsStackNavigator from '../stacks/GrantsStackNavigator';
import HomeStackNavigator from '../stacks/HomeStackNavigator';
import SearchStackNavigator from '../stacks/SearchStackNavigator';

import icons from './IconUtils';

const initialRouteName = 'Home';

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarActiveTintColor: '#CC502F',
        tabBarInactiveTintColor: '#CC502F',
      }}
    >
      <Tab.Screen
        name="GrantsStack"
        component={GrantsStackNavigator}
        options={{
          tabBarLabel: 'Grants',
          tabBarIcon: icons.handleGrants,
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: icons.handleHome,
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: icons.handleSearch,
        }}
      />
      <Tab.Screen
        name="LibraryStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: icons.handleLibrary,
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationBar;
