import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioScreen from '../screens/AudioScreen/Audio';
import GrantsScreen from '../screens/GrantsScreen/Grants';

import HomeScreen from '../screens/HomeScreen/Home';

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
        name="Grants"
        component={GrantsScreen}
        options={{
          tabBarLabel: 'Grants',
          tabBarIcon: icons.handleGrants,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: icons.handleHome,
        }}
      />
      <Tab.Screen
        name="Search"
        component={AudioScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: icons.handleSearch,
        }}
      />
      <Tab.Screen
        name="Library"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: icons.handleLibrary,
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationBar;
