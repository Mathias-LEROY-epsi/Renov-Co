import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "capitalize",
          width: "100%",
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <Ionicons name="home" color={focused ? "green" : "black"} size={25} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => <Ionicons name="notifications" color={focused ? "green" : "black"} size={25} />,
        }}
      />
      <Tabs.Screen
        name="(top-tabs)"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => <Ionicons name="chatbubble" color={focused ? "green" : "black"} size={25} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
