import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import HomeStackParamList from '../navigation/HomeStackParamList'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import {s, vs} from 'react-native-size-matters'
import ProductService, { ProductRes } from '../network/service/productService'

type DetailProps = NativeStackScreenProps<HomeStackParamList, "Detail">;

 
const DetailScreen = ({route}: DetailProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const deleteProduct = async () => {
    try {
      const data = await ProductService.delete(route.params?.id);
      navigation.popTo('Home', {deletedId: data.id});
    } catch (error) {

    }
  }

  const editProduct = async () => {

    const product: ProductRes = {
          id: route.params?.id,
          name: `New Product ${route.params?.id} update`,
          image: "",
          discount: 0,
    };

    try {
      const data = await ProductService.edit(product);
      navigation.popTo("Home", { updatedProduct: data });
    } catch (error) {}
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{ flexDirection: "row", gap: s(12) }}>
            <TouchableOpacity onPress={deleteProduct}>
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>

            <TouchableOpacity onPress={editProduct}>
              <FontAwesome6 name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
        );
      },
    });
  });

  return (
    <SafeAreaView>
      <Text>DetailScreen ID: {route.params.id}</Text>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})