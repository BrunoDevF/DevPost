import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import NewPost from '../pages/NewPost';
import PostUser from '../pages/PostUser';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
 return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}