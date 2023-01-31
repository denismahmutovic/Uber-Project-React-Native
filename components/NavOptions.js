import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "456",
    title: "Order fodd",
    image: "https://links.papareact.com/28w",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
        </TouchableOpacity>
      )}
    />
  );
};
export default NavOptions;
