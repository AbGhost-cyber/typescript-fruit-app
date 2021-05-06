import React, { FC } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type iconName = {
  icon: keyof typeof Ionicons.glyphMap;
};

interface Props {
  icon: iconName["icon"];
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 0.1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <Ionicons
          name={props.icon}
          size={22}
          color="#555"
          style={{ padding: 5 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          placeholderTextColor="#555"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 7,
    width: "98%",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: "row",
  },
});
