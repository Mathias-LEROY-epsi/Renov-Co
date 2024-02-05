import { View, Text } from "react-native";

const Page = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
      <Text>Paramètres</Text>
      <Text>TODO: Ajouter des Paramètres utilisateurs (déconnexion, dark mode...)</Text>
    </View>
  );
};

export default Page;
