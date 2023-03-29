import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Challenge from '../screens/Main/Challenge';
import Recycle from '../screens/Main/Recycle';
import Store from '../screens/Main/Store';
import Profile from '../screens/Main/Profile';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Store">
            <Tab.Screen name="Challenge" component={Challenge} />
            <Tab.Screen name="Recycle" component={Recycle} />
            <Tab.Screen name="Store" component={Store} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
};

export default TabNavigation;