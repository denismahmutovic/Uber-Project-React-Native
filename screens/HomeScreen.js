import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView style={tw`bg-white `}>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://logo-download.com/wp-content/data/images/png/Uber-logo.png",
            }}
          />
        </View>
        <NavOptions />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  text: {
    color: "blue",
  },
});
