import * as React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Meditate from '../screens/home/Meditate';
import ExerciseMediating from '../screens/home/ExerciseMediating';
import Volume from '../screens/home/Volume';
import MeditateLast from '../screens/home/MeditateLast';
const Stack = createStackNavigator();




function AuthStack() {
    return (

        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    )

}

function LastStack() {
    return (

        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name="MeditateLast"
                component={MeditateLast}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    )

}

function HomeStack() {
    return (

        <Stack.Navigator initialRouteName='Meditate'>
            <Stack.Screen
                name="Meditate"
                component={Meditate}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Exercise"
                component={ExerciseMediating}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Volume"
                component={Volume}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="LastStack"
                component={LastStack}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>

    )

}

export default function AppMainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Auth"
                    component={AuthStack}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

