import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card, PokemonList } from "../components";
import { useGetPokemon } from "../api";
import { Suspense } from "react";
export default function Main({
  navigation,
}: {
  navigation: { navigate: (to: string) => void };
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GOTTA CATCH 'EM ALL!</Text>
      <Suspense fallback={<Text>loading</Text>}>
        <PokemonList onNavigate={() => navigation.navigate("detail")} />
      </Suspense>
    </SafeAreaView>
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
