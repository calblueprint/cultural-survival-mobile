import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from "react";
import Icon from "../../assets/icons";

import HomeScreen from "../screens/HomeScreen/Home";

const initialRouteName = 'Home';

const Tab = createMaterialBottomTabNavigator();

const NavigationBar = () => {
    return (
        <Tab.Navigator
        initialRouteName={initialRouteName}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:  <Icon type="home_icon" />
                }}
             />
        </Tab.Navigator>
    );
};

export default NavigationBar;
