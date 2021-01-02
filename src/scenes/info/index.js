import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './list';
import DetailScreen from './detail';

const InfoStack = createStackNavigator();

const InfoStackScreen = ({navigation}) => (
    <InfoStack.Navigator>
        <InfoStack.Screen name="list" component={ListScreen} options={{headerShown:false}}/>
        <InfoStack.Screen name="detail" component={DetailScreen} options={{
            headerTitle: '상세'
        }}/>
    </InfoStack.Navigator>
)

export default InfoStackScreen;