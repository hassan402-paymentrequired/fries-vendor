import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './screens/onboard/Onboarding';
import { StatusBar } from 'expo-status-bar';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './screens/home/Index';
import AntDesign from '@expo/vector-icons/AntDesign';
import CreateProduct from './screens/create';
import Product from './screens/products';
import Notification from './screens/notification/notification';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Message from './screens/notification/message';
import Profile from './screens/profile';
import HomeIcon from './assets/icons/Home';
import ProfileIcon from './assets/icons/User';
import { BlurView } from 'expo-blur';
import { Colors } from './constants/Colors';
import { Text, View } from 'react-native';
import ProductIcon from './assets/icons/Product';
import SingleMessage from './screens/notification/message/show';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator();


const TopTabLayout = () => {
    return (
        <TopTab.Navigator >
            <TopTab.Screen name="notifications" component={Notification} />
            <TopTab.Screen name="messages" component={Message} />
        </TopTab.Navigator>
    )
}


const TabLayout = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
           
            tabBarBadgeStyle: '',
            tabBarHideOnKeyboard: true,
            tabBarBackground: () => (
                <BlurView tint="light" intensity={100} />
            ),
            tabBarStyle: {
                backgroundColor: Colors.Custom.background,
                padding: 10,
                height: 70,
                borderTopColor: 'red',
                overflow: 'hidden',
                borderTopWidth: 0,
            },
            tabBarItemStyle: {
                paddingTop: 15,
                borderColor: '#066AD8',
            },
        })}>
            <Tab.Screen
                name='home'
                component={Index}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <HomeIcon

                            width={20} height={24}
                            stroke={focused ? Colors.Custom[50] :  Colors.Custom.text}
                        />
                    ),
                     headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? Colors.Custom[50] :  Colors.Custom.text,
                                fontSize: 12,
                                fontWeight: focused ? 'bold' : 'normal',
                            }}
                        >
                            Orders
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name='Products'
                component={Product}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <ProductIcon width={20} stroke={focused ? Colors.Custom[50] :  Colors.Custom.text}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? Colors.Custom[50] : Colors.Custom.text,
                                fontSize: 12,
                                fontWeight: focused ? 'bold' : 'normal',
                            }}
                        >
                            Products
                        </Text>
                    ),
                }}
            />
            <Tab.Screen name='Add product' component={CreateProduct}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: Colors.Custom[200],
                            borderWidth: 1,
                            borderColor: Colors.Custom[50],
                            alignItems: "center",
                            justifyContent: "center",
                            position: 'relative'
                        }}>

                            <AntDesign
                                name='plus'
                                size={25}
                                color={Colors.Custom[50]}
                            />
                        </View>
                    ),
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text></Text>
                    ),
                }}
            />
            <Tab.Screen name='Notifications' component={TopTabLayout}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialIcons name="notifications-none" size={20}
                            color={focused ? Colors.Custom[50] : Colors.Custom[100]}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? Colors.Custom[50] : Colors.Custom[100],
                                fontSize: 12,
                                fontWeight: focused ? 'bold' : 'normal',
                            }}
                        >
                            Notifications
                        </Text>
                    ),
                }}
            />
            <Tab.Screen name='profile' component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <ProfileIcon
                            width={20} height={24}
                            stroke={focused ? Colors.Custom[50] :  Colors.Custom.text}
                           
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? Colors.Custom[50] : Colors.Custom[100],
                                fontSize: 12,
                                fontWeight: focused ? 'bold' : 'normal',
                            }}
                        >
                            Home
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator>
                <Stack.Screen name='onboarding' component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='ChatScreen' component={SingleMessage} options={{ headerShown: true }} />
                <Stack.Screen name='tab' component={TabLayout} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation