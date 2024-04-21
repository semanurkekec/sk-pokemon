import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import Detail from "./screens/Detail";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 48,
    gap: 24,
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
  },
});
