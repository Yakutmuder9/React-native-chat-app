import Dashboard from "./Dash/Dashboard";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./auth/Welcome";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import {
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useState } from "react";
import ForgotPass from "./auth/ForgotPass";
import ResetPass from "./auth/ResetPass";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerTintCoolor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};

const SignInNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={{ SignIn }}
        options={({ navigation, route }) => ({
          headerTitle: getFocusedRouteNameFromRoute(route),
          headerLeft: () => (
            <Icon
              name={
                getFocusedRouteNameFromRoute(route) == "Register"
                  ? "user-plus"
                  : "sign-in"
              }
              type="font-awsome"
              iconStyle={StyleSheet.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const SignUpNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({ navigation, route }) => ({
          headerTitle: getFocusedRouteNameFromRoute(route),
          headerLeft: () => {
            <Icon
              name={
                getFocusedRouteNameFromRoute(route) === "Register"
                  ? "user-plus"
                  : "sign-in"
              }
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />;
          },
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const WelcomeNavigatore = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={({ navigation, route }) => ({
          headerTitle: getFocusedRouteNameFromRoute(route),
          headerleft: () => {
            <Icon
              name={
                getFocusedRouteNameFromRoute(route) === "Welcome"
                  ? "userr-plus"
                  : "sign-up"
              }
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />;
          },
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const DashboardNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          title: "Dashboard",
          headerLeft: () => {
            <Icon
              name="dashboard"
              type="font-awsome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    //    <Drawer.Navigator
    //     initialRouteName='Welcome'
    //     drawerContent={CustomDrawerContent}
    //     drawerStyle={{ backgroundColor: '#XEFX8FF' }}
    //   >
    //      <DrawerActions.Screen
    //       name='SignIn'
    //       component={SignIn}
    //       options={{
    //         drawerIcon: ({ color }) => (
    //           <Icon
    //             name='sign-in'
    //             type='font-awesome'
    //             size={24}
    //             iconStyle={{ width: 24 }}
    //             color={color}
    //           />
    //         )
    //       }}
    //     />
    //     <DrawerActions.Screen
    //       name='SignUp'
    //       component={SignUp}
    //       options={{
    //         drawerIcon: ({ color }) => (
    //           <Icon
    //             name='sign-up'
    //             type='font-awesome'
    //             size={24}
    //             iconStyle={{ width: 24 }}
    //             color={color}
    //           />
    //         )
    //       }}
    //     />
    //     <DrawerActions.Screen
    //       name='Dashboard'
    //       component={Dashboard}
    //       options={{
    //         drawerIcon: ({ color }) => (
    //           <Icon
    //             name='dashboard'
    //             type='font-awesome'
    //             size={24}
    //             iconStyle={{ width: 24 }}
    //             color={color}
    //           />
    //         )
    //       }}
    //     />
    //   </Drawer.Navigator>

    <Stack.Navigator initialRouteName="/">
      {!isSignedIn ? (
        <>
          <Stack.Screen
            name="Welcome to Slam"
            options={{ headerShown: false }}
            component={Welcome}
          />
          <Stack.Screen
            name="signin"
            // options={{ headerShown: false }}
            component={SignIn}
          />
          <Stack.Screen
            name="signup"
            // options={{ headerShown: false }}
            component={SignUp}
          />
          <Stack.Screen
            name="Forgot Password"
            // options={{ headerShown: false }}
            component={ForgotPass}
          />
          <Stack.Screen
            name="Password Reset"
            // options={{ headerShown: false }}
            component={ResetPass}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Dashboard"
            options={{ headerShown: false }}
            component={Dashboard}
          />
          <Stack.Screen name="Chat" component={Dashboard} />
          <Stack.Screen name="Calender" component={Dashboard} />
          <Stack.Screen name="Todo" component={Dashboard} />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
