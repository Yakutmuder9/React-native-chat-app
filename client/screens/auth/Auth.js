// import { Button, View } from "react-native";

// const Welcome = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to SignUp"
//         onPress={() => navigation.navigate('signup', { transition: 'slideFromLeft' })}
//       />
//       <Button
//         title="Go to SignIn"
//         onPress={() => navigation.navigate('signin', { transition: 'slideFromRight' })}
//       />
//     </View>
//   );
// }

// export default Welcome;
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import robotPng from '../../assets/SignIn.png';
import ellipsPng from '../../assets/ellipse.png';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="/">
      {/* <Welcome /> */}
      <Stack.Screen name="Welcome to Slam" component={Welcome} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="Forgot Password" component={SignUp} />
      <Stack.Screen name="Password Reset" component={SignUp} />
    </Stack.Navigator>

  )
}

const Welcome = () => {
  return (<View style={styles.signInContainer}>
    <View style={styles.pinkFade}></View>
    <View style={styles.yellowFade}></View>
    <View style={styles.greenFade}></View>
    <View style={styles.blueFade}></View>
    <View style={styles.pinkFade}></View>
    <Image source={ellipsPng} style={styles.ellipsImg} />
    <Image source={robotPng} style={styles.robotImg} />
    <View style={styles.txtContainer}>
      <Text style={styles.headerTxt}>Trusted Companion for Seamless Communication</Text>
      <Text style={styles.discTxt}> ሰላም Chat is a powerful chat app designed for effortless communication. With its user-friendly interface and advanced features, ሰላም Chat makes it easy to connect with your friends, family, and colleagues in real-time.</Text>
      <View style={styles.btnContainer}>
        <TouchableHighlight
          style={{
            height: 60,
            width: 160,
            borderRadius: 20,
            backgroundColor: "yellow",
            marginRight: 5,
          }}>
          <Button
            color='#000'
            title="Sign Up"
            accessibilityLabel="Learn more about this button"
            onPress={() => navigation.navigate('signup', { transition: 'slideFromLeft' })}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            height: 60,
            width: 160,
            borderRadius: 10,
            backgroundColor: "yellow",
            marginLeft: 5,
          }}>
          <Button
            title="SignIn"
            accessibilityLabel="Learn more about this button"
            onPress={() => navigation.navigate('signin', { transition: 'slideFromRight' })}
          />
        </TouchableHighlight>
      </View>
    </View>
  </View>)
}
const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    backgoundColor: "#DDFDSD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipsImg: {
    position: 'absolute',
    width: 562,
    height: 562,
    left: -86,
    top: -88,
    background: '#fff'
  },
  robotImg: {
    position: 'absolute',
    width: 338,
    height: 306,
    left: 36,
    top: 120
  },
  pinkFade: {
    position: 'absolute',
    width: 268,
    height: 268,
    left: 61,
    top: 180,
    backgroundColor: '#FFC8E2'
  },
  greenFade: {
    position: 'absolute',
    width: 198,
    height: 198,
    left: 158,
    top: -27,
    backgroundColor: '#C8FFF2'
  },
  yellowFade: {
    position: 'absolute',
    width: 240,
    height: 240,
    left: -59,
    top: 33,
    backgroundColor: '#FFF0C8'
  },
  blueFade: {
    position: 'absolute',
    width: 196,
    height: 197,
    left: 258,
    top: 106,
    backgroundColor: '#C8DEFF'
  },

  txtContainer: {
    position: 'absolute',
    height: '35%',
    bottom: 50,
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.015,
    color: '#212226',
    padding: 10
  },
  discTxt: {
    textAlign: 'center',
    color: '#949BA5',
    padding: 15
  },
  btnContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  }
});
export default Auth;