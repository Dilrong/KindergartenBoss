import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY, GRAY_DARK } from '_styles/colors';

import InfoStackScreen from '../scenes/info'
import MoreScreen from '../scenes/more';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        activeColor={PRIMARY}
        inactiveColor={GRAY_DARK}
        barStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen name="유치원 정보" component={InfoStackScreen} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="baby-face-outline" color={color} size={26}/>
        }}/>
        <Tab.Screen name="더보기" component={MoreScreen} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="dots-horizontal" color={color} size={26}/>
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;