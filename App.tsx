import { StatusBar } from "expo-status-bar";
import React, { FC, useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Input from "./components/input";
import SearchItem from "./components/SearchItem";
import { Fruit, Fruits } from "./data";

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [fruits, setFruits] = useState<Fruit[] | null>(null);

  useEffect(() => {
    handleFruitsChange();
  }, []);

  const handleFruitsChange = useCallback(() => {
    setFruits(
      Fruits.sort((a: Fruit, b: Fruit) =>
        a.price > b.price ? 1 : b.price > a.price ? 0 : -1
      )
    );
  }, [fruits]);

  const handleSearch = useCallback((text: string) => {
    const fruits: Fruit[] = Fruits.filter((fruit) => fruit.name.includes(text));
    setFruits(fruits);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Input
        icon="md-search"
        placeholder="Search"
        onChangeText={(text) => handleSearch(text)}
      />
      <FlatList
        style={{ marginVertical: 10 }}
        data={fruits}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <SearchItem id={item.id} price={item.price} name={item.name} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
