import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from "react";
import {Text} from "react-native"
import Icon from "../../assets/icons";
import HomeStackNavigator from '../navigation/homeStack';
import UserStack from '../navigation/userStack';
import GrantsScreen from '../screens/GrantsScreen/Grants';

import HomeScreen from "../screens/HomeScreen/Home";

const initialRouteName = 'Grants';

const Tab = createMaterialBottomTabNavigator();

function NavigationBar() {
    return (
        <>
        <Text> Hello </Text>
        <Tab.Navigator
        initialRouteName={initialRouteName}
        barStyle={{backgroundColor: "yellow", width: 200, height: 100}}
        >
            {/* <Tab.Screen
                name="Grants"
                component={GrantsScreen}
                options={{
                    tabBarLabel: 'Grants',
                    tabBarIcon:  '<Icon type="grants_icon" />'
                }}
            /> */}
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:  "account-box"
                }}
             />
             <Tab.Screen
                name="Search"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon:  "account-box"
                }}
             />
             <Tab.Screen
                name="Library"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon:  "account-box"
                }}
             />
        </Tab.Navigator>
        </>
        
    );
}

export default NavigationBar;
