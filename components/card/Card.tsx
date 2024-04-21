import { ReactNode } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface CardProps {
  title: string;
  content: ReactNode;
  onClickDetail?: () => void;
}

export default function Card(props: CardProps) {
  const { title, content, onClickDetail } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Button title="details" onPress={onClickDetail} />
      </View>
      {content}
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
    flexDirection: "row",
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
  },
});
