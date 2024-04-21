import { ReactNode } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useGetPokemon } from "../../api";
import {
  getCollection,
  removeFromCollection,
  saveToCollection,
  usePokemonCollection,
} from "../../stores/usePokemonCollection";
import _ from "lodash";

interface DetailCardProps {
  cardId: string | null;
}

export default function DetailCard(props: DetailCardProps) {
  const { cardId } = props;
  if (!cardId) {
    throw new Error("card id is not defined");
  }
  const save = usePokemonCollection((state) => state.save);
  const remove = usePokemonCollection((state) => state.remove);
  const getStatus = usePokemonCollection((state) => state.getSavedStatus);
  const details = useGetPokemon<any>({
    url: "cards/" + cardId,
    params: { select: "name,images" },
  });
  const { data } = details.data.res;
  const isSaved = getStatus(cardId);
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <Image source={{ uri: data.images.small }} style={styles.image} />
      {isSaved ? (
        <Button
          title={"remove"}
          onPress={() => {
            remove(cardId);
          }}
        />
      ) : (
        <Button
          title={"save"}
          onPress={() => {
            save(cardId);
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontWeight: "900",
    fontSize: 24,
  },
  image: { height: 200, aspectRatio: 245 / 342 },
});
