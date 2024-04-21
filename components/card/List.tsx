import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Card from "./Card";
import { useGetPokemon } from "../../api";
import { notifyManager } from "@tanstack/react-query";
interface CardItem {
  id: string;
  name: string;
  images: { small: string; large: string };
  //   number: string;
  //   hp: string;
  //   supertype: string;
}
interface CardListData {
  count: number;
  data: CardItem[];
  totalCount: number;
}
export default function List() {
  const cards = useGetPokemon<CardListData>({
    url: "cards",
    params: { pageSize: "15", page: "1", select: "id,name,images" },
  });
  const { data, count, totalCount } = cards.data.res;
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.stack}>
        {data.map((item: CardItem) => (
          <Card
            key={item.id}
            title={item.name}
            onClickDetail={() => {}}
            content={
              <View>
                <Image
                  source={{ uri: item.images.small }}
                  style={styles.cardImage}
                />
                {/* <Text>{item.supertype}</Text>
              <Text>HP:{item.hp}</Text> */}
              </View>
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: { width: "100%" },
  stack: { gap: 8, width: "100%", paddingHorizontal: 24 },
  cardImage: { height: 200, aspectRatio: 245 / 342 },
});
