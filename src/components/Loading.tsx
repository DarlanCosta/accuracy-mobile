import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="#d1e231" />
    </View>
  );
}