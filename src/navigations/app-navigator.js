import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY, GRAY_DARK } from '_styles/colors';

import MoreScreen from '../scenes/more';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        activeColor={PRIMARY}
        inactiveColor={GRAY_DARK}
        barStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen name="설정" component={MoreScreen} options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="dots-horizontal" color={color} size={26}/>
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;