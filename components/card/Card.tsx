import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  title: string;
  content: ReactNode;
}

export default function Card(props: CardProps) {
  const { title, content } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
  },
});
