import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card, DetailCard, PokemonList } from "../components";
import { useGetPokemon } from "../api";
import { Suspense } from "react";
import { getCurrentDetailId, setDetailId } from "../stores/useScreenNav";
export default function Detail({
  navigation,
}: {
  navigation: { navigate: (to: string) => void };
}) {
  const cardId = getCurrentDetailId();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="back"
        onPress={() => {
          navigation.navigate("main");
          setDetailId(null);
        }}
      />
      <Suspense fallback={<Text>loading</Text>}>
        <DetailCard cardId={cardId} />
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
