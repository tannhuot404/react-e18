import { StyleSheet, TouchableOpacity, View, FlatList, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import { s, vs } from "react-native-size-matters";
import ProductService, { ProductReq, ProductRes } from "../network/service/productService";
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [productList, setProductList] = useState<ProductRes[]>([]);
  
  const loadData = async () => {
    try {
      const data = await ProductService.getAll();
      setProductList(data);
    } catch (error) {
      console.error("Failed to fetch all product: ",  error);
    }
  }

  const addProduct = async () => {
    const newId = (Number(productList.at(productList.length - 1)?.id ) + 1).toString();
    const product: ProductReq = {
      id: newId,
      name: `New Product ${newId}`,
      image: "",
      discount: 0
    };

    try {
      const data = await ProductService.add(product);
      setProductList(oldValue => [...oldValue, data]);
    } catch (error) {
      console.error("Failed to fetch all product: ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={addProduct}>
            <Ionicons name="add-circle" size={24} color="black" />
          </TouchableOpacity>
        );
      }
    })
  });

  return (
    <View style={{ paddingHorizontal: s(16), paddingVertical: vs(10) }}>
      <FlatList
        data={productList}
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
