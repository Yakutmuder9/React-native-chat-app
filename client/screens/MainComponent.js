import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid
} from 'react-native';
// import Constant from "expo-constants";
// import { createStackNavigator } from '@react-navigation/stack';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList
// } from '@react-navigation/drawer';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { Icon } from 'react-native-elements';
// import { fetchUsers } from './../redux/features/users/usersSlice';
// import NetInfo from '@react-native-community/netinfo';
// import SigIn from './auth/SignIn';

const Main = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  // useEffect(() => {
  //   NetInfo.fetch().then((connectionInfo) => {
  //     Platform.OS === 'ios'
  //       ? Alert.alert(
  //         'Initial Network Connectivity Type:',
  //         connectionInfo.type
  //       )
  //       : ToastAndroid.show(
  //         'Initial Network Connectivity Type: ' +
  //         connectionInfo.type,
  //         ToastAndroid.LONG
  //       );
  //   });

  //   const unsubscribeNetInfo = NetInfo.addEventListener(
  //     (connectionInfo) => {
  //       handleConnectivityChange(connectionInfo);
  //     }
  //   );

  //   return unsubscribeNetInfo;
  // }, []);


  // const handleConnectivityChange = (connectionInfo) => {
  //   let connectionMsg = 'You are now connected to an active network.';
  //   switch (connectionInfo.type) {
  //     case 'none':
  //       connectionMsg = 'No network connection is active.';
  //       break;
  //     case 'unknown':
  //       connectionMsg = 'The network connection state is now unknown.';
  //       break;
  //     case 'cellular':
  //       connectionMsg = 'You are now connected to a cellular network.';
  //       break;
  //     case 'wifi':
  //       connectionMsg = 'You are now connected to a WiFi network.';
  //       break;
  //   }
  //   Platform.OS === 'ios'
  //     ? Alert.alert('Connection change:', connectionMsg)
  //     : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
  // };

  return (
    <View >
      <Text>dOpen up App to start working on your apps!</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;   