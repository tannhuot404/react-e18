import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  ListRenderItem,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import { s, vs } from "react-native-size-matters";
import ProductService, {
  ProductReq,
  ProductRes,
} from "../network/service/productService";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeStackParamList from "../navigation/HomeStackParamList";
import { usePagination } from "../Utils/usePagination";

type HomeProps = NativeStackScreenProps<HomeStackParamList, "Home">;
const HomeScreen = ({ route }: HomeProps) => {
  const {
    data,
    isLoadMore,
    isRefresh,
    isLoading,
    handleLoadMore,
    handlePullRefresh,
    setData,
  } = usePagination(ProductService.get);

  const renderFooter = () => {
    if (!isLoadMore) return null;
    return (
      <View style={{ paddingVertical: 20, alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  };

  const navigation = useNavigation();

  const addProduct = async () => {
    const newId = (Number(data.at(data.length - 1)?.id) + 1).toString();
    const product: ProductReq = {
      id: newId,
      name: `New Product ${newId}`,
      image: "",
      discount: 0,
    };

    try {
      const data = await ProductService.add(product);
      setData((oldValue) => [...oldValue, data]);
    } catch (error) {
      console.error("Failed to fetch all product: ", error);
    }
  };

  useEffect(() => {
    if (route.params?.deletedId) {
      setData((oldValue) =>
        oldValue.filter((p) => p.id !== route.params?.deletedId),
      );
    }

    if (route.params?.updatedProduct) {
      setData((oldValue) =>
        oldValue.map((p) =>
          p.id === route.params?.updatedProduct?.id
            ? route.params.updatedProduct
            : p,
        ),
      );
    }
  }, [route.params?.deletedId, route.params?.updatedProduct]);

  const renderItem: ListRenderItem<ProductRes> = useCallback(
    ({ item }) => <ProductItem item={item} />,
    [],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={addProduct}>
            <Ionicons name="add-circle" size={24} color="black" />
          </TouchableOpacity>
        );
      },
    });
  });

  if (isLoading)
    return (
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size={"large"} style={{ marginTop: s(18) }} />
      </View>
    );

  return (
    <View style={{ paddingHorizontal: s(16), paddingVertical: vs(10) }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(data) => data.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(8),
          justifyContent: "space-between",
        }}
        ListEmptyComponent={<Text>No Product</Text>}
        // bottom refresh
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} // 0 - 1
        // Pull Refresh
        refreshing={isRefresh}
        onRefresh={handlePullRefresh}
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
