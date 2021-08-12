import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NewsScreen from '../Container/News';
import SearchScreen from '../Container/Search';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const optionStyle={
  headerStyle: {
    backgroundColor: '#DF7861',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = route.name === 'News' ? 'newspaper' : 'search';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#DF7861',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="News" component={NewsScreen} 
        options={optionStyle}/>
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}