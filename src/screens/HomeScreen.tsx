import { StyleSheet, Button, View, FlatList, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import { s, vs } from "react-native-size-matters";

export interface Product {
  id: string;
  name: string;
  image: string;
  discount: number;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const data: Product[] = [
    { id: "1", name: "Product", image: "https://a.storyblok.com/f/197805/7a2484c876/how-to-create-a-car-newblogcover.png", discount: 100 },
    { id: "2", name: "Product", image: "", discount: 0 },
  ];
  // const data: Product[] = [];
  return (
    <View style={{ paddingHorizontal: s(16), paddingVertical: vs(10) }}>
      <FlatList
        data={data}
        renderItem={(items) => <ProductItem item={items.item} />}
        keyExtractor={(data) => data.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(8),
          justifyContent: "space-between",
        }}
        ListEmptyComponent={<Text>No Product</Text>}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
