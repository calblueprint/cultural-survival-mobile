import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from "react";
import Icon from "../../assets/icons";
import GrantsScreen from '../screens/GrantsScreen/Grants';

import HomeScreen from "../screens/HomeScreen/Home";

const initialRouteName = 'Home';

const Tab = createMaterialBottomTabNavigator();

const NavigationBar = () => {
    return (
        <Tab.Navigator
        initialRouteName={initialRouteName}
        >
            <Tab.Screen
                name="Grants"
                component={GrantsScreen}
                options={{
                    tabBarLabel: 'Grants',
                    tabBarIcon:  '<Icon type="grants_icon" />'
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:  '<Icon type="home_icon" />'
                }}
             />
             <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon:  '<Icon type="search_icon" />'
                }}
             />
             <Tab.Screen
                name="Library"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon:  '<Icon type="library_icon" />'
                }}
             />
        </Tab.Navigator>
    );
};

export default NavigationBar;
