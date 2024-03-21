import { View, Image, SafeAreaView, StyleSheet } from "react-native";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from "./signOut";
import SignInScreen from "./signIn";

const Page = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require("@/assets/images/logo-dark.png")} style={styles.logo} />
        {/* <SignedIn>
          <SignInScreen />
        </SignedIn>
        <SignedOut>
          <SignUpScreen />
        </SignedOut> */}
      </SafeAreaView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  logo: {
    height: 100,
    width: 200,
    resizeMode: "contain",
  },
});
