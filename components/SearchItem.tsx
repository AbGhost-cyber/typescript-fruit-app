import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fruit } from "../data";

const SearchItem: FC<Fruit> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subParent}>
        <Text style={{ fontWeight: "800" }}>{props.name}</Text>
      </View>
      <View style={styles.subParent}>
        <Text style={{ fontWeight: "600" }}>{props.price}</Text>
      </View>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    padding: 17,
  },
  subParent: {
    alignItems: "flex-start",
  },
  priceParent: {
    alignItems: "flex-end",
  },
});
