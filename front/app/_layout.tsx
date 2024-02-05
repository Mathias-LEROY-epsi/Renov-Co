import { Stack, Link } from "expo-router";
import { Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "home",
};

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="settings"
                    size={25}
                    color="green"
                    style={{ height: 25, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
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
    </Stack>
  );
};

export default Layout;
