import { useRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Transitioning, Transition } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-left"
      durationMs={250}
      interpolation="easeInOut"
    />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);
const SignUp = ({ navigation }) => {
  const ref = useRef();
  return (
    <View style={styles.container}>
      <Transitioning.View ref={ref} transition={transition}>
        <Text style={styles.title}>Sing Up Screen</Text>
        <Button
          title="Go to Sign In"
          onPress={() => {
            ref.current.animateNextTransition();
            navigation.navigate("signin");
          }}
        />
      </Transitioning.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#503AE7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default SignUp;
