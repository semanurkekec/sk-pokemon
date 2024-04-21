import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card, PokemonList } from "./components";
import { useGetPokemon } from "./api";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>GOTTA CATCH 'EM ALL!</Text>
        <Suspense fallback={<Text>loading</Text>}>
          <PokemonList />
        </Suspense>
        <StatusBar style="auto" />
      </SafeAreaView>
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
