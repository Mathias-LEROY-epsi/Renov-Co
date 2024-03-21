import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const HomeRoute = () => <Text>Home</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;
const MessagesRoute = () => <Text>Messages</Text>;

const Layout = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home-variant", unfocusedIcon: "home-variant-outline" },
    { key: "notifications", title: "Notifications", focusedIcon: "bell", unfocusedIcon: "bell-outline" },
    { key: "messages", title: "Messages", focusedIcon: "message", unfocusedIcon: "message-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    notifications: NotificationsRoute,
    messages: MessagesRoute,
  });
  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default Layout;
