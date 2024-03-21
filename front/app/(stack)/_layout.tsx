import * as React from "react";
import { Appbar } from "react-native-paper";
import { Stack, Link } from "expo-router";
import { Image, Pressable } from "react-native";

const Layout = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="cog" onPress={() => <Link href="/settings" />} />
      </Appbar.Header>
      {/* <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerRight: () => (
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => <Gear color="dark" size={25} weight={pressed ? "fill" : "regular"} />}
                </Pressable>
              </Link>
            ),
            headerTitle: () => (
              <Image
                source={require("@/assets/images/logo-light.png")}
                style={{ height: 30, width: 100, resizeMode: "contain" }}
              />
            ),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="settings" options={{ presentation: "modal", title: "Paramètres" }} />
      </Stack> */}
    </>
  );
};

export default Layout;
