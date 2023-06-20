import { background } from "native-base/lib/typescript/theme/styled-system";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#1A1A1A' }}>
      <ActivityIndicator color="#d1e231" />
    </View>
  );
}
