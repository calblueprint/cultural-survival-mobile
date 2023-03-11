import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SvgIcon from '@mui/material';
import * as React from 'react';
import { Text, Image } from 'react-native';
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
        textColor="red"
      >
        <Tab.Screen
          name="Grants"
          component={GrantsScreen}
          options={{
            tabBarLabel: 'Grants',
            tabBarIcon: () => <Icon type="grants_icon" />,
            // <SvgIcon>
            //   <path d="M29.4467 3.63121C30.3666 3.33363 31.3786 3.48009 32.1674 4.02496C32.9587 4.57559 33.4259 5.46079 33.422 6.40204V26.6583C33.4522 27.9507 32.5971 29.1081 31.321 29.502L23.2949 32.0833C22.9904 32.1791 22.6622 32.1791 22.3577 32.0833L13.7724 29.2395L7.16708 31.3687C6.86024 31.4679 6.53843 31.5172 6.21483 31.5145C5.58251 31.5104 4.9662 31.3223 4.44636 30.975C3.65513 30.4243 3.18795 29.5391 3.19181 28.5979V8.34163C3.19063 7.08384 4.0253 5.967 5.26258 5.57079L13.2887 2.91663H13.4247H13.7724L14.12 2.98954H14.2561L22.8414 5.83329L29.4467 3.63121ZM6.21484 28.5979L12.2609 26.6583V6.40204L6.21484 8.34163V28.5979ZM21.3299 28.5979L15.2839 26.6583V6.40204L21.3299 8.34163V28.5979ZM24.3529 28.5979L30.399 26.6583V6.40204L24.3529 8.34163V28.5979Z" />
            // </SvgIcon>
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon type="home_icon" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={AudioScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => <Icon type="search_icon" />,
          }}
        />
        <Tab.Screen
          name="Library"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: () => <Icon type="library_icon" />,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default NavigationBar;
