import Dashboard from './Dash/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './auth/Auth';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { DrawerActions, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList
// } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const screenOptions = {
//   headerTintCoolor: '#fff',
//   headerStyle: { backgroundColor: "#5637DD" }
// };

// const SignInNavigator = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator screenOptions={screenOptions}>
//       <Stack.Screen
//         name='Login'
//         component={{ SignIn }}
//         options={({ navigation, route }) => ({
//           headerTitle:
//             getFocusedRouteNameFromRoute(route),
//           headerLeft: () => (
//             <Icon
//               name={
//                 getFocusedRouteNameFromRoute(route) == 'Register' ? 'user-plus' : 'sign-in'
//               }
//               type='font-awsome'
//               iconStyle={StyleSheet.stackIcon}
//               onPress={() => navigation.toggleDrawer()}
//             />
//           )
//         })}

//       >
//       </Stack.Screen>
//     </Stack.Navigator>
//   )
// }

// const SignUpNavigation = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//       screenOptions={screenOptions}>
//       <Stack.Screen
//         name='SignUp'
//         component={SignUp}
//         options={({ navigation, route }) => ({
//           headerTitle: getFocusedRouteNameFromRoute(route),
//           headerLeft: () => {
//             <Icon name={
//               getFocusedRouteNameFromRoute(route) === 'Register' ? 'user-plus' : 'sign-in'
//             }
//               type='font-awesome'
//               iconStyle={styles.stackIcon}
//               onPress={() => navigation.toggleDrawer()}
//             />
//           }
//         })}
//       ></Stack.Screen>
//     </Stack.Navigator>
//   )
// }

// const WelcomeNavigatore = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator screenOptions={screenOptions}>
//       <Stack.Screen
//         name='Welcome'
//         component={Welcome}
//         options={({ navigation, route }) => ({
//           headerTitle: getFocusedRouteNameFromRoute(route),
//           headerleft: () => {
//             <Icon name={
//               getFocusedRouteNameFromRoute(route) === 'Welcome' ? 'userr-plus' : 'sign-up'
//             }
//               type='font-awesome'
//               iconStyle={styles.stackIcon}
//               onPress={() => navigation.toggleDrawer()}
//             />
//           }
//         })}
//       ></Stack.Screen>
//     </Stack.Navigator>
//   )
// }
// const DashboardNavigator = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//       screenOptions={screenOptions}>
//       <Stack.Screen
//         name='Dashboard'
//         component={Dashboard}
//         options={({ navigation }) => ({
//           title: 'Dashboard',
//           headerLeft: () => {
//             <Icon
//               name='dashboard'
//               type='font-awsome'
//               iconStyle={styles.stackIcon}
//               onPress={() => navigation.toggleDrawer()}
//             />
//           }
//         })}
//       />
//     </Stack.Navigator>
//   )
// }

const Main = () => {
  const Stack = createStackNavigator();

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Text>New y</Text>
      {/* <Drawer.Navigator
        initialRouteName='Welcome'
        drawerContent={CustomDrawerContent}
        drawerStyle={{ backgroundColor: '#XEFX8FF' }}
      >
         <DrawerActions.Screen
          name='SignIn'
          component={SignIn}
          options={{
            drawerIcon: ({ color }) => (
              <Icon
                name='sign-in'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            )
          }}
        />
        <DrawerActions.Screen
          name='SignUp'
          component={SignUp}
          options={{
            drawerIcon: ({ color }) => (
              <Icon
                name='sign-up'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            )
          }}
        />
        <DrawerActions.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            drawerIcon: ({ color }) => (
              <Icon
                name='dashboard'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            )
          }}
        />
      </Drawer.Navigator>*/}

    </View>
    // <Stack.Navigator initialRouteName="/">
    //  <Stack.Screen name="Welcome to Slam" component={Welcome} />
    //    <Stack.Screen name="signin" component={SignIn} />
    //   <Stack.Screen name="signup" component={SignUp} />
    //   <Stack.Screen name="Forgot Password" component={SignUp} />
    //   <Stack.Screen name="Password Reset" component={SignUp} />
    //   <Stack.Screen name="Dashboard" component={Dashboard} />
    //   <Stack.Screen name="Chat" component={Dashboard} />
    //   <Stack.Screen name="Calender" component={Dashboard} />
    //   <Stack.Screen name="Todo" component={Dashboard} /> 
    //  </Stack.Navigator> 
  )
}

// const styles = StyleSheet.create({
//   drawerHeader: {
//     backgroundColor: '#5637DD',
//     height: 140,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     flexDirection: 'row'
//   },
//   drawerHeaderText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   drawerImage: {
//     margin: 10,
//     height: 60,
//     width: 60
//   },
//   stackIcon: {
//     marginLeft: 10,
//     color: '#fff',
//     fontSize: 24
//   }
// })
export default Main;   