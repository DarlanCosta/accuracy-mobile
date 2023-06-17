import { Box } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
       <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}