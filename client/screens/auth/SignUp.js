import { View, Text } from 'react-native';
// import { Transition } from 'react-native-reanimated';

const SignUp = ({ route }) => {
  const { transition } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sing Up Screen</Text>
      {/* <Transition.Together>
        <Transition.In type={transition} durationMs={400} />
      </Transition.Together> */}
    </View>
  )
}

export default SignUp;